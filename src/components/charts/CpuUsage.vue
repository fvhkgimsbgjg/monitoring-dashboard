<!-- src/components/charts/CpuUsage.vue -->
<template>
    <div class="cpu-usage">
      <h3>CPU 使用率</h3>
      <div v-if="store.loading">加载中...</div>
      <ChartComponent v-else :type="'line'" :data="chartData" />
      <div v-if="store.error" class="error">{{ store.error }}</div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useMonitorStore } from '../../stores/monitorStore'
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'CpuUsage',
    components: {
      ChartComponent
    },
    setup() {
      const store = useMonitorStore()
  
      const chartData = computed(() => ({
        labels: store.cpuUsage.map(entry => entry.time),
        datasets: [
          {
            label: 'CPU 使用率 (%)',
            data: store.cpuUsage.map(entry => entry.usage),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      }))
  
      return {
        chartData,
        store
      }
    }
  }
  </script>
  
  <style scoped>
  .cpu-usage {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  