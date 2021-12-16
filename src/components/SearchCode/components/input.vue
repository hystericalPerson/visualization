<template>
    <div>
        <a-form-item  :label="layoutConfig.isLabel ? (config.name || '默认标题') : ''">
            <!-- text -->
            <template v-if="config.inputType === 'text'">
                <a-input :size="layoutConfig.size" :placeholder="layoutConfig.isLabel ? '' : config.name" v-model:value="searchObj[(layoutConfig.isExtend && config.isExtend) ? 'extend' : 'base'][config.key]"></a-input>
            </template>
            <!-- number -->
            <template v-if="config.inputType === 'number'">
                <a-input-number :size="layoutConfig.size" :placeholder="layoutConfig.isLabel ? '' : config.name" v-model:value="searchObj[(layoutConfig.isExtend && config.isExtend) ? 'extend' : 'base'][config.key]"></a-input-number>
            </template>
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
</style>
