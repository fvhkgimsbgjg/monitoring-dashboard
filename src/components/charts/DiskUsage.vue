<!-- src/components/charts/DiskUsage.vue -->
<template>
    <div class="disk-usage">
      <h3>磁盘使用情况</h3>
      <ChartComponent :type="'doughnut'" :data="chartData" />
    </div>
  </template>
  
  <script>
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'DiskUsage',
    components: {
      ChartComponent
    },
    data() {
      return {
        chartData: {
          labels: ['已用', '剩余'],
          datasets: [
            {
              label: '磁盘使用率',
              data: [70, 30],
              backgroundColor: ['#FF6384', '#36A2EB'],
              hoverOffset: 4
            }
          ]
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .disk-usage {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  </style>
  