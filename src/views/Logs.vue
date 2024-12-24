<!-- src/views/Logs.vue -->
<template>
    <div class="logs">
      <h1>系统日志</h1>
      <div class="logs-filter">
        <label for="log-level">日志级别:</label>
        <select id="log-level" v-model="selectedLevel">
          <option value="">全部</option>
          <option value="info">信息</option>
          <option value="warning">警告</option>
          <option value="error">错误</option>
        </select>
      </div>
      <ul class="logs-list">
        <li v-for="log in filteredLogs" :key="log.id" :class="log.level">
          <span class="timestamp">{{ log.timestamp }}</span>
          <strong>{{ log.level.toUpperCase() }}:</strong> {{ log.message }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useMonitorStore } from '@/stores/monitorStore'
  
  export default {
    name: 'Logs',
    setup() {
      const store = useMonitorStore()
      const selectedLevel = ref('')
  
      const filteredLogs = computed(() => {
        if (!selectedLevel.value) {
          return store.logs
        }
        return store.logs.filter(log => log.level === selectedLevel.value)
      })
  
      return {
        selectedLevel,
        filteredLogs
      }
    }
  }
  </script>
  
  <style scoped>
  .logs {
    padding: 20px;
    background-color: var(--background-color);
    color: var(--text-color);
  }
  
  .logs-filter {
    margin-bottom: 20px;
  }
  
  .logs-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .logs-list li {
    padding: 10px 10px 10px 120px;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  
  .logs-list li.info {
    background-color: #d1ecf1;
    color: #0c5460;
  }
  
  .logs-list li.warning {
    background-color: #fff3cd;
    color: #856404;
  }
  
  .logs-list li.error {
    background-color: #f8d7da;
    color: #721c24;
  }
  
  .timestamp {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 0.8em;
    color: #6c757d;
    width: 100px;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>
  