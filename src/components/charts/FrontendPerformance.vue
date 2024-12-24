<!-- src/components/charts/FrontendPerformance.vue -->
<template>
    <div class="frontend-performance">
      <h3>前端性能</h3>
      <div v-if="store.loading">加载中...</div>
      <ChartComponent v-else :type="'radar'" :data="chartData" />
      <div v-if="store.error" class="error">{{ store.error }}</div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useMonitorStore } from '../../stores/monitorStore'
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'FrontendPerformance',
    components: {
      ChartComponent
    },
    setup() {
      const store = useMonitorStore()
  
      const chartData = computed(() => ({
        labels: ['加载时间', '交互时间', '响应时间', '渲染时间'],
        datasets: [
          {
            label: '前端性能指标',
            data: [
              store.frontendPerformance.loadTime,
              store.frontendPerformance.interactionTime,
              store.frontendPerformance.responseTime,
              store.frontendPerformance.renderTime
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
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
  .frontend-performance {
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
  