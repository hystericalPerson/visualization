<template>
    <div>
        <div class="module" v-for="item in list" :key="item.type">
            <p class="title" @click="onAddRenderList(item)">{{item.name}}</p>
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
        }])
        // key的子增加索引
        let valueIndex = 1

        const configInfo = inject('configInfo')

        const onAddRenderList = (item) => {
            const cloneItem = cloneDeep(item)
            cloneItem.key = `value${valueIndex++}`
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
    height: 60px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    }
}
</style>
