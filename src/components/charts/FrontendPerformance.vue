<!-- src/components/charts/FrontendPerformance.vue -->
<template>
    <div class="frontend-performance">
      <h3>前端性能</h3>
      <ChartComponent :type="'radar'" :data="chartData" />
    </div>
  </template>
  
  <script>
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'FrontendPerformance',
    components: {
      ChartComponent
    },
    data() {
      return {
        chartData: {
          labels: ['加载时间', '交互时间', '响应时间', '渲染时间'],
          datasets: [
            {
              label: '前端性能指标',
              data: [65, 59, 90, 81],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
        }
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
  </style>
  