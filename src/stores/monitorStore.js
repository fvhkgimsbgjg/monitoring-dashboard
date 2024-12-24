import { defineStore } from 'pinia'

export const useMonitorStore = defineStore('monitor', {
  state: () => ({
    cpuUsage: [],
    memoryUsage: [],
    diskUsage: [],
    networkTraffic: [],
    frontendPerformance: {},
    errorReports: [],
    userBehavior: {}
  }),
  actions: {
    // 示例：更新 CPU 使用率
    updateCpuUsage(data) {
      this.cpuUsage = data
    },
    // 添加其他更新方法
  }
})
