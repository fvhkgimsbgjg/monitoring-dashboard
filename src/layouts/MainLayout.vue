<!-- src/layouts/MainLayout.vue -->
<template>
    <div class="main-layout">
      <Header />
      <div class="content">
        <Sidebar />
        <div class="router-view-container">
          <slot></slot>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import Footer from '../components/Footer.vue'
  
  export default {
    name: 'MainLayout',
    components: {
      Header,
      Sidebar,
      Footer
    }
  }
  </script>
  
  <style scoped>
  .main-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  
  .router-view-container {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: #f5f5f5;
  }
  </style>
  