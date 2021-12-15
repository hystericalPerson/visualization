<template>
    <div v-if="configInfo.renderList?.length">
        <div class="config-title">
            <p :class="{active: tab === 'layout'}" @click="onChangeTab('layout')">布局配置</p>
            <p :class="{active: tab === 'dom'}" @click="onChangeTab('dom')">元素配置</p>
        </div>
        <LayoutConfig v-if="tab === 'layout'"></LayoutConfig>
    </div>
    <div v-else  class="config-module">暂无列表数据，无法进行配置</div>
</template>
<script>
import { inject, ref } from '@vue/runtime-core'
import LayoutConfig from './layoutConfig.vue'
export default {
    components: {
        LayoutConfig
    },
    setup () {
        const configInfo = inject('configInfo')

        // tab
        const tab = ref('layout')
        // 切换tab
        const onChangeTab = (value) => {
            tab.value = value
        }

        return {
            configInfo,
            tab,
            onChangeTab
        }
    }
}
</script>
<style lang="less" scoped>
@import "~ant-design-vue/lib/style/index";
.config-module{
    padding-top: 15px;
    text-align: center;
}
.config-title{
    width: 100%;
    display: flex;
    p{
        width: 50%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
    }
    .active{
        color: @primary-color;
    }
}
</style>
