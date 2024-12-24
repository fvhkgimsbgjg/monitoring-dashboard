<!-- src/components/charts/DiskUsage.vue -->
<template>
    <div class="disk-usage">
      <h3>磁盘使用情况</h3>
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
    name: 'DiskUsage',
    components: {
      ChartComponent
    },
    setup() {
      const store = useMonitorStore()
  
      const chartData = computed(() => ({
        labels: ['已用', '剩余'],
        datasets: [
          {
            label: '磁盘使用率 (%)',
            data: [
              store.diskUsage.used,
              store.diskUsage.free
            ],
            backgroundColor: ['#FF6384', '#36A2EB'],
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
  .disk-usage {
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
  