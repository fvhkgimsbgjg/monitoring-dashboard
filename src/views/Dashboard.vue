<!-- src/views/Dashboard.vue -->
<template>
    <MainLayout>
      <div class="dashboard">
        <SystemResources />
        <UserExperience />
      </div>
    </MainLayout>
  </template>
  
  <script>
  import { onMounted, onUnmounted } from 'vue'
  import MainLayout from '../layouts/MainLayout.vue'
  import SystemResources from '../components/SystemResources.vue'
  import UserExperience from '../components/UserExperience.vue'
  import { useMonitorStore } from '../stores/monitorStore'
  
  export default {
    name: 'Dashboard',
    components: {
      MainLayout,
      SystemResources,
      UserExperience
    },
    setup() {
      const store = useMonitorStore()
  
      onMounted(() => {
        store.startFetchingData()
        // 初始数据获取
        store.fetchCpuUsage()
        store.fetchMemoryUsage()
        store.fetchDiskUsage()
        store.fetchNetworkTraffic()
        store.fetchFrontendPerformance()
        store.fetchErrorReports()
        store.fetchUserBehavior()
      })
  
      onUnmounted(() => {
        store.stopFetchingData()
      })
    }
  }
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  </style>
  