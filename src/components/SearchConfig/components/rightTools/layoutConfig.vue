<template>
    <div class="config-module">
        <div class="config-info">
            <p class="title">一行几个（columnCount）</p>
              <a-select
                v-model:value="configInfo.layoutConfig.columnCount"
                style="width:100%"
            >
                <a-select-option :value="1">1</a-select-option>
                <a-select-option :value="2">2</a-select-option>
                <a-select-option :value="3">3</a-select-option>
                <a-select-option :value="4">4</a-select-option>
            </a-select>
        </div>
        <!-- <div class="config-info">
            <p class="title">垂直间距(verticalGutter)</p>

        </div> -->
    </div>
</template>
<script>
// verticalGutter: 4, // 垂直间距
//                 horizontalGutter: 16 // 水平间距
import { inject } from '@vue/runtime-core'
export default {
    setup () {
        const configInfo = inject('configInfo')

        return {
            configInfo
        }
    }
}
</script>
<style lang="less" scoped>
.config-info{
    text-align: left;
    margin: 0 15px;
    .title{
        margin-bottom: 5px;
    }
}
</style>
