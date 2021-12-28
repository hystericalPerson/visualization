<template>
    <div>
        <a-form-item  :label="layoutConfig.isLabel ? (config.name || '默认标题') : ''">
            <a-range-picker
                @change="onChange"
                :size="layoutConfig.size"
                v-model:value="searchObj[(layoutConfig.isExtend && config.isExtend) ? 'extend' : 'base'][config.startKey + config.endKey]"
                :placeholder="[`${layoutConfig.isLabel ? '' : (config.startName || '默认标题')}`,`${layoutConfig.isLabel ? '' : (config.endName || '默认标题')}`]"
            />
        </a-form-item>
        <!-- <a-input :size="layoutConfig.size" v-else :placeholder="config.placeholder || '默认标题'"></a-input> -->
    </div>
</template>
<script>
import { computed, inject } from '@vue/runtime-core'
export default {
    props: {
        config: {
            type: Object,
            default: () => {}
        }
    },
    setup (props) {
        const layoutConfig = inject('layoutConfig')
        const searchObj = inject('searchObj')

        const onChange = (data, dateString) => {
            searchObj[(layoutConfig.isExtend && props.config.isExtend) ? 'extend' : 'base'][props.config.startKey] = dateString[0]
            searchObj[(layoutConfig.isExtend && props.config.isExtend) ? 'extend' : 'base'][props.config.endKey] = dateString[1]
        }

        return {
            layoutConfig,
            searchObj,
            onChange
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
