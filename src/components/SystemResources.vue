<!-- src/components/SystemResources.vue -->
<template>
  <div class="system-resources">
    <h3>系统资源</h3>
    <ChartComponent :type="'line'" :data="chartData" />
    <div v-if="store.error" class="error">{{ store.error }}</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useMonitorStore } from '@/stores/monitorStore' // 使用路径别名
import ChartComponent from '@/components/charts/ChartComponent.vue' // 修正导入路径

export default {
  name: 'SystemResources',
  components: {
    ChartComponent
  },
  setup() {
    const store = useMonitorStore()

    const chartData = computed(() => ({
      labels: store.cpuUsage.map(entry => entry.time),
      datasets: [
        {
          label: 'CPU 使用率 (%)',
          data: store.cpuUsage.map(entry => entry.usage),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
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
.system-resources {
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
