import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus'
import {createPinia} from 'pinia'
import GIcon from './utils/icon'

import './styles/global.sass'
import 'element-plus/dist/index.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(GIcon)

app.mount('#app')
