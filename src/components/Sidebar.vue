<!-- src/components/Sidebar.vue -->
<template>
  <aside class="sidebar">
    <SidebarItem
      to="/dashboard"
      label="仪表盘"
      icon="fas fa-tachometer-alt"
      :exact="true"
    />
    <SidebarItem
      to="/dashboard/system-resources"
      label="系统资源"
      icon="fas fa-server"
      :children="systemResourcesChildren"
    />
    <SidebarItem
      to="/dashboard/user-management"
      label="用户管理"
      icon="fas fa-users"
      :children="userManagementChildren"
    />
    <SidebarItem
      to="/dashboard/system-alerts"
      label="系统警报"
      icon="fas fa-exclamation-triangle"
    />
    <SidebarItem
      to="/dashboard/logs"
      label="日志"
      icon="fas fa-file-alt"
    />
    <SidebarItem
      to="/dashboard/user-experience"
      label="用户体验"
      icon="fas fa-smile"
    />
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  data() {
    return {
      systemResourcesChildren: [
        { to: '/dashboard/system-resources/cpu-usage', label: 'CPU 使用率', icon: 'fas fa-microchip' },
        { to: '/dashboard/system-resources/memory-usage', label: '内存使用率', icon: 'fas fa-memory' },
        { to: '/dashboard/system-resources/disk-usage', label: '磁盘使用情况', icon: 'fas fa-hdd' }
      ],
      userManagementChildren: [
        { to: '/dashboard/user-management/add-user', label: '新增用户', icon: 'fas fa-user-plus' },
        { to: '/dashboard/user-management/edit-user', label: '编辑用户', icon: 'fas fa-user-edit' }
      ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 100vh;
  padding-top: 20px;
}
</style>
