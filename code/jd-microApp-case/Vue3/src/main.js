import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn.mjs";
import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

window.microApp.addGlobalDataListener((data) => {
  console.log("react app recieve msg from vue2:", data);

  return data;
}, true);

app.mount("#app");

// window.unmount = () => {
//   app.unmount();
// };
