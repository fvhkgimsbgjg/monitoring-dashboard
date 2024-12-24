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
      :children="systemAlertsChildren"
    />
    <SidebarItem
      to="/dashboard/logs"
      label="日志"
      icon="fas fa-file-alt"
      :children="logsChildren"
    />
    <SidebarItem
      to="/dashboard/user-experience"
      label="用户体验"
      icon="fas fa-smile"
      :children="userExperienceChildren"
    />
    <SidebarItem
      to="/dashboard/security"
      label="安全中心"
      icon="fas fa-shield-alt"
      :children="securityChildren"
    />
    <SidebarItem
      to="/dashboard/analytics"
      label="数据分析"
      icon="fas fa-chart-line"
      :children="analyticsChildren"
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
        { to: '/dashboard/system-resources/disk-usage', label: '磁盘使用情况', icon: 'fas fa-hdd' },
        { to: '/dashboard/system-resources/network', label: '网络监控', icon: 'fas fa-network-wired' }
      ],
      userManagementChildren: [
        { to: '/dashboard/user-management/add-user', label: '新增用户', icon: 'fas fa-user-plus' },
        { to: '/dashboard/user-management/edit-user', label: '编辑用户', icon: 'fas fa-user-edit' },
        { to: '/dashboard/user-management/roles', label: '角色权限', icon: 'fas fa-user-shield' },
        { to: '/dashboard/user-management/groups', label: '用户组', icon: 'fas fa-users-cog' }
      ],
      systemAlertsChildren: [
        { to: '/dashboard/system-alerts/active', label: '活动警报', icon: 'fas fa-bell' },
        { to: '/dashboard/system-alerts/history', label: '历史警报', icon: 'fas fa-history' },
        { to: '/dashboard/system-alerts/settings', label: '警报设置', icon: 'fas fa-cog' }
      ],
      logsChildren: [
        { to: '/dashboard/logs/system', label: '系统日志', icon: 'fas fa-cogs' },
        { to: '/dashboard/logs/security', label: '安全日志', icon: 'fas fa-shield-alt' },
        { to: '/dashboard/logs/audit', label: '审计日志', icon: 'fas fa-clipboard-list' }
      ],
      userExperienceChildren: [
        { to: '/dashboard/user-experience/feedback', label: '用户反馈', icon: 'fas fa-comment' },
        { to: '/dashboard/user-experience/surveys', label: '满意度调查', icon: 'fas fa-poll' },
        { to: '/dashboard/user-experience/metrics', label: '用户指标', icon: 'fas fa-chart-bar' }
      ],
      securityChildren: [
        { to: '/dashboard/security/threats', label: '威胁检测', icon: 'fas fa-radar' },
        { to: '/dashboard/security/access-control', label: '访问控制', icon: 'fas fa-lock' },
        { to: '/dashboard/security/compliance', label: '合规审计', icon: 'fas fa-clipboard-check' }
      ],
      analyticsChildren: [
        { to: '/dashboard/analytics/traffic', label: '流量分析', icon: 'fas fa-chart-area' },
        { to: '/dashboard/analytics/performance', label: '性能分析', icon: 'fas fa-tachometer-fast' },
        { to: '/dashboard/analytics/reports', label: '报告生成', icon: 'fas fa-file-chart-line' }
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
  overflow-y: auto;
}
</style>