<template>
    <div style="height:100%;">
        <div class="process node-font">{{info.name}}</div>
    </div>
</template>
<script>
export default {
    props: {
        info: {
            type: Object,
            default: () => { return { name: '开始' } }
        }
    },
    setup () {

    }
}
</script>
<style lang="less" scoped>
@import "../../../../../assets/css/variable.less";
@import "../../commonLess/index.less";

.process{
    width: 100%;
    height: 100%;
    border: 1px solid @borderColor;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
}
</style>
