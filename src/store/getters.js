const getters = {
    systemTitle: state => state.app.systemTitle,
    isLoginPage: state => state.app.isLoginPage,
    token: state => state.user.token,
    menuList: state => state.app.menuList
}

export default getters
