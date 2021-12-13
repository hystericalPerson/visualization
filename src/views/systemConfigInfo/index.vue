<template>
    <a-list  size="large" bordered>
        <a-list-item v-for="item in stateColor" :key="item">
            <div>
                <span class="title">{{item.desc}}： {{item.color}}</span>
                <a-alert :message="item.desc" :type="item.type" />
            </div>
        </a-list-item>
        <a-list-item>
            <div>
                <span class="title">链接色： {{systemInfo['link-color']}}</span>
                <a-button type="link" >链接色</a-button>
            </div>
        </a-list-item>
        <a-list-item>
            <div>
                <span class="title">组件/浮层圆角: {{systemInfo['border-radius-base']}}</span>
                <a-button type="primary" >组件/浮层圆角</a-button>
            </div>
        </a-list-item>
        <a-list-item>
            <div>
                <span class="title">字号: {{systemInfo['font-size-base']}}</span>
                <a-button type="primary" >{{systemInfo['font-size-base']}}</a-button>
            </div>
        </a-list-item>
    </a-list>
</template>
<script>
export default {
    setup () {
        const systemInfo = require('@/config/systemStyleSetting')
        const stateColor = {
            primary: {
                desc: '主题色',
                type: '',
                color: systemInfo['primary-color']
            },
            success: {
                desc: '成功色',
                type: 'success',
                color: systemInfo['success-color']
            },
            warning: {
                desc: '警告色',
                type: 'warning',
                color: systemInfo['warning-color']
            },
            error: {
                desc: '错误色',
                type: 'error',
                color: systemInfo['error-color']
            }
        }

        return {
            systemInfo,
            stateColor
        }
    }
}
</script>
<style lang="less" scoped>
.title{
    vertical-align: middle;
    margin-right: 20px;
}
.box{
    display: inline-block;
    margin:0 10px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
/deep/ .ant-alert{
    display: inline-block;
    margin-left: 10px;
}
</style>
