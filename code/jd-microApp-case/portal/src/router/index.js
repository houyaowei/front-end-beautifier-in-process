import login from "@/views/main/login.vue";
import childDemo from "@/views/child/childDemo.vue";
import childHome from "@/views/child/childHome.vue";
import childVue2 from "@/views/child/childVue2.vue";
import childVue3 from "@/views/child/childVue3.vue";
import childAbout from "@/views/child/childAbout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/main/login",
    name: "login",
    component: login,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childDemo",
    name: "childDemo",
    component: childDemo,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childHome",
    name: "childHome",
    component: childHome,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childVue2",
    name: "childVue2",
    component: childVue2,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childVue3",
    name: "childVue3",
    component: childVue3,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childAbout",
    name: "childAbout",
    component: childAbout,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(), // mode:'history'
  routes,
});

export default router;
