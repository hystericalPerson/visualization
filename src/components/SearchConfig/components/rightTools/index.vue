<template>
 <!-- v-if="configInfo.renderList?.length" -->
    <div>
        <div class="config-title">
            <p :class="{active: tab === 'layout'}" @click="onChangeTab('layout')">布局配置</p>
            <p :class="{active: tab === 'dom'}" @click="onChangeTab('dom')">元素配置</p>
        </div>
        <LayoutConfig v-if="tab === 'layout'"></LayoutConfig>
        <DomConfig v-else></DomConfig>
    </div>
</template>
<script>
import { inject, ref } from '@vue/runtime-core'
import LayoutConfig from './layoutConfig.vue'
import DomConfig from './domConfig/index.vue'
export default {
    components: {
        LayoutConfig,
        DomConfig
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
        border-bottom: 1px solid #E6E6E6;
    }
    .active{
        color: white;
        background: @primary-color;
        border-bottom: 1px solid @primary-color;

    }
}
</style>
