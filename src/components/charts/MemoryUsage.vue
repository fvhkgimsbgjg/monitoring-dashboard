<template>
    <div class="memory-usage">
      <h3>内存使用率</h3>
      <ChartComponent :type="'doughnut'" :data="chartData" />
    </div>
  </template>
  
  <script>
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'MemoryUsage',
    components: {
      ChartComponent
    },
    data() {
      return {
        chartData: {
          labels: ['已用', '剩余'],
          datasets: [
            {
              data: [3000, 7000],
              backgroundColor: ['#36A2EB', '#FFCE56'],
              hoverOffset: 4
            }
          ]
        }
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
  </style>
  