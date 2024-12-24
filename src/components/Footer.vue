<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <p>&copy; 2024 监控仪表盘. 保留所有权利。</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #34495e;
  color: #ecf0f1;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
