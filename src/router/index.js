// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import Dashboard from '../views/Dashboard.vue'
import { useMonitorStore } from '../stores/monitorStore'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  const store = useMonitorStore()
  
  // 如果用户已经登录但访问登录页，则重定向到仪表盘
  if (to.name === 'Login' && store.user) {
    next({ name: 'Dashboard' })
    return
  }

  // 如果路由需要认证且用户未登录，则重定向到登录页
  if (to.meta.requiresAuth && !store.user) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
