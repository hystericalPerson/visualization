<template>
    <div :id="graphId"></div>
</template>
<script>
import { Graph } from '@antv/x6'
import {
    createDefaultSetting
} from '../config/graph.js'
import { inject } from '@vue/runtime-core'
export default {
    props: {
        graphId: {
            default: 'main',
            type: [String, Number]
        }
    },
    setup (props) {
        const flow = inject('flow')

        // init
        const init = () => {
            onCreateGraph()
            onBindKey()
            onBindPortsSetting()
            onBindSelect()
        }
        // 创建画布
        const onCreateGraph = () => {
            flow.graph = new Graph({
                ...createDefaultSetting(props.graphId, `${props.graphId}map`)
            })
        }
        // 绑定画布的键盘事件
        const onBindKey = () => {
            onBindKeyCopy()
            onBindKeyPaste()
            onBindKeyShear()
            onBindKeyUndo()
            onBindKeyRedo()
            onBindKeySelectAll()
            onBindKeyDel()
        }
        // 绑定键盘事件 复制
        const onBindKeyCopy = () => {
            flow.graph.bindKey(['meta+c', 'ctrl+c'], () => {
                // getSelectedCells 获取节点
                const cells = flow.graph.getSelectedCells()
                if (cells.length) {
                    flow.graph.copy(cells)
                }
                return false
            })
        }
        // 绑定键盘事件 粘贴
        const onBindKeyPaste = () => {
            flow.graph.bindKey(['meta+v', 'ctrl+v'], () => {
                // cleanSelection 清空选区
                if (!flow.graph.isClipboardEmpty()) {
                    const cells = flow.graph.paste({ offset: 32 })
                    flow.graph.cleanSelection()
                    flow.graph.select(cells)
                }
                return false
            })
        }
        // 绑定键盘事件 剪切
        const onBindKeyShear = () => {
            flow.graph.bindKey(['meta+x', 'ctrl+x'], () => {
                const cells = flow.graph.getSelectedCells()
                if (cells.length) {
                    flow.graph.cut(cells)
                }
                return false
            })
        }
        // 绑定键盘事件 撤销
        const onBindKeyUndo = () => {
            flow.graph.bindKey(['meta+z', 'ctrl+z'], () => {
                if (flow.graph.history.canUndo()) {
                    flow.graph.history.undo()
                }
                return false
            })
        }
        // 绑定键盘事件 重做
        const onBindKeyRedo = () => {
            flow.graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
                if (flow.graph.history.canRedo()) {
                    flow.graph.history.redo()
                }
                return false
            })
        }
        // 绑定键盘事件 全选
        const onBindKeySelectAll = () => {
            flow.graph.bindKey(['meta+a', 'ctrl+a'], () => {
                const nodes = flow.graph.getNodes()
                if (nodes) {
                    flow.graph.select(nodes)
                }
            })
        }
        // 绑定键盘事件 删除
        const onBindKeyDel = () => {
            flow.graph.bindKey('backspace', () => {
                const cells = flow.graph.getSelectedCells()
                if (cells.length) {
                    flow.graph.removeCells(cells)
                }
            })
        }

        // 绑定节点设置
        const onBindPortsSetting = () => {
            // 控制连接桩显示/隐藏 鼠标经过元素时候的展示节点
            const showPorts = (ports, show) => {
                for (let i = 0, len = ports.length; i < len; i = i + 1) {
                    ports[i].style.visibility = show ? 'visible' : 'hidden'
                }
            }
            nodeMouseenter(showPorts)
            nodeMouseleave(showPorts)
        }
        // 鼠标移入
        const nodeMouseenter = (showPorts) => {
            flow.graph.on('node:mouseenter', () => {
                const container = document.getElementById(props.graphId)
                const ports = container.querySelectorAll('.x6-port-body')
                showPorts(ports, true)
            })
        }
        // 鼠标移出
        const nodeMouseleave = (showPorts) => {
            flow.graph.on('node:mouseleave', () => {
                const container = document.getElementById(props.graphId)
                const ports = container.querySelectorAll('.x6-port-body')
                showPorts(ports, false)
            })
        }

        const onBindSelect = (graph) => {
            flow.graph.on('cell:selected', ({ cell }) => {
                onSetNodeInfo(cell)
            })

            flow.graph.on('cell:unselected', ({ cell }) => {
                onSetNodeInfo()
            })
        }

        // 设置nodeInfo的数据
        const onSetNodeInfo = (cell) => {
            if (cell) {
                if (!cell.isEdge()) {
                    flow.allNodeData[cell.id] = cell.data
                    flow.nodeInfo = cell.data
                }
            } else {
                flow.nodeInfo = null
            }
        }

        return {
            init
        }
    }
}
</script>
