<template>
    <div class="search-content">
        <TopTools class="top"></TopTools>
        <div class="main" id="main">
            <LeftComponents class="left"></LeftComponents>
            <div class="list">
                <div class="button-box">
                    <a-button class="button" @click="onPreview" size="large">
                        {{isPreview?"编辑":"预览"}}
                    </a-button>
                </div>
                <SearchCode :list="configInfo.renderList" :layout="configInfo.layoutConfig" v-if="isPreview" style="padding:10px">
                </SearchCode>
                <RenderList v-else></RenderList>
            </div>
            <RightTools class="right" v-if="!isPreview"></RightTools>
        </div>
    </div>
</template>
<script>
import TopTools from './components/topTools/index.vue'
import LeftComponents from './components/leftComponents/index.vue'
import RenderList from './components/renderList/index.vue'
import RightTools from './components/rightTools/index.vue'
import { reactive, ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import defaultLayoutConfig from './config/defaultLayoutConfig'
import SearchCode from '@/components/SearchCode/index.vue'

export default {
    components: {
        TopTools,
        LeftComponents,
        RenderList,
        RightTools,
        SearchCode
    },
    setup () {
        const configInfo = reactive({
            renderList: [],
            layoutConfig: defaultLayoutConfig,
            domConfig: null
        })
        provide('configInfo', configInfo)

        const isPreview = ref(false)

        const onPreview = () => {
            isPreview.value = !isPreview.value
            configInfo.domConfig = null
        }

        return {
            configInfo,
            onPreview,
            isPreview
        }
    }
}
</script>
<style lang="less" scoped>
.button-box{
    padding: 10px 10px 10px 30px;
    border-bottom: 1px solid #E6E6E6;
}
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
