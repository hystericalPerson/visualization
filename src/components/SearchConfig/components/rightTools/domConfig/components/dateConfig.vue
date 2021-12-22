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
