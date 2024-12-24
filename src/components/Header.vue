<template>
    <header class="header">
      <div class="header-left">
        <h1>{{ systemName }}</h1>
      </div>
      <div class="header-center">
        <div class="current-time">{{ currentTime }}</div>
      </div>
      <div class="header-right">
        <StatusIndicator :status="overallHealth" label="健康状态" />
        <StatusIndicator :status="networkStatus" label="网络状态" />
      </div>
    </header>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue'
  import StatusIndicator from './StatusIndicator.vue'
  
  export default {
    name: 'Header',
    components: {
      StatusIndicator
    },
    setup() {
      const systemName = ref('监控系统')
      const overallHealth = ref('green') // 示例状态，可根据实际情况动态更新
      const networkStatus = ref('green') // 示例状态，可根据实际情况动态更新
      const currentTime = ref(new Date().toLocaleString())
  
      const updateTime = () => {
        currentTime.value = new Date().toLocaleString()
      }
  
      let timer = null
  
      onMounted(() => {
        timer = setInterval(updateTime, 1000)
      })
  
      onUnmounted(() => {
        clearInterval(timer)
      })
  
      return {
        systemName,
        overallHealth,
        networkStatus,
        currentTime
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #409eff;
    color: white;
  }
  
  .header-left h1 {
    margin: 0;
  }
  
  .header-center {
    font-size: 16px;
  }
  
  .header-right {
    display: flex;
    gap: 15px;
  }
  </style>
  