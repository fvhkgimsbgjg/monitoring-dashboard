<!-- src/components/SystemResources.vue -->
<template>
  <div class="system-resources">
    <h3>系统资源</h3>
    <router-view />
    <div v-if="store.error" class="error">{{ store.error }}</div>
  </div>
</template>

<script>
import { useMonitorStore } from '@/stores/monitorStore'
import { onMounted } from 'vue'

export default {
  name: 'SystemResources',
  setup() {
    const store = useMonitorStore()

    onMounted(() => {
      store.fetchCpuUsage()
      store.fetchMemoryUsage()
      store.fetchDiskUsage()
    })

    return {
      store
    }
  }
}
</script>

<style scoped>
.system-resources {
  background-color: #fff;
  padding: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-top: 20px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
