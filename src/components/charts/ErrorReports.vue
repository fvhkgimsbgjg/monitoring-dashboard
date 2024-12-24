<!-- src/components/charts/ErrorReports.vue -->
<template>
    <div class="error-reports">
      <h3>错误报告</h3>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorReports',
    data() {
      return {
        errors: [
          '错误1: 数据库连接失败',
          '错误2: 无法加载用户信息',
          '错误3: 前端渲染异常'
          // 您可以根据需要添加更多错误
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .error-reports {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  
  .error-reports ul {
    list-style: none;
    padding: 0;
  }
  
  .error-reports li {
    padding: 5px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  </style>
  