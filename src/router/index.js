import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/pages/LoginPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
    meta: { title: '登录' },
  },
  {
    path: '/views',
    name: 'ViewsPage',
    component: () => import('@/pages/ViewsPage'),
    children: [
      {
        path: '/views/task-details',
        name: 'task-details',
        component: () => import('@/views/security-check/TaskDetails'),
      },
      {
        path: '/views/task-management',
        name: 'task-management',
        component: () => import('@/views/security-check/TaskManagement'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
