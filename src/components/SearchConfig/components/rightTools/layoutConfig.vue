<template>
    <div class="config-module">
        <div class="config-info">
            <p class="title">行数</p>
              <a-select
                v-model:value="configInfo.layoutConfig.columnCount"
                style="width:100%"
            >
                <a-select-option :value="1">1</a-select-option>
                <a-select-option :value="2">2</a-select-option>
                <a-select-option :value="3">3</a-select-option>
                <a-select-option :value="4">4</a-select-option>
            </a-select>
        </div>
        <div class="config-info">
            <p class="title">垂直间距</p>
            <a-input-number v-model:value="configInfo.layoutConfig.verticalGutter" :precision="0" :min="8" :max="48" class="width100"/>
        </div>
        <div class="config-info">
            <p class="title">水平间距</p>
            <a-input-number v-model:value="configInfo.layoutConfig.horizontalGutter" :precision="0" :min="8" :max="48"  class="width100"/>
        </div>
        <div class="config-info">
            <p class="title">默认大小</p>
              <a-select
                v-model:value="configInfo.layoutConfig.size"
                style="width:100%"
            >
                <a-select-option value="small">小</a-select-option>
                <a-select-option value="default">正常</a-select-option>
                <a-select-option value="large">大</a-select-option>
            </a-select>
        </div>
        <div class="config-info">
            <p class="title">默认文案是否在label展示</p>
            <a-radio-group v-model:value="configInfo.layoutConfig.isLabel">
                <a-radio :value="true">是</a-radio>
                <a-radio :value="false">否</a-radio>
            </a-radio-group>
        </div>
        <div class="config-info">
            <p class="title">是否需要拓展搜索</p>
            <a-radio-group v-model:value="configInfo.layoutConfig.isExtend">
                <a-radio :value="true">是</a-radio>
                <a-radio :value="false">否</a-radio>
            </a-radio-group>
        </div>
        <div class="config-info" v-if="configInfo.layoutConfig.isExtend">
            <p class="title">拓展搜索文案</p>
            <a-input v-model:value="configInfo.layoutConfig.extendName" :precision="0" :min="8" :max="48" class="width100"/>
        </div>
    </div>
</template>
<script>
import { inject } from '@vue/runtime-core'
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
