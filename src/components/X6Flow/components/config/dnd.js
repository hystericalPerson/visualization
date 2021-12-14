const systemInfo = require('@/config/systemStyleSetting')
// ports配置
const portsConfig = {
    attrs: {
        circle: {
            r: 6, // 大小
            magnet: true, // 该连接点是否可以连接（false则不可连接）
            stroke: systemInfo['primary-color'], // border颜色
            strokeWidth: 1, // border的粗细
            fill: '#fff', // 实体颜色
            style: {
                visibility: 'hidden' // 初始显示状态（visible显示，hidden隐藏）
            }
        }
    }
}
// 节点方向的基本配置
const nodePorts = (type) => {
    const typeDirection = {
        startNode: ['bottom'],
        endNode: ['top']
    }
    const direction = typeDirection[type] || ['top', 'bottom', 'left', 'right']
    const returnData = {
        groups: {},
        items: []
    }
    direction.forEach(item => {
        returnData.groups[item] = {
            ...{
                position: item // 位置
            },
            ...portsConfig
        }
        returnData.items.push({
            group: item
        })
    })
    return returnData
}
// 节点信息
const nodeInfo = {
    processNode: 'processNode',
    startNode: 'startNode',
    endNode: 'endNode',
    conditionNode: 'conditionNode',
    childProcessNode: 'childProcessNode',
    cmptProcessNode: 'cmptProcessNode'
}
// 节点类型的创建配置
const nodeTypeConfig = (type) => {
    const baseCmpt = {
        width: 100,
        height: 50
    }
    const config = {
        type: type,
        shape: 'vue-shape',
        width: baseCmpt.width,
        height: baseCmpt.height,
        ports: nodePorts(type),
        component: nodeInfo[type]
    }
    return config
}
export {
    nodePorts,
    nodeTypeConfig,
    nodeInfo
}
