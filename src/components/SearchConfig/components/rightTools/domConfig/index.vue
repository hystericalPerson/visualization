<template>
    <div v-if="configInfo.domConfig" class="config-module">
        <!-- 组件公共配置 -->
        <div class="config-info">
            <p class="title">默认标题</p>
            <a-input v-model:value="configInfo.domConfig.name" class="width100"/>
        </div>
        <div class="config-info">
            <p class="title">标题字段名称</p>
            <a-input v-model:value="configInfo.domConfig.key" class="width100"/>
        </div>
        <div class="config-info">
            <p class="title">是否为扩展搜索</p>
            <a-radio-group v-model:value="configInfo.domConfig.isExtend">
                <a-radio :value="true">是</a-radio>
                <a-radio :value="false">否</a-radio>
            </a-radio-group>
        </div>
        <component :is="getDomType()"></component>
    </div>
    <div v-else class="config-module">
        请先选择节点后进行配置
    </div>
</template>
<script>
import { inject } from '@vue/runtime-core'
import inputConfig from './components/inputConfig.vue'
export default {
    components: {
        inputConfig
    },
    setup () {
        const configInfo = inject('configInfo')

        const getDomType = () => {
            return configInfo.domConfig.type + 'Config'
        }

        return {
            configInfo,
            getDomType
        }
    }
}
</script>
<style lang="less" scoped>
.config-info{
    text-align: left;
    margin: 0 15px 20px;
    .title{
        margin-bottom: 5px;
    }
    .width100{
        width: 100%;
    }
}
</style>
