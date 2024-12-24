// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Dashboard from '@/views/Dashboard.vue'
import SystemResources from '@/components/SystemResources.vue' // 已修正导入路径
import UserExperience from '@/components/UserExperience.vue' // 修正后的导入路径
import UserManagement from '@/views/UserManagement.vue'
import SystemAlerts from '@/views/SystemAlerts.vue'
import Logs from '@/views/Logs.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useMonitorStore } from '@/stores/monitorStore'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'system-resources',
        name: 'SystemResources',
        component: SystemResources
      },
      {
        path: 'user-experience',
        name: 'UserExperience',
        component: UserExperience
      },
      {
        path: 'user-management',
        name: 'UserManagement',
        component: UserManagement
      },
      {
        path: 'system-alerts',
        name: 'SystemAlerts',
        component: SystemAlerts
      },
      {
        path: 'logs',
        name: 'Logs',
        component: Logs
      },
      // 根据需要添加更多子路由
    ]
  },
  // 可以添加404页面等其他路由
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  const store = useMonitorStore()

  // 如果用户已登录但访问登录页，则重定向到仪表盘
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
