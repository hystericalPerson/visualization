<template>
    <div class="config-info">
        <p class="title">插槽名称</p>
        <a-input v-model:value="configInfo.domConfig.slotName" class="width100"/>
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
