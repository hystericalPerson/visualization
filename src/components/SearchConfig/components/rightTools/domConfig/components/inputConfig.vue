<template>
    <div class="config-info">
        <p class="title">输入框类型</p>
        <a-select
            v-model:value="configInfo.domConfig.inputType"
            style="width:100%"
        >
            <a-select-option value="text">文本输入框</a-select-option>
            <a-select-option value="number">数字输入框</a-select-option>
        </a-select>
    </div>
    <template v-if="configInfo.domConfig.inputType === 'number'">
        <div class="config-info">
            <p class="title">是否为区间</p>
            <a-radio-group v-model:value="configInfo.domConfig.isSection">
                <a-radio :value="true">是</a-radio>
                <a-radio :value="false">否</a-radio>
            </a-radio-group>
        </div>
        <div class="config-info" v-if="configInfo.domConfig.isSection">
            <p class="title">区间最小值</p>
            <a-input-number v-model:value="configInfo.domConfig.min" :precision="0" :min="8" :max="48"  class="width100"/>
        </div>
    </template>
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
