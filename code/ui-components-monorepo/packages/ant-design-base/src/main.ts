
import { createApp } from 'vue'
import AppPage from './App.vue'
import routes from './routes';
//@ts-ignore
// import SharpUI from "@sharp/sc-ant-design"
let app = createApp(AppPage);
app.use(routes);
// app.use(SharpUI);
app.mount('#app')
