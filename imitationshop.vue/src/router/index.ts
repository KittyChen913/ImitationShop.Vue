import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Items from '../views/Items.vue'
import ItemDetail from '../views/ItemDetail.vue'
import Store from '../views/Store.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'items',
    component: Items
  },
  {
    path: '/itemDetail/:itemId',
    name: 'itemDetail',
    component: ItemDetail
  },
  {
    path: '/Store',
    name: 'store',
    component: Store
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
