<!-- src/components/charts/NetworkTraffic.vue -->
<template>
    <div class="network-traffic">
      <h3>网络流量</h3>
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
    name: 'NetworkTraffic',
    components: {
      ChartComponent
    },
    setup() {
      const store = useMonitorStore()
  
      const chartData = computed(() => ({
        labels: store.networkTraffic.map(entry => entry.time),
        datasets: [
          {
            label: '入站流量 (Mbps)',
            data: store.networkTraffic.map(entry => entry.inbound),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: '出站流量 (Mbps)',
            data: store.networkTraffic.map(entry => entry.outbound),
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
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
  .network-traffic {
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
  