<!-- src/components/charts/ChartComponent.vue -->
<template>
    <div class="chart-container">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, watch } from 'vue'
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
      const canvas = ref(null)
      let chartInstance = null
  
      onMounted(() => {
        chartInstance = new Chart(canvas.value, {
          type: props.type,
          data: props.data,
          options: props.options
        })
      })
  
      watch(
        () => props.data,
        (newData) => {
          if (chartInstance) {
            chartInstance.data = newData
            chartInstance.update()
          }
        },
        { deep: true }
      )
  
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
    height: 300px;
  }
  </style>
  