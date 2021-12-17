<template>
    <div>
        <a-form-item  :label="layoutConfig.isLabel ? (config.name || '默认标题') : ''">
            <!-- text -->
            <template v-if="config.inputType === 'text'">
                <a-input
                    :size="layoutConfig.size"
                    :placeholder="layoutConfig.isLabel ? '' : config.name"
                    v-model:value="searchObj[(layoutConfig.isExtend && config.isExtend) ? 'extend' : 'base'][config.key]"
                ></a-input>
            </template>
            <!-- number -->
            <template v-if="config.inputType === 'number'">
                <a-input-number
                    :size="layoutConfig.size"
                    :precision="config.precision"
                    :min="config.min"
                    :max="config.max"
                    :placeholder="layoutConfig.isLabel ? '' : config.name"
                    v-model:value="searchObj[(layoutConfig.isExtend && config.isExtend) ? 'extend' : 'base'][config.isSection?config.minKey:config.key]"
                ></a-input-number>
                <span v-if="config.isSection" style="margin:0 5px;">~</span>
                <a-input-number
                    v-if="config.isSection"
                    :size="layoutConfig.size"
                    :precision="config.precision"
                    :min="config.min"
                    :max="config.max"
                    v-model:value="searchObj[(layoutConfig.isExtend && config.isExtend) ? 'extend' : 'base'][config.maxKey]"
                    :placeholder="layoutConfig.isLabel ? '' : (config.name || '默认标题')"
                ></a-input-number>
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
&:deep(.ant-form-item-control-input-content){
    display: flex;
    align-items: center;
}
</style>
