import storage from 'store'
const SETTOKEN = 'setToken'

const user = {
    namespaced: true,
    state: {
        token: ''
    },

    mutations: {
        [SETTOKEN]: (state, token) => {
            state.systemTitle = token
            storage.set('token', token)
        }
    },

    actions: {
    }
}

export default user
