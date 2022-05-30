import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import '@/assets/index.less'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).use(Antd).mount('#app')
