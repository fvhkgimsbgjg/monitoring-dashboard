<!-- src/components/charts/ChartComponent.vue -->
<template>
  <div class="chart-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { onMounted, ref, watch, onBeforeUnmount } from 'vue'
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
      default: () => ({
        responsive: true,
        maintainAspectRatio: true // 保持图表的纵横比
      })
    }
  },
  setup(props) {
    const canvas = ref(null)
    let chartInstance = null

    const renderChart = () => {
      if (chartInstance) {
        chartInstance.destroy()
      }
      chartInstance = new Chart(canvas.value, {
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

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy()
      }
    })

    return {
      canvas
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 100%; /* 让容器高度占满父元素 */
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
