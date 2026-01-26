import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/sass/main.less";
import "@/public-path";

Vue.config.productionTip = false;
Vue.use(ElementUI);
let app = {};
window.mount = () => {
  app = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
};

window.unmount = () => {
  app.$destroy();
  app.$el.innerHTML = "";
  app = null;
};

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount();
}
//监听主应用传的数据
window.microApp.addDataListener((data) => {
  console.log("来自主应用的数据", data);
  return "返回值1";
});
