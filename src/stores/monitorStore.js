// src/stores/monitorStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://your-api-base-url.com', // 替换为您的实际 API 基础 URL
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

export const useMonitorStore = defineStore('monitor', {
  state: () => ({
    cpuUsage: [],
    memoryUsage: { used: 0, free: 0 },
    diskUsage: { used: 0, free: 0 },
    networkTraffic: [],
    frontendPerformance: {
      loadTime: 0,
      interactionTime: 0,
      responseTime: 0,
      renderTime: 0
    },
    errorReports: [],
    userBehavior: {
      labels: [],
      data: []
    },
    loading: false,
    error: null,
    user: null,
    timers: {}
  }),
  actions: {
    // 数据获取动作
    async fetchCpuUsage() {
      this.loading = true
      try {
        const response = await api.get('/cpu-usage') // 替换为实际端点
        this.cpuUsage = response.data
      } catch (err) {
        this.error = err.response?.data?.message || err.message
      } finally {
        this.loading = false
      }
    },
    async fetchMemoryUsage() {
      this.loading = true
      try {
        const response = await api.get('/memory-usage') // 替换为实际端点
        this.memoryUsage = response.data
      } catch (err) {
        this.error = err.response?.data?.message || err.message
      } finally {
        this.loading = false
      }
    },
    async fetchDiskUsage() {
      this.loading = true
      try {
        const response = await api.get('/disk-usage') // 替换为实际端点
        this.diskUsage = response.data
      } catch (err) {
        this.error = err.response?.data?.message || err.message
      } finally {
        this.loading = false
      }
    },
    async fetchNetworkTraffic() {
      this.loading = true
      try {
        const response = await api.get('/network-traffic') // 替换为实际端点
        this.networkTraffic = response.data
      } catch (err) {
        this.error = err.response?.data?.message || err.message
      } finally {
        this.loading = false
      }
    },
    async fetchFrontendPerformance() {
      this.loading = true
      try {
        const response = await api.get('/frontend-performance') // 替换为实际端点
        this.frontendPerformance = response.data
      } catch (err) {
        this.error = err.response?.data?.message || err.message
      } finally {
        this.loading = false
      }
    },
    async fetchErrorReports() {
      this.loading = true
      try {
        const response = await api.get('/error-reports') // 替换为实际端点
        this.errorReports = response.data
      } catch (err) {
        this.error = err.response?.data?.message || err.message
      } finally {
        this.loading = false
      }
    },
    async fetchUserBehavior() {
      this.loading = true
      try {
        const response = await api.get('/user-behavior') // 替换为实际端点
        this.userBehavior = response.data
      } catch (err) {
        this.error = err.response?.data?.message || err.message
      } finally {
        this.loading = false
      }
    },
    // 登录动作
    async login(username, password) {
      this.loading = true
      this.error = null
      try {
        const response = await api.post('/login', { username, password }) // 替换为实际登录端点
        this.user = response.data.user
        localStorage.setItem('authToken', response.data.token) // 存储令牌
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}` // 设置默认头部
      } catch (err) {
        this.error = err.response?.data?.message || err.message
        throw err
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.user = null
      localStorage.removeItem('authToken')
      delete api.defaults.headers.common['Authorization']
    },
    // 启动定时器以定期获取数据
    startFetchingData() {
      this.timers.cpuUsage = setInterval(() => this.fetchCpuUsage(), 10000) // 每10秒获取一次
      this.timers.memoryUsage = setInterval(() => this.fetchMemoryUsage(), 10000)
      this.timers.diskUsage = setInterval(() => this.fetchDiskUsage(), 10000)
      this.timers.networkTraffic = setInterval(() => this.fetchNetworkTraffic(), 10000)
      this.timers.frontendPerformance = setInterval(() => this.fetchFrontendPerformance(), 10000)
      this.timers.errorReports = setInterval(() => this.fetchErrorReports(), 10000)
      this.timers.userBehavior = setInterval(() => this.fetchUserBehavior(), 10000)
    },
    // 停止定时器
    stopFetchingData() {
      Object.values(this.timers).forEach(timer => clearInterval(timer))
      this.timers = {}
    }
  }
})
