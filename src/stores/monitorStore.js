// src/stores/monitorStore.js
import { defineStore } from 'pinia'

export const useMonitorStore = defineStore('monitor', {
  state: () => ({
    // 系统资源
    cpuUsage: [
      { time: '00:00', usage: 20 },
      { time: '01:00', usage: 25 },
      { time: '02:00', usage: 30 },
      { time: '03:00', usage: 28 },
      { time: '04:00', usage: 35 },
      { time: '05:00', usage: 40 },
      { time: '06:00', usage: 38 },
      { time: '07:00', usage: 45 },
      { time: '08:00', usage: 50 },
      { time: '09:00', usage: 55 },
      { time: '10:00', usage: 60 },
      { time: '11:00', usage: 58 },
      { time: '12:00', usage: 65 },
      { time: '13:00', usage: 70 },
      { time: '14:00', usage: 68 },
      { time: '15:00', usage: 75 },
      { time: '16:00', usage: 80 },
      { time: '17:00', usage: 78 },
      { time: '18:00', usage: 85 },
      { time: '19:00', usage: 90 },
      { time: '20:00', usage: 88 },
      { time: '21:00', usage: 95 },
      { time: '22:00', usage: 100 },
      { time: '23:00', usage: 98 }
    ],
    memoryUsage: { used: 4096, free: 2048 }, // 单位：MB
    diskUsage: { usedDisk1: 500, usedDisk2: 300, usedDisk3: 200, free: 1500 }, // 单位：GB
    networkTraffic: {
      inbound: [50, 60, 55, 70, 65], // 示例数据
      outbound: [40, 50, 45, 60, 55],
      total: [90, 110, 100, 130, 120]
    }, // 单位：Mbps
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
      'Info: System maintenance scheduled at midnight.'
    ],
    userBehavior: {
      labels: ['浏览页面', '点击按钮', '提交表单', '滚动页面'],
      data: [65, 59, 80, 81]
    },
    logs: [
      { id: 1, level: 'info', message: '系统启动成功。', timestamp: '2024-04-27 08:00:00' },
      { id: 2, level: 'warning', message: '磁盘空间不足。', timestamp: '2024-04-27 09:30:00' },
      { id: 3, level: 'error', message: '应用程序崩溃。', timestamp: '2024-04-27 10:45:00' },
      { id: 4, level: 'info', message: '用户登录成功。', timestamp: '2024-04-27 11:00:00' },
      { id: 5, level: 'error', message: '无法连接到数据库。', timestamp: '2024-04-27 12:15:00' }
    ],
    alerts: [
      { id: 1, level: 'warning', message: '内存使用率超过80%。', timestamp: '2024-04-27 10:15:00' },
      { id: 2, level: 'error', message: '无法连接到数据库。', timestamp: '2024-04-27 10:20:00' },
      { id: 3, level: 'info', message: '系统维护将在今晚12点开始。', timestamp: '2024-04-27 09:00:00' }
    ],
    // 用户管理
    users: [
      { id: 1, username: 'admin', role: 'admin' },
      { id: 2, username: 'user1', role: 'user' },
      { id: 3, username: 'user2', role: 'user' }
    ],
    // 通用状态
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
    fetchLogs() {
      this.loading = true
      try {
        // 数据已静态初始化，无需操作
      } catch (err) {
        this.error = '无法获取日志数据。'
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
    // 主题切换动作
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
    },
    // 用户管理动作
    addUser(newUser) {
      this.users.push({ id: Date.now(), ...newUser })
    },
    editUser(updatedUser) {
      const index = this.users.findIndex(user => user.id === updatedUser.id)
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...updatedUser }
      }
    },
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id)
      // 在实际项目中，应同步删除到后端
    }
  }
})
