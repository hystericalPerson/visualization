<template>
    <div class="render-box">
        <a-form>
            <a-row :gutter="[configInfo.layoutConfig.horizontalGutter, configInfo.layoutConfig.verticalGutter]">
                <a-col v-for="item in configInfo.renderList" :key="item.type" :span="24/configInfo.layoutConfig.columnCount">
                    <div>
                         <a-form-item  :label="item.placeholder || '默认标题'" v-if="configInfo.layoutConfig.isLabel">
                            <a-input :size="configInfo.layoutConfig.size" :disabled="true"></a-input>
                        </a-form-item>
                        <a-input :size="configInfo.layoutConfig.size" :disabled="true" v-else :placeholder="item.placeholder || '默认标题'"></a-input>
                    </div>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script>
import { inject } from '@vue/runtime-core'
export default {
    setup () {
        const configInfo = inject('configInfo')

        return {
            configInfo
        }
    }
}
</script>
<style lang="less" scoped>
&:deep(.ant-input[disabled]){
    background: white;
    cursor: auto;
}
&:deep(.ant-form-item){
    margin-bottom: 0;
}
.render-box{
    padding: 10px;
}
</style>
