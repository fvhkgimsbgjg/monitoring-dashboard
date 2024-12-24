<!-- src/components/charts/NetworkTraffic.vue -->
<template>
    <div class="network-traffic">
      <h3>网络流量</h3>
      <ChartComponent :type="'line'" :data="chartData" />
    </div>
  </template>
  
  <script>
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'NetworkTraffic',
    components: {
      ChartComponent
    },
    data() {
      return {
        chartData: {
          labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
          datasets: [
            {
              label: '入站流量 (Mbps)',
              data: [120, 150, 180, 170, 160, 190],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            },
            {
              label: '出站流量 (Mbps)',
              data: [80, 90, 100, 110, 95, 105],
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1
            }
          ]
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .network-traffic {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  </style>
  