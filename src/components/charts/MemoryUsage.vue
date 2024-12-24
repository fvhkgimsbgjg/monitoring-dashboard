<!-- src/components/charts/MemoryUsage.vue -->
<template>
    <div class="memory-usage">
      <h3>内存使用率</h3>
      <div v-if="store.loading">加载中...</div>
      <ChartComponent v-else :type="'doughnut'" :data="chartData" />
      <div v-if="store.error" class="error">{{ store.error }}</div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useMonitorStore } from '../../stores/monitorStore'
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'MemoryUsage',
    components: {
      ChartComponent
    },
    setup() {
      const store = useMonitorStore()
  
      const chartData = computed(() => ({
        labels: ['已用', '剩余'],
        datasets: [
          {
            data: [
              store.memoryUsage.used,
              store.memoryUsage.free
            ],
            backgroundColor: ['#36A2EB', '#FFCE56'],
            hoverOffset: 4
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
  .memory-usage {
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
  