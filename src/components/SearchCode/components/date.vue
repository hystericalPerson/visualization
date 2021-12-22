<template>
    <div>
        <a-form-item  :label="layoutConfig.isLabel ? (config.name || '默认标题') : ''">
            123
        </a-form-item>
        <!-- <a-input :size="layoutConfig.size" v-else :placeholder="config.placeholder || '默认标题'"></a-input> -->
    </div>
</template>
<script>
import { inject } from '@vue/runtime-core'
export default {
    props: {
        config: {
            type: Object,
            default: () => {}
        }
    },
    setup () {
        const layoutConfig = inject('layoutConfig')
        const searchObj = inject('searchObj')

        return {
            layoutConfig,
            searchObj
        }
    }
}
</script>
<style lang="less" scoped>
&:deep(.ant-input-number){
    width: 100%;
}
&:deep(.ant-form-item-control-input-content){
    display: flex;
    align-items: center;
}
</style>
