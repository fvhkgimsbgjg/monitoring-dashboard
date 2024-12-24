<template>
    <div class="cpu-usage">
      <h3>CPU 使用率</h3>
      <ChartComponent :type="'line'" :data="chartData" />
    </div>
  </template>
  
  <script>
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'CpuUsage',
    components: {
      ChartComponent
    },
    data() {
      return {
        chartData: {
          labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
          datasets: [
            {
              label: 'CPU 使用率',
              data: [65, 59, 80, 81, 56, 55],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]
        }
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
  </style>
  