<template>
    <div class="render-box">
         <a-form>
            <!-- {{configInfo.renderList}} -->
            <a-row :gutter="[configInfo.layoutConfig.horizontalGutter, configInfo.layoutConfig.verticalGutter]">
                <a-col v-for="item in configInfo.renderList" :key="item.type" :span="(item.isCustomWidth && item.customWidth) || (24/configInfo.layoutConfig.columnCount)">
                    <div @click="onClickFormItem(item)" :class="{isActive: item.key === isActiveKey }" style="height:100%;">
                        <div v-if="item.type === 'slot'" class="slot">
                            插槽
                        </div>
                        <component :is="item.type + 'Components'" :config="item" v-else></component>
                    </div>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script>
import { inject, provide, ref } from '@vue/runtime-core'
import inputComponents from './components/input.vue'
import dateComponents from './components/date.vue'
import selectComponents from './components/select.vue'
export default {
    components: {
        inputComponents,
        dateComponents,
        selectComponents
    },
    setup () {
        const configInfo = inject('configInfo')

        const setDomConfig = (data) => {
            configInfo.domConfig = data
        }

        // 当前选中的节点
        const isActiveKey = ref('')

        // item点击事件
        const onClickFormItem = (item) => {
            isActiveKey.value = item.key
            setDomConfig(item)
        }

        const getComponents = (type) => {

        }

        return {
            configInfo,
            onClickFormItem,
            isActiveKey,
            getComponents
        }
    }
}
</script>
<style lang="less" scoped>
@import "~ant-design-vue/lib/style/index";
.isActive{
    position: relative;
    &::after{
        width: calc(~'100% + 6px');
        height: calc(~'100% + 6px');
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        border: 1px solid @primary-color;
    }
}
&:deep(.ant-input[disabled]),
&:deep(.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector),
&:deep(.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector input),
&:deep(.ant-calendar-range-picker-input[disabled]),
&:deep(.ant-input-disabled){
    background: white;
    cursor: auto;
}
&:deep(.ant-form-item){
    margin-bottom: 0;
}
&:deep(.ant-calendar-picker){
    width: 100%;
}
.render-box{
    padding: 10px;
}
.slot{
    height: 100%;
    min-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: @warning-color 1px solid;
}
</style>
