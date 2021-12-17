<template>
    <div class="top-content">
        <div>
            <a-button class="button" @click="onPreview">预览</a-button>
            <a-button class="button" type="primary">导出布局配置</a-button>
            <a-button class="button" type="primary">导出表单配置</a-button>
        </div>
        <a-modal
            v-model:visible="visible"
            title="预览"
            width="100%"
            wrap-class-name="full-modal"
            :footer="null"
        >
            <searchCode :list="configInfo.renderList" :layout="configInfo.layoutConfig" v-if="visible">
            </searchCode>
        </a-modal>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import searchCode from '@/components/SearchCode/index.vue'
import { inject } from '@vue/runtime-core'
export default {
    components: {
        searchCode
    },
    setup () {
        const visible = ref(false)
        const configInfo = inject('configInfo')

        const onPreview = () => {
            visible.value = true
        }

        return {
            visible,
            onPreview,
            configInfo
        }
    }
}
</script>
<style lang="less" scoped>
.top-content{
    display: flex;
    align-items: center;
    padding: 0 15px;
    .button{
        margin-right: 10px;
    }
}
</style>
<style lang="less">
.full-modal{
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>
