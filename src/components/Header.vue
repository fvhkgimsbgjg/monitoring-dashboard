<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <div class="header-left">
      <h1>{{ systemName }}</h1>
    </div>
    <div class="header-center">
      <div class="current-time">{{ currentTime }}</div>
    </div>
    <div class="header-right">
      <StatusIndicator :status="overallHealth" label="健康状态" />
      <StatusIndicator :status="networkStatus" label="网络状态" />
      <button class="theme-toggle" @click="toggleTheme" aria-label="切换主题">
        <i :class="themeIcon"></i>
      </button>
      <div class="user-info" @click="toggleUserMenu">
        <span class="username">{{ userName }}</span>
        <i class="fas fa-chevron-down"></i>
        <div v-if="isUserMenuOpen" class="user-menu">
          <button @click="handleLogout">登出</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useMonitorStore } from '../stores/monitorStore'
import { useRouter } from 'vue-router'
import StatusIndicator from './StatusIndicator.vue'

export default {
  name: 'Header',
  components: {
    StatusIndicator
  },
  setup() {
    const store = useMonitorStore()
    const router = useRouter()
    const systemName = ref('监控系统')
    const overallHealth = ref('green') // 示例状态，可根据实际情况动态更新
    const networkStatus = ref('green') // 示例状态，可根据实际情况动态更新
    const currentTime = ref(new Date().toLocaleString())

    const updateTime = () => {
      currentTime.value = new Date().toLocaleString()
    }

    let timer = null

    onMounted(() => {
      // 确保主题已初始化
      store.initializeTheme()
      timer = setInterval(updateTime, 1000)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })

    // 主题切换功能
    const toggleTheme = () => {
      store.toggleTheme()
    }

    const themeIcon = computed(() => {
      return store.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'
    })

    // User menu
    const isUserMenuOpen = ref(false)
    const toggleUserMenu = () => {
      isUserMenuOpen.value = !isUserMenuOpen.value
    }

    const userName = computed(() => store.user ? store.user.name : '访客')

    const handleLogout = () => {
      store.logout()
      // 使用路由导航到登录页面
      router.push({ name: 'Login' })
    }

    return {
      systemName,
      overallHealth,
      networkStatus,
      currentTime,
      toggleTheme,
      themeIcon,
      isUserMenuOpen,
      toggleUserMenu,
      userName,
      handleLogout
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #409eff;
  color: white;
}

.header-left h1 {
  margin: 0;
}

.header-center {
  font-size: 16px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
}

.theme-toggle {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
}

.theme-toggle:hover {
  color: #ffd700;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.username {
  margin-right: 5px;
}

.user-menu {
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  z-index: 1000;
}

.user-menu button {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 5px 10px;
  width: 100%;
  text-align: left;
}

.user-menu button:hover {
  background-color: #f0f0f0;
}
</style>
