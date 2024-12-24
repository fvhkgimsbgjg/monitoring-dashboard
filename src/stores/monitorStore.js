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
    // 定义数据获取和更新方法
  }
})
