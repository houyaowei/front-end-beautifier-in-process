import './assets/main.css'

import { createApp } from 'vue'
import AppPage from './App.vue'
import routes from './routes';
import SharpUI from "sharp";

let app = createApp(AppPage);
app.use(routes);
app.use(SharpUI)

app.mount('#app')
