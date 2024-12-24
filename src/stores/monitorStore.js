// src/stores/monitorStore.js
import { defineStore } from 'pinia'

export const useMonitorStore = defineStore('monitor', {
  state: () => ({
    cpuUsage: [
      { time: '00:00', usage: 20 },
      { time: '01:00', usage: 25 },
      { time: '02:00', usage: 30 },
      // 添加更多静态数据以模拟
    ],
    memoryUsage: { used: 4096, free: 2048 }, // 单位：MB
    diskUsage: { used: 500, free: 1500 }, // 单位：GB
    networkTraffic: [
      { time: '00:00', inbound: 100, outbound: 80 },
      { time: '01:00', inbound: 120, outbound: 90 },
      { time: '02:00', inbound: 110, outbound: 85 },
      // 添加更多静态数据以模拟
    ],
    frontendPerformance: {
      loadTime: 2.5, // 单位：秒
      interactionTime: 1.2, // 单位：秒
      responseTime: 0.8, // 单位：秒
      renderTime: 1.5 // 单位：秒
    },
    errorReports: [
      'Error: Unable to fetch data from server.',
      'Warning: High memory usage detected.',
      'Error: Disk space running low.',
      // 添加更多静态错误报告
    ],
    userBehavior: {
      labels: ['浏览页面', '点击按钮', '提交表单', '滚动页面'],
      data: [65, 59, 80, 81]
    },
    loading: false,
    error: null,
    user: JSON.parse(localStorage.getItem('user')) || null, // 从本地存储获取用户信息
    theme: localStorage.getItem('theme') || 'light' // 新增主题状态，默认亮色主题
  }),
  actions: {
    // 数据获取动作（使用静态数据，无需异步操作）
    fetchCpuUsage() {
      this.loading = true
      try {
        // 数据已静态初始化，无需操作
      } catch (err) {
        this.error = '无法获取 CPU 使用率数据。'
      } finally {
        this.loading = false
      }
    },
    fetchMemoryUsage() {
      this.loading = true
      try {
        // 数据已静态初始化，无需操作
      } catch (err) {
        this.error = '无法获取内存使用率数据。'
      } finally {
        this.loading = false
      }
    },
    fetchDiskUsage() {
      this.loading = true
      try {
        // 数据已静态初始化，无需操作
      } catch (err) {
        this.error = '无法获取磁盘使用情况数据。'
      } finally {
        this.loading = false
      }
    },
    fetchNetworkTraffic() {
      this.loading = true
      try {
        // 数据已静态初始化，无需操作
      } catch (err) {
        this.error = '无法获取网络流量数据。'
      } finally {
        this.loading = false
      }
    },
    fetchFrontendPerformance() {
      this.loading = true
      try {
        // 数据已静态初始化，无需操作
      } catch (err) {
        this.error = '无法获取前端性能数据。'
      } finally {
        this.loading = false
      }
    },
    fetchErrorReports() {
      this.loading = true
      try {
        // 数据已静态初始化，无需操作
      } catch (err) {
        this.error = '无法获取错误报告。'
      } finally {
        this.loading = false
      }
    },
    fetchUserBehavior() {
      this.loading = true
      try {
        // 数据已静态初始化，无需操作
      } catch (err) {
        this.error = '无法获取用户行为数据。'
      } finally {
        this.loading = false
      }
    },
    // 登录动作（模拟登录）
    async login(username, password) {
      this.loading = true
      this.error = null
      try {
        // 模拟 API 请求延迟
        await new Promise((resolve) => setTimeout(resolve, 1000))
        // 使用静态凭证进行验证
        if (username === 'admin' && password === 'password') {
          this.user = { name: 'Admin User', role: 'admin' }
          // 存储用户信息到本地存储（实际项目中应存储令牌）
          localStorage.setItem('authToken', 'mock-token')
          localStorage.setItem('user', JSON.stringify(this.user))
        } else {
          throw new Error('用户名或密码错误')
        }
      } catch (err) {
        this.error = err.message
        throw err
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.user = null
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
    },
    // 新增主题切换动作
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme) // 持久化主题选择
    },
    // 初始化主题，根据本地存储或系统偏好设置
    initializeTheme() {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        this.theme = savedTheme
      } else {
        // 根据系统偏好设置自动选择主题
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        this.theme = prefersDark ? 'dark' : 'light'
        localStorage.setItem('theme', this.theme)
      }
    }
  }
})
