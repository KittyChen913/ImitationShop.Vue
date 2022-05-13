import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Items from '../views/Items.vue'
import ItemDetail from '../views/ItemDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'item',
    component: Items
  },
  {
    path: '/itemDetail/:itemId',
    name: 'itemDetail',
    component: ItemDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
