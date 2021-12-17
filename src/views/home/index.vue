<template>
    <div class="content">
        <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-card :title="item.title" @click="onJumpPage(item)">{{item.desc || '暂未实现'}}</a-card>
            </a-list-item>
        </template>
    </a-list>
    </div>
</template>
<script>
import { notification } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import less from 'less'
const data = [{
    title: '流程图',
    desc: 'antv/x6',
    path: '/flow'
}, {
    title: '可视化配置搜索栏',
    desc: 'vue3',
    path: '/search'
}, {
    title: 'Title 3'
}, {
    title: 'Title 4'
}]
export default {
    setup () {
        const router = useRouter()
        const onJumpPage = (item) => {
            if (item.desc) {
                router.push(item.path)
            } else {
                notification.open({
                    message: '提示',
                    description: '暂未实现'
                })
            }
        }

        return {
            data,
            onJumpPage
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    padding: 50px;
}
</style>
