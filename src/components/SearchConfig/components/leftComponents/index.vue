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
export default {
    setup () {
        const list = ref([{
            name: '输入框(input)',
            type: 'input'
        }])
        // key的子增加索引
        let valueIndex = 1

        const configInfo = inject('configInfo')

        const setInput = (data) => {
            data.inputType = 'text'
            data.isSection = false
        }

        const onAddRenderList = (item) => {
            const typeFn = {
                input: setInput
            }
            const cloneItem = cloneDeep(item)
            delete cloneItem.name
            cloneItem.key = `value${valueIndex++}`
            cloneItem.isExtend = false
            typeFn[item.type] && typeFn[item.type](cloneItem)
            configInfo.renderList.push(cloneItem)
        }

        return {
            list,
            onAddRenderList
        }
    }
}
</script>
<style lang="less" scoped>
.module{
    width: 100%;
    height: 40px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    .title{
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }
}
</style>
