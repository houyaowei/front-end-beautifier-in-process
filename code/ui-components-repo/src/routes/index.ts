import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from 'vue-router';

const modules = import.meta.glob('./../views/**/router/*.ts', {eager: true});

//router auto  import
let customerRouter: Array<RouteRecordRaw> = [];
let _router :any = null;
let _routerHistory :any = null;

for (const k in modules) {
  if (Object.hasOwnProperty.call(modules, k)) {
    const _module: any = modules[k]
    customerRouter = customerRouter.concat(_module.default);
  }
}

let basicRoute: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: ()=> import("../views/Piechart-test.vue") 
  }
]

const routes = basicRoute.concat(customerRouter)

_routerHistory = createWebHistory("/");

_router = createRouter({
  history: _routerHistory,
  routes,
});

export default _router;