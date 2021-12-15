<template>
    <div class="x6-content">
        <Dnd class="dnd" ref="refDnd"></Dnd>
        <Graph class="graph" :graphId="graphId" ref="refGraph"></Graph>
        <div class="noteInfo">
            <div class="btn-box">
                <a-button type='primary' @click="saveNodeList" v-if="flow.nodeInfo">保存节点</a-button>
                <a-button type='primary' @click="saveFlowList">保存流程</a-button>
            </div>
            <NoteInfo ref="refNodeInfo"></NoteInfo>
        </div>
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
import Dnd from './components/dnd/index.vue'
import Graph from './components/graph/index.vue'
import NoteInfo from './components/noteInfo/index.vue'
import { onMounted, provide } from '@vue/runtime-core'
export default {
    components: {
        Dnd,
        Graph,
        NoteInfo
    },
    props: {
        graphId: {
            default: 'main',
            type: [String, Number]
        }
    },
    setup () {
        // 定义ref
        const refDnd = ref(null)
        const refGraph = ref(null)
        const refNodeInfo = ref(null)

        // 定义流程对象
        const flow = reactive({
            graph: null,
            dnd: null,
            nodeInfo: null,
            allNodeData: {}
        })
        provide('flow', flow)

        onMounted(() => {
            refGraph.value.init()
            refDnd.value.init()
        })

        // 保存节点
        const saveNodeList = () => {
            refDnd.value.addNodeList()
        }

        // 保存流程
        const saveFlowList = () => {
            refDnd.value.addFlowList()
        }

        return {
            refDnd,
            refGraph,
            refNodeInfo,
            flow,
            saveNodeList,
            saveFlowList
        }
    }
}
</script>
<style lang="less" scoped>
.x6-content{
    display: flex;
    height: 100%;
    background: white;
    .dnd{
        width: 300px;
    }
    .graph{
        flex: 1
    }
    .noteInfo{
        width: 300px;
    }
    .btn-box{
        margin: 20px 0;
        display: flex;
        justify-content: space-around;
    }
}
</style>
