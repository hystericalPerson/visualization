<template>
    <div class="content">
        <Dnd class="dnd" :ref="refDnd"></Dnd>
        <Graph class="graph" :graphId="graphId" ref="refGraph"></Graph>
        <NoteInfo class="noteInfo" ref="refNodeInfo"></NoteInfo>
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
import Dnd from './components/dnd/index.vue'
import Graph from './components/graph/index.vue'
import NoteInfo from './components/noteInfo/index.vue'
import { provide } from '@vue/runtime-core'
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
            nodeInfo: null
        })
        provide('flow', flow)

        return {
            refDnd,
            refGraph,
            refNodeInfo,
            flow
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    display: flex;
    height: 100%;
    padding: 20px;
    .dnd{
        width: 300px;
    }
    .graph{
        flex: 1
    }
    .noteInfo{
        width: 300px;
    }
}
</style>
