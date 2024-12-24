<!-- src/components/charts/StorageNetwork.vue -->
<template>
    <div class="storage-network">
      <h3>存储与网络</h3>
      <ChartComponent :type="'bar'" :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'StorageNetwork',
    components: {
      ChartComponent
    },
    data() {
      return {
        chartData: {
          labels: ['磁盘 1', '磁盘 2', '磁盘 3'],
          datasets: [
            {
              label: '存储使用率',
              data: [70, 50, 30],
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1
            },
            {
              label: '网络流量',
              data: [120, 90, 60],
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1
            }
          ]
        },
        chartOptions: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .storage-network {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  </style>
  