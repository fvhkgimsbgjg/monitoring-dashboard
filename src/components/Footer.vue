<template>
    <footer class="footer">
      <div class="logs">
        <h3>系统日志摘要</h3>
        <ul>
          <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
        </ul>
      </div>
      <div class="alerts">
        <h3>最新报警信息</h3>
        <ul>
          <li v-for="(alert, index) in alerts" :key="index">{{ alert }}</li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'Footer',
    setup() {
      const logs = ref([
        '系统启动成功',
        'CPU 使用率正常',
        '内存使用率正常'
        // 其他日志
      ])
  
      const alerts = ref([
        '无最新报警信息'
        // 其他报警
      ])
  
      return {
        logs,
        alerts
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f0f2f5;
    border-top: 1px solid #dcdfe6;
  }
  
  .footer h3 {
    margin: 0 0 5px 0;
    font-size: 14px;
  }
  
  .footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 100px;
    overflow-y: auto;
  }
  
  .footer ul li {
    font-size: 12px;
    padding: 2px 0;
  }
  </style>
  