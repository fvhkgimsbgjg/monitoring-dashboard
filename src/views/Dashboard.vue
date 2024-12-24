<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <h1>仪表盘</h1>
    <div class="charts-grid">
      <div class="chart-item">
        <CpuUsage />
      </div>
      <div class="chart-item">
        <MemoryUsage />
      </div>
      <div class="chart-item">
        <DiskUsage />
      </div>
      <!-- 如果有新增的监控项，可以继续添加 -->
    </div>
  </div>
</template>

<script>
import CpuUsage from '@/components/charts/CpuUsage.vue'
import MemoryUsage from '@/components/charts/MemoryUsage.vue'
import DiskUsage from '@/components/charts/DiskUsage.vue'

export default {
  name: 'Dashboard',
  components: {
    CpuUsage,
    MemoryUsage,
    DiskUsage
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 自适应列数 */
  gap: 20px;
  margin-top: 20px;
}

.chart-item {
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  max-width: 400px; /* 限制最大宽度，防止超出侧边栏 */
  height: 400px; /* 设置固定高度，保持良好比例 */
  margin: 0 auto; /* 水平居中 */
  display: flex;
  flex-direction: column;
}

.chart-item h4 {
  text-align: center;
  margin-bottom: 15px;
}

.chart-item > div {
  flex: 1; /* 让图表区域填满剩余空间 */
}
</style>
