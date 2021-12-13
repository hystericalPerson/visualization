import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../layout/defaultLayout.vue'),
    children: [{
        path: 'configInfo',
        name: 'ConfigInfo',
        component: () => import('../views/systemConfigInfo/index.vue')
    }, {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
    }, {
        path: '/flow',
        name: 'flow',
        component: () => import('../views/flow/index.vue')
    }]
    // component: () => import('../views/home/index.vue')
}, {
    path: '/:catchAll(.*)', // 页面不存在的情况下会跳到404页面
    meta: { title: '404' },
    component: () => import('../views/error/404.vue')
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
