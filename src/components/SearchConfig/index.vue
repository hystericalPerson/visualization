<template>
    <div class="search-content">
        <TopTools class="top"></TopTools>
        <div class="main" id="main">
            <LeftComponents class="left"></LeftComponents>
            <RenderList class="list"></RenderList>
            <RightTools class="right"></RightTools>
        </div>
    </div>
</template>
<script>
import TopTools from './components/topTools/index.vue'
import LeftComponents from './components/leftComponents/index.vue'
import RenderList from './components/renderList/index.vue'
import RightTools from './components/rightTools/index.vue'
import { reactive } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import defaultLayoutConfig from './config/defaultLayoutConfig'
export default {
    components: {
        TopTools,
        LeftComponents,
        RenderList,
        RightTools
    },
    setup () {
        const configInfo = reactive({
            renderList: [],
            layoutConfig: defaultLayoutConfig,
            domConfig: null
        })
        provide('configInfo', configInfo)

        return {
            configInfo
        }
    }
}
</script>
<style lang="less" scoped>
.search-content{
    height: 100%;
    border: 1px solid #E6E6E6;
    display: flex;
    flex-flow: column;
    background: white;
    .top{
        height: 60px;
        border-bottom: 1px solid #E6E6E6;
    }
    .main{
        flex: 1;
        height: 100%;
        display: flex;
        .left{
            width: 300px;
            border-right: 1px solid #E6E6E6;
        }
        .list{
            flex: 1;
        }
        .right{
            width: 250px;
            border-left: 1px solid #E6E6E6;
        }
    }
}
</style>
