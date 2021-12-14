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
            default: () => { return { name: '子流程' } }
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
    background: #F5F5F5;
    position: relative;
    padding: 0 3%;
    &:before{
        width: 1px;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 3%;
        background-color: @borderColor;
    }
    &:after{
        width: 1px;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        right: 3%;
        background-color: @borderColor;
    }
}
</style>
