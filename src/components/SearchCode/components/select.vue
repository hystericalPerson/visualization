<template>
    <div>
        <a-form-item  :label="layoutConfig.isLabel ? (config.name || '默认标题') : ''">
            <a-select
                :mode="config.mode==='default'? 'default':'multiple' "
                :size="layoutConfig.size"
                :placeholder="layoutConfig.isLabel ? '' : config.name"
                v-model:value="searchObj[(layoutConfig.isExtend && config.isExtend) ? 'extend' : 'base'][config.key]"
                style="width: 100%"
            >
                <a-select-option :value="item.value" v-for="(item,index) in config.optionList" :key="index">{{item.label}}</a-select-option>
            </a-select>

        </a-form-item>
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
