// 首先引入Mock
const Mock = require('mockjs')

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '500-1500'
})

Mock.mock('/mock/mockMenuList', {
    code: 0,
    message: '获取数据成功',
    data: [],
    success: true
})
