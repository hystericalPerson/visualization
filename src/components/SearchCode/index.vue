<template>
    <div>
        <a-form>
            <a-row :gutter="[layoutConfig.horizontalGutter, layoutConfig.verticalGutter]">
                <template v-for="item in list" :key="item.type" >
                    <a-col :span="(item.isCustomWidth && item.customWidth) || (24/layoutConfig.columnCount)" v-if="!(layoutConfig.isExtend && item.isExtend)">
                        <component :is="item.type + 'Component'" :config="item"></component>
                    </a-col>
                </template>
                <template  v-if="searchState">
                    <template v-for="item in list" :key="item.type">
                        <a-col :span="(item.isCustomWidth && item.customWidth) || (24/layoutConfig.columnCount)" v-if="layoutConfig.isExtend && item.isExtend">
                            <component :is="item.type + 'Component'" :config="item"></component>
                        </a-col>
                    </template>
                </template>
                <a-col :span="24/layoutConfig.columnCount">
                    <a-button type="text" v-if="layoutConfig.isExtend" @click="setSearchState">{{searchState?'收缩':'展开'}}</a-button>
                    <a-button type="primary" :size="layoutConfig.size" style="margin-right:10px;">搜索</a-button>
                    <a-button :size="layoutConfig.size">重置</a-button>
                </a-col>
            </a-row>
        </a-form>
        {{searchObj}}
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
import defaultLayoutConfig from './config/defaultLayoutConfig'
import inputComponent from './components/input.vue'
import dateComponent from './components/date.vue'
import selectComponent from './components/select.vue'
import { provide } from '@vue/runtime-core'
export default {
    components: {
        inputComponent,
        dateComponent,
        selectComponent
    },
    props: {
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
        // 布局配置
        const layoutConfig = reactive({
            ...defaultLayoutConfig,
            ...props.layout
        })
        provide('layoutConfig', layoutConfig)

        // 搜索对象
        const searchObj = reactive({
            base: {},
            extend: {}
        })
        const setDate = (item) => {
            searchObj[(layoutConfig.isExtend && item.isExtend) ? 'extend' : 'base'][item.startKey] = ''
            searchObj[(layoutConfig.isExtend && item.isExtend) ? 'extend' : 'base'][item.endKey] = ''
            console.log(searchObj)
        }
        const setInput = (item) => {
            if (item.isSection) {
                searchObj[(layoutConfig.isExtend && item.isExtend) ? 'extend' : 'base'][item.minKey] = ''
                searchObj[(layoutConfig.isExtend && item.isExtend) ? 'extend' : 'base'][item.maxKey] = ''
            } else {
                searchObj[(layoutConfig.isExtend && item.isExtend) ? 'extend' : 'base'][item.key] = ''
            }
        }
        const setSelect = (item) => {
            console.log(item)
            searchObj[(layoutConfig.isExtend && item.isExtend) ? 'extend' : 'base'][item.key] = null
        }
        const setSearchObj = () => {
            const objFn = {
                date: setDate,
                input: setInput,
                select: setSelect
            }
            props.list.forEach(item => {
                objFn[item.type](item)
            })
        }
        setSearchObj()
        provide('searchObj', searchObj)

        // 展开收缩状态以及函数
        const searchState = ref(false)
        const setSearchState = () => {
            searchState.value = !searchState.value
        }

        return {
            layoutConfig,
            searchObj,
            searchState,
            setSearchState
        }
    }
}
</script>
<style lang="less" scoped>
&:deep(.ant-form-item){
    margin-bottom: 0;
}
&:deep(.ant-form-item-label > label){
    height: 100%;
}
</style>
