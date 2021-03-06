import { createApp } from 'vue'
import App from './App.vue'
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
    Form
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

const app = createApp(App)
app.config.productionTip = false
app.use(Button).use(Layout).use(Menu).use(Tabs).use(TabPane).use(MenuItem).use(Dropdown)
    .use(List).use(Alert).use(Input).use(Divider).use(Spin).use(Radio).use(RadioGroup).use(Grid).use(Select)
    .use(Modal).use(Table).use(Form).use(router).mount('#app')
