<template>
    <a-form-item  :label="configInfo.layoutConfig.isLabel ? (config.name || '默认标题') : ''">
        <a-input
            :size="configInfo.layoutConfig.size"
            :disabled="true"
            :placeholder="configInfo.layoutConfig.isLabel ? '' : (config.name || '默认标题')"
        ></a-input>
    </a-form-item>
</template>
<script>
import { inject } from '@vue/runtime-core'
export default {
    props: {
        config: {
            type: Object,
            default: () => {}
        }
    },
    setup () {
        const configInfo = inject('configInfo')

        return {
            configInfo
        }
    }
}
</script>
