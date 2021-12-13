import axios from 'axios'
import store from '@/store'
import {
    message
} from 'ant-design-vue'
/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
    case 99:
        break
    case '401':
        break
    case '403':
        break
    case '404':
        break
    case '500':
        break
    default:
        console.log(other)
    }
}

// 创建axios实例
var instance = axios.create({
    timeout: 1000 * 60
})
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
instance.defaults.withCredentials = true // 让ajax携带cookie
instance.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8'

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
        const token = store.state.user.token
        // token && (config.headers.token = token)
        token && (config.headers.authorization = 'Bearer ' + token)
        return config
    },
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => {
        if (res.status === 200) {
            if (res.data.code === 99) {
                message.error(res.data.message)
                // VueRouter.push('/404')
                return Promise.reject(res.data)
            } else {
                return Promise.resolve(res.data)
            }
            // if(res.data.code === 0){
            //     return Promise.resolve(res.data)
            // }else{
            //     errorHandle(res.data.code,res.data.message)
            // }
            // return Promise.reject(res.data)
        } else {
            // return Promise.reject(res.data)
        }
    },
    // 请求失败
    error => {
        const {
            response
        } = error
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response.status, response.data.message)
            // return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                store.commit('changeNetwork', false)
            } else {
                return Promise.reject(error)
            }
        }
    })

export default instance
