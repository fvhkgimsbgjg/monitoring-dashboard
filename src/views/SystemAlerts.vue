<!-- src/views/SystemAlerts.vue -->
<template>
    <div class="system-alerts">
      <h1>系统警报</h1>
      <div class="alerts-list">
        <div v-for="alert in store.alerts" :key="alert.id" :class="['alert', alert.level]">
          <strong>{{ alert.level.toUpperCase() }}:</strong> {{ alert.message }}
          <span class="timestamp">{{ alert.timestamp }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useMonitorStore } from '@/stores/monitorStore'
  
  export default {
    name: 'SystemAlerts',
    setup() {
      const store = useMonitorStore()
  
      return {
        store
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
  