import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/', // 页面不存在的情况下会跳到404页面
    meta: { title: '首页' },
    component: () => import('../views/home/index.vue')
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
