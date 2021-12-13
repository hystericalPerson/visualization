import store from '@/store'
import defaultSetting from './defaultSettings.js'

const setDefaultSetting = () => {
    store.commit('app/systemTitle', defaultSetting.systemTitle)
    store.commit('app/isLoginPage', defaultSetting.isLoginPage)
}

export default setDefaultSetting
