import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus'
import {createPinia} from 'pinia'

import 'element-plus/dist/index.css'
import 'nprogress/nprogress.css'
import '@/styles/global.sass';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(pinia)

app.mount('#app')
