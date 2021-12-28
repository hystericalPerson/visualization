<template>
    <div v-if="configInfo.domConfig" class="config-module">
        <!-- 组件公共配置 -->
        <div class="config-info">
            <p class="title">是否为扩展搜索</p>
            <a-radio-group v-model:value="configInfo.domConfig.isExtend">
                <a-radio :value="true">是</a-radio>
                <a-radio :value="false">否</a-radio>
            </a-radio-group>
        </div>
        <div class="config-info">
            <p class="title">是否设置自定义宽度</p>
            <a-radio-group v-model:value="configInfo.domConfig.isCustomWidth">
                <a-radio :value="true">是</a-radio>
                <a-radio :value="false">否</a-radio>
            </a-radio-group>
        </div>
        <div class="config-info" v-if="configInfo.domConfig.isCustomWidth">
            <p class="title">自定义宽度</p>
            <a-input-number v-model:value="configInfo.domConfig.customWidth" class="width100" :min="4" :max="24"/>
            <p class="tip">建议设置6，12，18，24</p>
        </div>
        <!-- <div class="config-info">
            <p class="title">是否需要插槽</p>
            <a-radio-group v-model:value="configInfo.domConfig.isSlot">
                <a-radio :value="true">是</a-radio>
                <a-radio :value="false">否</a-radio>
            </a-radio-group>
            <p class="tip">插槽名称为字段名称</p>
        </div> -->
        <component :is="getDomType()"></component>
         <p>
        {{configInfo.domConfig}}
        </p>
    </div>
    <div v-else class="config-module">
        请先选择节点后进行配置
    </div>
</template>
<script>
import { inject } from '@vue/runtime-core'
import inputConfig from './components/inputConfig.vue'
import dateConfig from './components/dateConfig.vue'
import selectConfig from './components/selectConfig.vue'
import slotConfig from './components/slotConfig.vue'
export default {
    components: {
        inputConfig,
        dateConfig,
        selectConfig,
        slotConfig
    },
    setup () {
        const configInfo = inject('configInfo')

        const getDomType = () => {
            return configInfo.domConfig.type + 'Config'
        }
        const domHeight = (document.getElementById('main').clientHeight - 40) + 'px'
        console.log(domHeight)

        return {
            configInfo,
            getDomType,
            domHeight
        }
    }
}
</script>
<style lang="less" scoped>

.config-module{
    padding: 15px 0;
    text-align: center;
    overflow: auto;
    height: v-bind(domHeight);
}
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
&:deep(.tip){
    color: red;
}
</style>
