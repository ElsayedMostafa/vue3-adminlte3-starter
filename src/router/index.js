import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Master'
import Dashboard from '@/views/pages/Test'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
