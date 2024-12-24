<!-- src/views/Dashboard.vue -->
<template>
    <MainLayout>
      <div class="dashboard">
        <SystemResources />
        <UserExperience />
      </div>
    </MainLayout>
  </template>
  
  <script>
  import MainLayout from '../layouts/MainLayout.vue'
  import SystemResources from '../components/SystemResources.vue'
  import UserExperience from '../components/UserExperience.vue'
  
  export default {
    name: 'Dashboard',
    components: {
      MainLayout,
      SystemResources,
      UserExperience
    }
  }
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  </style>
  