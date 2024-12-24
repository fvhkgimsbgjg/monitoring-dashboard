<!-- src/components/charts/ChartComponent.vue -->
<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { onMounted, watch, ref } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'ChartComponent',
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const chartCanvas = ref(null)
    let chartInstance = null

    const renderChart = () => {
      if (chartInstance) {
        chartInstance.destroy()
      }
      chartInstance = new Chart(chartCanvas.value, {
        type: props.type,
        data: props.data,
        options: props.options
      })
    }

    onMounted(() => {
      renderChart()
    })

    watch(
      () => props.data,
      () => {
        renderChart()
      },
      { deep: true }
    )

    watch(
      () => props.type,
      () => {
        renderChart()
      }
    )

    return {
      chartCanvas
    }
  }
}
</script>

<style scoped>
/* 可根据需要添加样式 */
</style>
