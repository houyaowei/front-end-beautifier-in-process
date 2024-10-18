import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'

const app = createApp(App)
//使用内置的ProvidePlugin属性注入模块，避免重复import
console.log("ProviderComponent in main.js", ProviderComponent.default)
const ProviderTrimUtil = ProviderComponent.default;
console.log("ProviderTrimUtil result:", ProviderTrimUtil("  houyw "));

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount('#app')
