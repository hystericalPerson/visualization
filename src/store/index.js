import app from './modules/app'
import user from './modules/user'

import getters from './getters'

import {
    createStore
} from 'vuex'

export default createStore({
    namespaced: true,
    modules: {
        app,
        user
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters
})
