<template>
    <div class="render-box">
        <div style="margin-top:50px">构建</div>
        <SearchCode :layout="configInfo.layoutConfig" :list="configInfo.renderList" :isConfig="true"></SearchCode>
        <div style="margin-top:50px" @click="test">预览</div>
        <SearchCode :layout="configInfo.layoutConfig" :list="configInfo.renderList" v-if="testData"></SearchCode>
    </div>
</template>
<script>
import { inject, provide, ref } from '@vue/runtime-core'
import SearchCode from '@/components/SearchCode/index.vue'
export default {
    components: {
        SearchCode
    },
    setup () {
        const configInfo = inject('configInfo')

        const setDomConfig = (data) => {
            configInfo.domConfig = data
        }
        provide('setDomConfig', setDomConfig)

        const testData = ref(false)
        const test = () => {
            testData.value = !testData.value
        }

        return {
            configInfo,
            test,
            testData
        }
    }
}
</script>
<style lang="less" scoped>
&:deep(.ant-input[disabled]){
    background: white;
    cursor: auto;
}
&:deep(.ant-form-item){
    margin-bottom: 0;
}
.render-box{
    padding: 10px;
}
</style>
