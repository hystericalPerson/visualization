<template>
    <X6Flow ref="flowRef"></X6Flow>
</template>
<script>
import X6Flow from '@/components/X6Flow/index.vue'
import { ref } from '@vue/reactivity'
export default {
    components: {
        X6Flow
    },
    setup () {
        const flowRef = ref('')

        return {
            flowRef
        }
    }
}
</script>
