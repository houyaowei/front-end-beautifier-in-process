import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import findEnterprise from '@/views/findEnterprise.vue'
import enterpriseDetail from '@/views/enterpriseDetail.vue'

const routes = [
  {
    path: '/',
    name: 'findEnterprise',
    component: findEnterprise,
    meta: {
      title: '',
      keepAlive:false
    }
  },
  {
    path: '/enterpriseDetail',
    name: 'enterpriseDetail',
    component: enterpriseDetail,
    meta: {
      title: '',
      keepAlive:false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(), // mode:'hash'
  routes
})

export default router