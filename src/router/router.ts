import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./../pages/home.vue'),
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../pages/basket.vue'),
    meta: {
      layout: 'MainLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
