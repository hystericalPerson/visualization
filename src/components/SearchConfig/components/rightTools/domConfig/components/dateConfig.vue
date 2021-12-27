<template>
    <div class="config-info">
        <p class="title">开始标题名称</p>
        <a-input v-model:value="configInfo.domConfig.startName" class="width100"/>
    </div>
    <div class="config-info">
        <p class="title">开始标题字段</p>
        <a-input v-model:value="configInfo.domConfig.startKey" class="width100"/>
    </div>
    <div class="config-info">
        <p class="title">结束标题名称</p>
        <a-input v-model:value="configInfo.domConfig.endName" class="width100"/>
    </div>
    <div class="config-info">
        <p class="title">结束标题字段</p>
        <a-input v-model:value="configInfo.domConfig.endKey" class="width100"/>
    </div>
</template>
<script>
import { inject } from '@vue/runtime-core'
export default {
    setup () {
        const configInfo = inject('configInfo')

        const onChangeSection = (data) => {
            if (data.target.value) {
                configInfo.domConfig.minKey = configInfo.domConfig.key + 'min'
                configInfo.domConfig.maxKey = configInfo.domConfig.key + 'max'
            } else {
                delete configInfo.domConfig.minKey
                delete configInfo.domConfig.maxKey
            }
        }

        return {
            configInfo,
            onChangeSection
        }
    }
}
</script>
<style lang="less" scoped>
.config-info{
    text-align: left;
    margin: 0 15px 20px;
    .title{
        margin-bottom: 5px;
    }
    .width100{
        width: 100%;
    }
}
</style>
