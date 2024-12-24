<!-- src/layouts/MainLayout.vue -->
<template>
  <div :class="['main-layout', theme]">
    <Header />
    <div class="content">
      <Sidebar />
      <main>
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import { useMonitorStore } from '@/stores/monitorStore'
import { computed, onMounted } from 'vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Sidebar,
    Footer
  },
  setup() {
    const store = useMonitorStore()
    const theme = computed(() => store.theme)

    onMounted(() => {
      store.initializeTheme()
    })

    return {
      theme
    }
  }
}
</script>

<style scoped>
.main-layout.light {
  --background-color: #f5f5f5;
  --text-color: #333333;
}

.main-layout.dark {
  --background-color: #1e1e1e;
  --text-color: #ffffff;
}

.content {
  display: flex;
}

main {
  flex: 1;
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
