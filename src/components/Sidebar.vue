<!-- src/components/Sidebar.vue -->
<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar-header">
      <h2 v-if="!collapsed">仪表盘</h2>
      <button @click="toggleCollapse" class="collapse-button" aria-label="切换侧边栏">
        <span v-if="collapsed">→</span>
        <span v-else>←</span>
      </button>
    </div>
    <nav class="nav-links">
      <SidebarItem
        v-for="item in navItems"
        :key="item.name"
        :to="item.to"
        :icon="item.icon"
        :label="item.label"
        :collapsed="collapsed"
      />
    </nav>
    <div class="logout-button">
      <button @click="handleLogout" :class="{ collapsed }">
        <span v-if="!collapsed"><i class="fas fa-sign-out-alt"></i> 登出</span>
        <span v-else><i class="fas fa-sign-out-alt"></i></span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMonitorStore } from '../stores/monitorStore'
import SidebarItem from './SidebarItem.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  setup() {
    const collapsed = ref(false)
    const store = useMonitorStore()
    const router = useRouter()

    const toggleCollapse = () => {
      collapsed.value = !collapsed.value
    }

    const handleLogout = () => {
      store.logout()
      // 使用路由导航到登录页面，而不是全页面刷新
      router.push({ name: 'Login' })
    }

    const navItems = [
      { name: 'Dashboard', label: '仪表盘', to: '/dashboard', icon: 'fa-chart-line' },
      { name: 'SystemResources', label: '系统资源', to: '/dashboard/system-resources', icon: 'fa-server' },
      { name: 'UserExperience', label: '用户体验', to: '/dashboard/user-experience', icon: 'fa-users' },
      { name: 'UserManagement', label: '用户管理', to: '/dashboard/user-management', icon: 'fa-user-cog' },
      { name: 'SystemAlerts', label: '系统警报', to: '/dashboard/system-alerts', icon: 'fa-bell' },
      { name: 'Logs', label: '日志管理', to: '/dashboard/logs', icon: 'fa-file-alt' },
      // 根据需要添加更多导航项
    ]

    return {
      collapsed,
      toggleCollapse,
      navItems,
      handleLogout
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #dcdfe6;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #dcdfe6;
}

.collapse-button {
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
}

.nav-links {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.logout-button {
  padding: 15px;
  border-top: 1px solid #dcdfe6;
  text-align: center;
}

.logout-button button {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.logout-button button.collapsed {
  justify-content: center;
}

.logout-button button:hover {
  color: #e74c3c;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    transform: translateX(-100%);
    z-index: 1000;
  }

  .sidebar.collapsed {
    transform: translateX(0);
    width: 250px;
  }
}
</style>
