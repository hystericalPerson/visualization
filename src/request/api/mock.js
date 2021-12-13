import axios from '@request/http.js'

const api = {
    mockMenuList: '/mock/mockMenuList',
    flowList: '/mock/flowList',
    processList: '/mock/processList'

}
export function getMockMenuList (data) {
    return axios.get(api.mockMenuList)
}

export function getFlowList (data) {
    return axios.get(api.flowList)
}

export function processList (data) {
    return axios.get(api.processList)
}

/**
 * 验证taskId的有效性
 */
// export function passProcess(data) {
//     return  axios.post(api.passProcess,data);
// }
