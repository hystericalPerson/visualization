<template>
    <div class="top-content">
        <a-button class="button">预览</a-button>
        <a-button class="button" type="primary">生成布局配置文件</a-button>
        <a-button class="button" type="primary">导出表单配置</a-button>
    </div>
</template>
<script>
export default {
    setup () {

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
