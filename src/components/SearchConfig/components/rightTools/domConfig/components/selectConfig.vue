<template>
    <div class="config-info">
        <p class="title">默认标题</p>
        <a-input v-model:value="configInfo.domConfig.name" class="width100"/>
    </div>
    <div class="config-info">
        <p class="title">标题字段名称</p>
        <a-input v-model:value="configInfo.domConfig.key" class="width100"/>
    </div>
    <div class="config-info">
        <p class="title">下拉模式</p>
        <a-select
            v-model:value="configInfo.domConfig.mode"
            style="width:100%"
        >
            <a-select-option value="default">单选</a-select-option>
            <a-select-option value="multiple">多选</a-select-option>
            <a-select-option value="post" :disabled="true">接口</a-select-option>
        </a-select>
    </div>
    <a-divider />
    <div class="config-info" v-for="(item, index) in configInfo.domConfig.optionList" :key="index">
        <p class="title">option{{index+1}}</p>
        <a-input v-model:value="item.value" class="width100" addon-before="value" style="margin-bottom:5px;"/>
        <a-input v-model:value="item.label" class="width100" addon-before="label"/>
    </div>
</template>
<script>
import { inject, ref } from '@vue/runtime-core'
export default {
    setup () {
        const configInfo = inject('configInfo')

        return {
            configInfo
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
