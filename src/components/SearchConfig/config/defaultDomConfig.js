
const config = {
    common: {
        isExtend: false,
        isCustomWidth: false,
        customWidth: 6,
        isSlot: false
    },
    input: {
        inputType: 'text',
        isSection: false,
        precision: 0,
        min: 0,
        max: 0
    },
    select: {
        mode: 'default',
        optionList: [{
            value: 'value',
            label: '展示文案'
        }]
    },
    date: {
        startName: '开始',
        startKey: 'start',
        endName: '结束',
        endKey: 'endKey'
    }
}
export default config
