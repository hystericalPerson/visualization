<template>
    <div style="height:100%;position: relative;" ref='fa'>
        <div class="process node-font"></div>
        <div class="box1">{{info.name}}</div>
    </div>
</template>
<script>
export default {
    props: {
        info: {
            type: Object,
            default: () => { return { name: '条件' } }
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
    clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
    box-sizing: border-box;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: @borderColor;
}

.box1{
    z-index: 10;
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 1px,~'calc(100% - 1px)' 50%,50% ~'calc(100% - 1px)',1px 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
}
</style>
