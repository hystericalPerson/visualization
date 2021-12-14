<template>
    <div style="height:100%;">
        <div class="process node-font">
            <span>{{info.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        info: {
            type: Object,
            default: () => { }
        }
    },
    setup () {

    }
}
</script>
<style lang="less" scoped>
@import "../../../../../assets/css/variable.less";
.process{
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid #E6E6E6;
    margin:0 18px;
}
</style>
