<template>
    <div class="content">
        <X6Flow ref="flowRef" class="x6-flow"></X6Flow>
    </div>
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
<style lang="less" scoped>
.content{
    padding: 20px;
    height: 100%;
    .x6-flow{
        border: 1px solid #E6E6E6;
    }
}
</style>
