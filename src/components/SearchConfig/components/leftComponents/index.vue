<template>
    <div>
        <div class="module">
            <p class="title" @click="onAddRenderList(item)" v-for="item in list" :key="item.type">{{item.name}}</p>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { inject } from '@vue/runtime-core'
import { cloneDeep } from '@antv/x6/lib/util/object/object'
import defaultDomConfig from '../../config/defaultDomConfig'
export default {
    setup () {
        const list = ref([{
            name: '输入框',
            type: 'input'
        }, {
            name: '日期',
            type: 'date'
        }, {
            name: '下拉框',
            type: 'select'
        }, {
            name: '插槽',
            type: 'slot'
        }])

        const configInfo = inject('configInfo')
        const defaultKey = {}

        const onAddRenderList = (item) => {
            const cloneItem = cloneDeep(item)
            cloneItem.key = item.type + (defaultKey[item.type] ? ++defaultKey[item.type] : (defaultKey[item.type] = 1))
            configInfo.renderList.push({
                ...cloneItem,
                ...defaultDomConfig.common,
                ...defaultDomConfig[item.type]
            })
        }

        return {
            list,
            onAddRenderList
        }
    }
}
</script>
<style lang="less" scoped>
@import "~ant-design-vue/lib/style/index";
.module{
    width: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .title{
        width: 110px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        color: @primary-color;
        margin-bottom: 0;
        border: 1px solid @primary-color;
        cursor: pointer;
        margin: 10px 10px;
    }
}
</style>
