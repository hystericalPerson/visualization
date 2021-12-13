import axios from '@request/http.js'

const api = {
    postFlowAddOrUpdate: '/api/v1/flow/addOrUpdate',
    postFlowListChain: '/api/v1/flow/listChain'

}
export function postFlowAddOrUpdate (data) {
    return axios.post(api.postFlowAddOrUpdate, data)
}
export function postFlowListChain (data) {
    return axios.post(api.postFlowListChain, data)
}
