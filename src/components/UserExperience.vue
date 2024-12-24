<!-- src/components/UserExperience.vue -->
<template>
  <div class="user-experience">
    <h1>用户体验</h1>
    <ChartComponent :type="'bar'" :data="experienceData" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useMonitorStore } from '@/stores/monitorStore'
import ChartComponent from './charts/ChartComponent.vue'

export default {
  name: 'UserExperience',
  components: {
    ChartComponent
  },
  setup() {
    const store = useMonitorStore()

    const experienceData = computed(() => ({
      labels: store.userBehavior.labels,
      datasets: [
        {
          label: '用户行为',
          data: store.userBehavior.data,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1
        }
      ]
    }))

    return {
      experienceData,
      store
    }
  }
}
</script>

<style scoped>
.user-experience {
  background-color: #fff;
  padding: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-top: 20px;
}
</style>
