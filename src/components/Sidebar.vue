<template>
    <aside class="sidebar">
      <nav>
        <ul>
          <li @click="toggleCategory('system')">
            <span>系统资源</span>
          </li>
          <ul v-if="isSystemOpen">
            <li>CPU 使用率</li>
            <li>内存使用率</li>
            <li>存储与网络</li>
          </ul>
          <li @click="toggleCategory('user')">
            <span>用户体验</span>
          </li>
          <ul v-if="isUserOpen">
            <li>前端性能</li>
            <li>错误率</li>
            <li>用户行为分析</li>
          </ul>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'Sidebar',
    setup() {
      const isSystemOpen = ref(false)
      const isUserOpen = ref(false)
  
      const toggleCategory = (category) => {
        if (category === 'system') {
          isSystemOpen.value = !isSystemOpen.value
        } else if (category === 'user') {
          isUserOpen.value = !isUserOpen.value
        }
      }
  
      return {
        isSystemOpen,
        isUserOpen,
        toggleCategory
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #f5f5f5;
    padding: 20px;
    overflow-y: auto;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    padding: 10px 0;
    cursor: pointer;
  }
  
  nav ul li:hover {
    background-color: #e0e0e0;
  }
  
  nav ul ul {
    padding-left: 15px;
  }
  
  nav ul ul li {
    padding: 5px 0;
    cursor: default;
  }
  
  nav ul ul li:hover {
    background-color: transparent;
  }
  </style>
  