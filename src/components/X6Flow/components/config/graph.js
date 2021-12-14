import { Shape } from '@antv/x6'
const systemInfo = require('@/config/systemStyleSetting')

const createDefaultSetting = (container, miniMap) => {
    return {
        container: document.getElementById(container),
        panning: { // 拖拽画图平移
            enabled: true,
            eventTypes: ['leftMouseDown'], // 画布拖拽的行为，支持 leftMouseDown、 rightMouseDown、mouseWheel，默认为 ['leftMouseDown'] 。
            modifiers: 'shift' // 是否需要什么按键才能拖拽 'alt' | 'ctrl' | 'meta' | 'shift' | null
        },
        grid: { // 是否需要画布背景为网格
            size: 20, // 网格大小
            visible: true, // 绘制网格
            type: 'mesh' // 网格类型 'dot' | 'fixedDot' | 'mesh'
        },
        // minimap: {
        //     enabled: true,
        //     container: document.getElementById(miniMap),
        //     width: 200
        // },
        scroller: true,
        mousewheel: {
            enabled: true, // 是否开启滚动缩放
            zoomAtMousePosition: true, // 是否将鼠标位置作为中心缩放，默认为 true。
            modifiers: 'ctrl', // 按住按键触发 支持多个同时  ['alt', 'ctrl']
            minScale: 0.5, // 最小缩放倍数
            maxScale: 3 // 最大缩放倍数
        },
        connecting: { // 连线规则
            router: 'manhattan', // 路由将边的路径点 vertices 做进一步转换处理，并在必要时添加额外的点，然后返回处理后的点，默认值为 normal。
            connector: {
                name: 'rounded', // 连接器将起点、路由返回的点、终点加工为 <path> 元素的 d 属性 normal smooth rounded jumpover
                args: {
                    radius: 8
                }
            },
            anchor: 'center', // 当连接到节点时，通过 anchor 来指定被连接的节点的锚点，默认值为 center
            allowBlank: false, // 是否允许连接到画布空白位置的点，默认为 true
            snap: {
                radius: 20 // 当 snap 设置为 true 时连线的过程中距离节点或者连接桩 50px 时会触发自动吸附，可以通过配置 radius 属性自定义触发吸附的距离。当 snap 设置为 false 时不会触发自动吸附。默认值为 false。
            },
            createEdge () {
                return new Shape.Edge({
                    attrs: {
                        line: {
                            stroke: systemInfo['primary-color'],
                            strokeWidth: 2,
                            targetMarker: {
                                name: 'block',
                                width: 12,
                                height: 8
                            }
                        }
                    },
                    zIndex: 0
                })
            },
            validateConnection ({ targetMagnet }) { // 在移动边的时候判断连接是否有效，如果返回 false，当鼠标放开的时候，不会连接到当前元素，否则会连接到当前元素
                return !!targetMagnet
            }
        },
        highlighting: { // 可以通过 highlighting 选项来指定触发某种交互时的高亮样式，如
            magnetAdsorbed: { // 连线过程中，节点可以被链接时被使用。
                name: 'stroke',
                args: {
                    attrs: { // 连接结点时候的高亮
                        fill: systemInfo['primary-color'],
                        stroke: systemInfo['primary-color']
                    }
                }
            }
        },
        resizing: true, // 缩放节点，默认禁用。开启后可以对节点进行缩放。
        rotating: false, // 旋转节点，默认禁用。开启后可以对节点进行旋转
        selecting: { // 点选/框选，默认禁用
            enabled: true,
            rubberband: true, // 是否启用框选，默认为 false
            showNodeSelectionBox: true // 是否显示节点的选择框，默认为 false
        },
        snapline: true, // 对齐线是移动节点排版的辅助工具，默认禁用。创建画布时，通过如下配置启用
        keyboard: true, // 键盘快捷键，默认禁用。创建画布时通过以下配置启用。
        clipboard: true // 剪切板，默认禁用。创建画布时通过以下配置启用。
    }
}

export {
    createDefaultSetting
}
