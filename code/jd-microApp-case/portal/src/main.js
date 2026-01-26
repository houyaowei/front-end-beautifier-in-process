import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import microApp from "@micro-zoe/micro-app";
import "./assets/main.css";
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");

microApp.preFetch([
  { name: "childHome", url: "https://micro-zoe.github.io/micro-app/" }, // 加载资源并解析
  { name: "childVue2", url: "http://localhost:8080/", level: 3 }, // 只加载资源
  {
    name: "childVue3",
    url: "http://localhost:3002/child/findEnterprise",
    iframe: true,
  }, // 加载资源、解析并渲染
  // { name: "childVue3", url: "http://localhost:3002/child/findEnterprise", level: 3, "default-page": "/page2" }, // 加载资源、解析并渲染子应用的page2页面
]);

//接收子应用的数据，就算在子应用组件中定义了@datachange，也会优先执行这个
microApp.addDataListener("childVue2", (data) => {
  console.log("portal mian.js中接收来自子应用childVue2的数据", data);
  return "返回值1";
});
//给子应用传数据
// microApp.setData("childVue2", { from: "portal" });
//设置全局值
microApp.setGlobalData({ name: "global data" });

microApp.start();
