const SETSYSTEMTITLE = 'systemTitle'
const ISLOGINPAGE = 'isLoginPage'
const SETMENULIST = 'setMenuList'
const app = {
    namespaced: true,
    state: {
        systemTitle: '',
        isLoginPage: false,
        menuList: null
    },

    mutations: {
        [SETSYSTEMTITLE]: (state, systemTitle) => {
            state.systemTitle = systemTitle
        },
        [ISLOGINPAGE]: (state, isLoginPage) => {
            state.isLoginPage = isLoginPage
        },
        [SETMENULIST]: (state, menuList) => {
            state.menuList = menuList
        }
    },

    actions: {
    }
}

export default app
