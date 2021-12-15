<template>
    <div>
        {{configInfo}}
        <a-row :gutter="[configInfo.layoutConfig.horizontalGutter, configInfo.layoutConfig.verticalGutter]">
            <a-col v-for="item in configInfo.renderList" :key="item.type" :span="24/configInfo.layoutConfig.columnCount">
                <a-input></a-input>
            </a-col>
        </a-row>
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
