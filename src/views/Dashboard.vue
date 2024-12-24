<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <h1>仪表盘</h1>
    <div class="charts-grid">
      <div class="chart-container">
        <div class="chart-item">
          <CpuUsage />
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-item">
          <MemoryUsage />
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-item">
          <DiskUsage />
        </div>
      </div>
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
  width: 100%;
  height: 100%;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}

.chart-container {
  position: relative;
  width: 100%;
  height: 300px;
}

.chart-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
  
  .chart-container {
    height: 250px;
  }
}
</style>