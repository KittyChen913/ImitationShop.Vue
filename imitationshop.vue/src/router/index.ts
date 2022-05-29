import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Items from '../views/Items.vue'
import ItemDetail from '../views/ItemDetail.vue'
import Store from '../views/Store.vue'
import Login from '../views/Login.vue'
import Base from '../views/Base.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'base',
    component: Base,
    children: [
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
        path: '/store',
        name: 'store',
        component: Store
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
