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
            default: () => { return { name: '子流程' } }
        }
    },
    setup () {

    }
}
</script>
<style lang="less" scoped>
@import "../../../../../assets/css/variable.less";

.process{
    width: 100%;
    height: 100%;
    border: 1px solid @primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    position: relative;
    padding: 0 3%;
    span{
        padding: 0 5px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    &:before{
        width: 1px;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 3%;
        background-color: @primary-color;
    }
    &:after{
        width: 1px;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        right: 3%;
        background-color: @primary-color;
    }
}
</style>
