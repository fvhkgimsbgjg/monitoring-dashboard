<!-- src/components/charts/DiskUsage.vue -->
<template>
  <div class="disk-usage">
    <h4>磁盘使用情况</h4>
    <div class="chart-wrapper">
      <ChartComponent :type="'pie'" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useMonitorStore } from '@/stores/monitorStore'
import ChartComponent from './ChartComponent.vue'

export default {
  name: 'DiskUsage',
  components: {
    ChartComponent
  },
  setup() {
    const store = useMonitorStore()

    const chartData = computed(() => ({
      labels: ['磁盘1 已用', '磁盘2 已用', '磁盘3 已用'],
      datasets: [
        {
          label: '磁盘使用 (GB)',
          data: [store.diskUsage.usedDisk1, store.diskUsage.usedDisk2, store.diskUsage.usedDisk3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)'
          ],
          borderWidth: 1
        }
      ]
    }))

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true, // 保持图表的纵横比
      aspectRatio: 1, // 设置为1，保持正方形比例
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: false
        }
      },
      layout: {
        padding: {
          top: 20,
          bottom: 20,
          left: 20,
          right: 20
        }
      }
    }

    onMounted(() => {
      store.fetchDiskUsage()
    })

    return {
      chartData,
      chartOptions,
      store
    }
  }
}
</script>

<style scoped>
.disk-usage {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-top: 20px;
}

.disk-usage h4 {
  text-align: center;
  margin-bottom: 15px;
}

.chart-wrapper {
  width: 100%;
  max-width: 400px; /* 设置最大宽度 */
  height: 400px; /* 设置固定高度，保持正方形比例 */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
