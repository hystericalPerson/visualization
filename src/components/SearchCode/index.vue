<template>
    <div>
        <a-form>
            {{list}}
            <a-row :gutter="[layoutConfig.horizontalGutter, layoutConfig.verticalGutter]">
                <a-col v-for="item in list" :key="item.type" :span="24/layoutConfig.columnCount">
                    <div @click="onClickFormItem(item)" :class="{isActive: isConfig && (item.key === isActiveKey) }">
                         <a-form-item  :label="item.placeholder || '默认标题'" v-if="layoutConfig.isLabel">
                            <a-input :size="layoutConfig.size" :disabled="isConfig"></a-input>
                        </a-form-item>
                        <a-input :size="layoutConfig.size" :disabled="isConfig" v-else :placeholder="item.placeholder || '默认标题'"></a-input>
                    </div>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
import defaultLayoutConfig from './config/defaultLayoutConfig'
import { inject } from '@vue/runtime-core'
export default {
    props: {
        isConfig: {
            type: Boolean,
            default: false
        },
        list: {
            type: Array,
            default: () => []
        },
        layout: {
            type: Object,
            default: () => null
        }
    },
    setup (props) {
        const layoutConfig = props.isConfig ? reactive(props.layout) : reactive({
            ...defaultLayoutConfig,
            ...props.layout
        })

        const setDomConfig = inject('setDomConfig', () => {})
        // 在config下设置参数信息函数

        // 当前选中的节点
        const isActiveKey = ref('')

        // item点击事件
        const onClickFormItem = (item) => {
            props.isConfig && setActiveAndInject(item)
        }
        // 设置样式并传递数据
        const setActiveAndInject = (item) => {
            isActiveKey.value = item.key
            setDomConfig(item)
        }

        return {
            layoutConfig,
            onClickFormItem,
            isActiveKey
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
</style>
