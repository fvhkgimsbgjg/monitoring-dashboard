<!-- src/components/charts/ErrorReports.vue -->
<template>
    <div class="error-reports">
      <h3>错误报告</h3>
      <div v-if="store.loading">加载中...</div>
      <ul v-else>
        <li v-for="(error, index) in store.errorReports" :key="index">{{ error }}</li>
      </ul>
      <div v-if="store.error" class="error">{{ store.error }}</div>
    </div>
  </template>
  
  <script>
  import { useMonitorStore } from '../../stores/monitorStore'
  
  export default {
    name: 'ErrorReports',
    setup() {
      const store = useMonitorStore()
  
      return {
        store
      }
    }
  }
  </script>
  
  <style scoped>
  .error-reports {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  
  .error-reports ul {
    list-style: none;
    padding: 0;
  }
  
  .error-reports li {
    padding: 5px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  