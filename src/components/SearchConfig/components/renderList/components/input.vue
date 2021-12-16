<template>
    <a-form-item  :label="config.name || '默认标题'" v-if="configInfo.layoutConfig.isLabel">
        <a-input :size="configInfo.layoutConfig.size" :disabled="true"></a-input>
    </a-form-item>
    <template v-else>
        <a-input :size="configInfo.layoutConfig.size" :disabled="true" :placeholder="'请输入'+(config.name || '默认标题')"></a-input>
    </template>
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
