<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <SystemResources />
    <UserExperience />
    <!-- 其他内容 -->
  </div>
</template>

<script>
import { onMounted } from 'vue'
import SystemResources from '@/components/SystemResources.vue' // 修正导入路径
import UserExperience from '@/components/UserExperience.vue'
import { useMonitorStore } from '@/stores/monitorStore'

export default {
  name: 'Dashboard',
  components: {
    SystemResources,
    UserExperience
  },
  setup() {
    const store = useMonitorStore()

    onMounted(() => {
      store.initializeTheme()
      // 其他初始化操作
    })

    return {}
  }
}
</script>

<style scoped>
.dashboard {
  /* 添加您的样式 */
}
</style>
