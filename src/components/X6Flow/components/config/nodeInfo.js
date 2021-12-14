const defaultName = {
    startNode: '开始',
    processNode: '流程',
    endNode: '结束',
    conditionNode: '条件',
    childProcessNode: '子流程'
}
// 节点信息
const defaultConfig = (type) => {
    const returnData = {
        name: defaultName[type],
        config: ''
    }
    return returnData
}

export {
    defaultConfig,
    defaultName
}
