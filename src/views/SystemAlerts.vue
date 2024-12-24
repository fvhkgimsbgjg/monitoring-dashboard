<!-- src/views/SystemAlerts.vue -->
<template>
    <div class="system-alerts">
      <h1>系统警报</h1>
      <div class="alerts-list">
        <div v-for="alert in alerts" :key="alert.id" :class="['alert', alert.level]">
          <strong>{{ alert.level.toUpperCase() }}:</strong> {{ alert.message }}
          <span class="timestamp">{{ alert.timestamp }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'SystemAlerts',
    setup() {
      const alerts = ref([
        { id: 1, level: 'warning', message: '内存使用率超过80%。', timestamp: '2024-04-27 10:15:00' },
        { id: 2, level: 'error', message: '无法连接到数据库。', timestamp: '2024-04-27 10:20:00' },
        { id: 3, level: 'info', message: '系统维护将在今晚12点开始。', timestamp: '2024-04-27 09:00:00' },
        // 添加更多静态警报数据
      ])
  
      return {
        alerts
      }
    }
  }
  </script>
  
  <style scoped>
  .system-alerts {
    padding: 20px;
    background-color: var(--background-color);
    color: var(--text-color);
  }
  
  .alerts-list {
    margin-top: 20px;
  }
  
  .alert {
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    position: relative;
  }
  
  .alert.warning {
    background-color: #fff3cd;
    color: #856404;
  }
  
  .alert.error {
    background-color: #f8d7da;
    color: #721c24;
  }
  
  .alert.info {
    background-color: #d1ecf1;
    color: #0c5460;
  }
  
  .timestamp {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 0.8em;
    color: #6c757d;
  }
  </style>
  