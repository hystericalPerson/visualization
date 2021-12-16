import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {
    Button,
    Layout,
    Menu,
    MenuItem,
    Tabs,
    TabPane,
    Dropdown,
    List,
    Alert,
    Input,
    Divider,
    Spin,
    Radio,
    RadioGroup,
    Grid,
    Select,
    Modal,
    Table,
    Form,
    Card,
    Row,
    Col,
    InputNumber
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import './assets/css/common.less'
import store from './store'
import setDefaultSetting from './config/index.js'

require('./mock')

const app = createApp(App)
app.config.productionTip = false
app.use(Button).use(Layout).use(Menu).use(Tabs).use(TabPane).use(MenuItem).use(Dropdown).use(Card).use(Row).use(Col)
    .use(List).use(Alert).use(Input).use(Divider).use(Spin).use(Radio).use(RadioGroup).use(Grid).use(Select)
    .use(InputNumber)
    .use(Modal).use(Table).use(Form).use(router).use(store).mount('#app')

setDefaultSetting()
