<!-- src/components/UserExperience.vue -->
<template>
    <div class="user-experience">
      <FrontendPerformance />
      <ErrorReports />
      <UserBehaviorAnalysis />
    </div>
  </template>
  
  <script>
  import FrontendPerformance from './charts/FrontendPerformance.vue'
  import ErrorReports from './charts/ErrorReports.vue'
  import UserBehaviorAnalysis from './charts/UserBehaviorAnalysis.vue'
  
  export default {
    name: 'UserExperience',
    components: {
      FrontendPerformance,
      ErrorReports,
      UserBehaviorAnalysis
    }
  }
  </script>
  
  <style scoped>
  .user-experience {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  </style>
  