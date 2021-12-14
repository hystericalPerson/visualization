<template>
    <div class="node-info-content" v-if="flow.nodeInfo">
        <a-input v-model:value="flow.nodeInfo.name" addon-before="名称" class="info-input"/>
        <a-input v-model:value="flow.nodeInfo.config" addon-before="额外配置" class="info-input"/>
    </div>
    <div class="node-info-content" v-else>
        暂未选中数据
    </div>
</template>
<script>
import { inject } from '@vue/runtime-core'
export default {
    setup () {
        // 节点
        const flow = inject('flow')

        return {
            flow
        }
    }
}
</script>
<style lang="less" scoped>
.node-info-content{
    padding: 20px;
    .info-input{
        margin-bottom: 15px;
    }
}
</style>
