<template>
    <div class="module-box module-base-box">
        <p class="title">基本组件</p>
        <div class="node-box">
            <startNode @mousedown="addCmptGraphNode('startNode',null,$event)" class="dnd-node"></startNode>
            <endNode @mousedown="addCmptGraphNode('endNode',null,$event)" class="dnd-node"></endNode>
            <processNode @mousedown="addCmptGraphNode('processNode',null,$event)" class="dnd-node"></processNode>
            <conditionNode @mousedown="addCmptGraphNode('conditionNode',null,$event)" class="dnd-node"></conditionNode>
            <childProcessNode @mousedown="addCmptGraphNode('childProcessNode',null,$event)" class="dnd-node"></childProcessNode>
            <div class="dnd-node"></div>
        </div>
        <div class="module-box" v-if="nodeList.length">
            <p class="title">节点库</p>
            <cmptList
                v-for="cmpt in nodeList"
                :key="cmpt.name"
                :info="cmpt"
                @mousedown="addCmptGraphNode('cmptProcessNode',cmpt,$event)"
            ></cmptList>
        </div>
        <div class="module-box" v-if="flowList.length">
            <p class="title">流程库</p>
            <cmptList
                v-for="cmpt in flowList"
                :key="cmpt.name"
                :info="cmpt"
                @click="onOpenFlow(cmpt)"
            ></cmptList>
        </div>
        <a-modal v-model:visible="model.visible" title="流程图标题" cancelText="取消" @ok="saveFlowList" okText="确认">
            <a-input v-model:value="model.name"></a-input>
        </a-modal>
    </div>

</template>
<script>
import '@antv/x6-vue-shape'
import { Addon, Graph } from '@antv/x6'
import { nodeTypeConfig, nodeInfo } from '../config/dnd.js'
import { reactive, ref } from '@vue/reactivity'
import processNode from '../vueFlow/process/index.vue'
import startNode from '../vueFlow/start/index.vue'
import endNode from '../vueFlow/end/index.vue'
import conditionNode from '../vueFlow/condition/index.vue'
import childProcessNode from '../vueFlow/childProcess/index.vue'
import cmptProcessNode from '../vueFlow/cmptProcess/index.vue'
import cmptList from '../vueFlow/cmptList/index.vue'
import { Modal } from 'ant-design-vue'
import {
    defaultConfig
} from '../config/nodeInfo.js'
import { inject, nextTick } from '@vue/runtime-core'
import { cloneDeep } from '@antv/x6/lib/util/object/object'
// 定义组件的字段信息
const nodeCmpt = {
    startNode: startNode,
    processNode: processNode,
    endNode: endNode,
    conditionNode: conditionNode,
    childProcessNode: childProcessNode,
    cmptProcessNode: cmptProcessNode
}
export default {
    components: {
        processNode,
        startNode,
        endNode,
        conditionNode,
        childProcessNode,
        cmptList
    },
    setup () {
        const flow = inject('flow')
        // 触发select时暂存nodeData的数据
        const cellNodeInfo = ref('')
        // 初始化
        const init = () => {
            onCreateDnd()
            onRegisterV3Comp()
        }
        // 创建dnd
        const onCreateDnd = () => {
            flow.dnd = new Addon.Dnd({
                target: flow.graph,
                getDropNode: (node) => {
                    const cloneNode = node.clone({ keepId: true })
                    cloneNode.data = flow.allNodeData[cloneNode.id]
                    // 清空选区
                    nextTick(() => {
                        flow.graph.cleanSelection(cloneNode)
                        // cellClickCallback(cloneNode)
                    })
                    return cloneNode
                }
            })
        }
        // 创建vue3组件
        const onRegisterV3Comp = () => {
            for (const item in nodeInfo) {
                Graph.registerVueComponent(`${item}`, {
                    template: `<${item} :info="allNodeData[currentId]"></${item}>`,
                    components: {
                        [item]: nodeCmpt[item]
                    },
                    data () {
                        return {
                            flow: flow,
                            allNodeData: flow.allNodeData,
                            currentId: ''
                        }
                    },
                    mounted () {
                        this.currentId = this.$el.closest('[data-shape=vue-shape]').getAttribute('data-cell-id')
                        if (!this.flow.allNodeData[this.currentId]) {
                            this.flow.allNodeData[this.currentId] = cloneDeep(defaultConfig(item))
                            cellNodeInfo.value && (this.flow.allNodeData[this.currentId] = cloneDeep(cellNodeInfo.value))
                            !cellNodeInfo.value && (this.flow.allNodeData[this.currentId] = cloneDeep(defaultConfig(item)))
                        }
                    }
                }, true)
            }
        }
        // 点击菜单新增画布结点 接口节点
        const addCmptGraphNode = (type, info, e) => {
            cellNodeInfo.value = info
            const template = {
                ...nodeTypeConfig(type),
                ...{
                    components: {
                        [type]: nodeCmpt[type]
                    }
                }
            }
            type === 'cmptProcessNode' && (template.width = 200)
            const node = flow.graph.createNode(template)
            flow.dnd.start(node, e)
        }

        // 节点列表信息
        const nodeList = ref([])
        const addNodeList = () => {
            const cloneData = cloneDeep(flow.nodeInfo)
            nodeList.value.push(cloneData)
        }

        // 流程信息
        const model = reactive({
            visible: false,
            name: ''
        })
        const flowList = ref([])
        const addFlowList = (data) => {
            model.visible = true
            model.data = flow.graph.toJSON()
        }
        const saveFlowList = () => {
            model.visible = false
            flowList.value.push({
                data: model.data,
                name: model.name
            })
            model.name = ''
        }
        // 打开流程图
        const onOpenFlow = (cell) => {
            Modal.confirm({
                title: '确认打开新流程?',
                content: ' 新流程将覆盖旧流程图',
                okText: '确认',
                cancelText: '取消',
                onOk () {
                    renderGraph(cell.data.cells)
                },
                onCancel () {
                    console.log('Cancel')
                }
            })
        }
        // 渲染画布
        const renderGraph = (cells) => {
            // 清空数据 画布
            flow.graph.clearCells()
            for (const key in flow.allNodeData) {
                delete flow.allNodeData[key]
            }
            cells.forEach(cell => {
                if (cell.shape !== 'edge') {
                    flow.allNodeData[cell.id] = cloneDeep(cell.data)
                    flow.graph.addNode(cell)
                }
            })
            cells.forEach(cell => {
                if (cell.shape === 'edge') {
                    flow.graph.addEdge(cell)
                }
            })
        }

        return {
            init,
            addCmptGraphNode,
            nodeList,
            addNodeList,
            flowList,
            addFlowList,
            saveFlowList,
            model,
            onOpenFlow
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../../../assets/css/variable.less";

.dnd-node{
    width: 80px;
    height: 50px !important;
    display: inline-block;
    margin-bottom: 15px;
    cursor: grab;
}
.module-base-box{
    border-right: 1px solid  #E6E6E6;
}
.module-box{
    .title{
        font-size: 14px;
        font-weight: bold;
        padding-left: 20px;
        padding-top: 22px;
        margin-bottom: 0;
        color: #212121;
    }
    .node-box{
        margin-top: 20px;
        padding: 0 22px 5px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .radio-box{
        width: 100%;
        overflow-x: auto;
        overflow-y:hidden;
        text-align: center;
    }
     &:deep(.ant-radio-group){
        white-space: nowrap;
        margin-top: 16px;
        padding: 0 5px;
     }
     &:deep(.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)){
         background: @primary-color;
         color: white;
     }
    &:deep(.ant-radio-button-wrapper){
        padding: 0 32px;
        height: 34px;
        line-height: 34px;
        background: #F5F5F5;
    }
    .cmpt-spin{
        margin-top: 10px;
    }
}
</style>
