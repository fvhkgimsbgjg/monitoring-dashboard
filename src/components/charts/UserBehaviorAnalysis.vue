<!-- src/components/charts/UserBehaviorAnalysis.vue -->
<template>
    <div class="user-behavior-analysis">
      <h3>用户行为分析</h3>
      <ChartComponent :type="'pie'" :data="chartData" />
    </div>
  </template>
  
  <script>
  import ChartComponent from './ChartComponent.vue'
  
  export default {
    name: 'UserBehaviorAnalysis',
    components: {
      ChartComponent
    },
    data() {
      return {
        chartData: {
          labels: ['访问', '点击', '注册', '购买'],
          datasets: [
            {
              label: '用户行为',
              data: [1000, 800, 600, 400],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            }
          ]
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .user-behavior-analysis {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  </style>
  