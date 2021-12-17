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
            <p class="title">最小值</p>
            <a-input-number v-model:value="configInfo.domConfig.min" class="width100"/>
        </div>
        <div class="config-info">
            <p class="title">最大值</p>
            <a-input-number v-model:value="configInfo.domConfig.max" class="width100"/>
        </div>
         <div class="config-info">
            <p class="title">精度</p>
            <a-select
            v-model:value="configInfo.domConfig.precision"
            style="width:100%"
        >
            <a-select-option :value="0">整数</a-select-option>
                <a-select-option :value="1">保留一位小数</a-select-option>
                <a-select-option :value="2">保留两位小数</a-select-option>
            </a-select>
        </div>
        <div class="config-info">
            <p class="title">是否为区间</p>
            <a-radio-group v-model:value="configInfo.domConfig.isSection" @change="onChangeSection">
                <a-radio :value="true">是</a-radio>
                <a-radio :value="false">否</a-radio>
            </a-radio-group>
            <p class="tip">有区间时，字段名称失效</p>
        </div>
        <template v-if="configInfo.domConfig.isSection">
            <div class="config-info" v-if="configInfo.domConfig.isSection">
                <p class="title">第一个字段名称</p>
                <a-input v-model:value="configInfo.domConfig.minKey" class="width100"/>
            </div>
            <div class="config-info" v-if="configInfo.domConfig.isSection">
                <p class="title">第二个字段名称</p>
                <a-input v-model:value="configInfo.domConfig.maxKey" class="width100"/>
            </div>
        </template>
    </template>
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
