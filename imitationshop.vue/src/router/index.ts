import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Items from '../views/Items.vue'
import ItemDetail from '../views/ItemDetail.vue'
import Store from '../views/Store.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Base from '../views/Base.vue'
import AddItem from '../views/AddItem.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'base',
    component: Base,
    meta: { requiredAuth: false },
    children: [
      {
        path: '/',
        name: 'items',
        component: Items,
        meta: { requiredAuth: false }
      },
      {
        path: '/itemDetail/:itemId',
        name: 'itemDetail',
        component: ItemDetail,
        meta: { requiredAuth: false }
      },
      {
        path: '/store',
        name: 'store',
        component: Store,
        meta: { requiredAuth: true }
      },
      {
        path: '/addItem',
        name: 'addItem',
        component: AddItem,
        meta: { requiredAuth: true }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiredAuth: false }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiredAuth: false }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiredAuth) {
    const loginToken = localStorage.Token
    if (loginToken === undefined) {
      alert('you are not logged in or your session has expired. redirecting to the login page.')
      return next({ path: "/login" });
    } else {
      return next();
    }
  }
  return next();
});

export default router
