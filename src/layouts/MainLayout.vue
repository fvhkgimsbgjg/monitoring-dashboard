<!-- src/layouts/MainLayout.vue -->
<template>
  <div :class="['main-layout', themeClass]">
    <Header />
    <div class="content">
      <Sidebar />
      <div class="router-view-container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'
import { computed, onMounted } from 'vue'
import { useMonitorStore } from '../stores/monitorStore'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Sidebar,
    Footer
  },
  setup() {
    const store = useMonitorStore()
    const themeClass = computed(() => (store.theme === 'dark' ? 'dark-theme' : 'light-theme'))

    onMounted(() => {
      store.initializeTheme()
    })

    return {
      themeClass
    }
  }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.router-view-container {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: var(--background-color);
  color: var(--text-color);
}

/* 主题相关变量已在全局 style.css 中定义 */
</style>
