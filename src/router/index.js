import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Dashboard from '@/views/Dashboard.vue'
import SystemResources from '@/components/SystemResources.vue'
import CpuUsage from '@/components/charts/CpuUsage.vue'
import MemoryUsage from '@/components/charts/MemoryUsage.vue'
import DiskUsage from '@/components/charts/DiskUsage.vue'
import UserManagement from '@/views/UserManagement.vue'
import AddUser from '@/components/UserManagement/AddUser.vue'
import EditUser from '@/components/UserManagement/EditUser.vue'
import SystemAlerts from '@/views/SystemAlerts.vue'
import ActiveAlerts from '@/components/alerts/ActiveAlerts.vue'
import Logs from '@/views/Logs.vue'
import SystemLogs from '@/components/logs/SystemLogs.vue'
import UserExperience from '@/components/UserExperience.vue'
import MainLayout from '@/layouts/MainLayout.vue'

// Monitoring components
import NetworkTraffic from '@/components/charts/NetworkTraffic.vue'
import FrontendPerformance from '@/components/charts/FrontendPerformance.vue'
import ErrorReports from '@/components/charts/ErrorReports.vue'
import UserBehavior from '@/components/charts/UserBehavior.vue'

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
        component: SystemResources,
        children: [
          {
            path: 'cpu-usage',
            name: 'CpuUsage',
            component: CpuUsage
          },
          {
            path: 'memory-usage',
            name: 'MemoryUsage',
            component: MemoryUsage
          },
          {
            path: 'disk-usage',
            name: 'DiskUsage',
            component: DiskUsage
          },
          {
            path: 'network-traffic',
            name: 'NetworkTraffic',
            component: NetworkTraffic
          }
        ]
      },
      {
        path: 'user-management',
        name: 'UserManagement',
        component: UserManagement,
        children: [
          {
            path: 'add-user',
            name: 'AddUser',
            component: AddUser
          },
          {
            path: 'edit-user',
            name: 'EditUser',
            component: EditUser
          }
        ]
      },
      {
        path: 'system-alerts',
        name: 'SystemAlerts',
        component: SystemAlerts,
        children: [
          {
            path: 'active',
            name: 'ActiveAlerts',
            component: ActiveAlerts
          }
        ]
      },
      {
        path: 'logs',
        name: 'Logs',
        component: Logs,
        children: [
          {
            path: 'system',
            name: 'SystemLogs',
            component: SystemLogs
          }
        ]
      },
      {
        path: 'monitoring',
        name: 'Monitoring',
        children: [
          {
            path: 'frontend-performance',
            name: 'FrontendPerformance',
            component: FrontendPerformance
          },
          {
            path: 'error-reports',
            name: 'ErrorReports',
            component: ErrorReports
          },
          {
            path: 'user-behavior',
            name: 'UserBehavior',
            component: UserBehavior
          }
        ]
      },
      {
        path: 'user-experience',
        name: 'UserExperience',
        component: UserExperience
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem('authToken')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authToken) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router