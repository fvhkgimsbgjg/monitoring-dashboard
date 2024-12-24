<!-- src/components/charts/ErrorReports.vue -->
<template>
  <div class="error-reports">
    <h4>错误报告</h4>
    <ul>
      <li v-for="(report, index) in store.errorReports" :key="index">
        {{ report }}
      </li>
    </ul>
    <div v-if="store.error" class="error">{{ store.error }}</div>
  </div>
</template>

<script>
import { useMonitorStore } from '@/stores/monitorStore'
import { onMounted } from 'vue'

export default {
  name: 'ErrorReports',
  setup() {
    const store = useMonitorStore()

    onMounted(() => {
      store.fetchErrorReports()
    })

    return {
      store
    }
  }
}
</script>

<style scoped>
.error-reports {
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-top: 20px;
}

.error-reports ul {
  list-style-type: disc;
  padding-left: 20px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
