<template>
    <div class="user-experience">
      <FrontendPerformance />
      <ErrorRate />
      <UserBehaviorAnalysis />
    </div>
  </template>
  
  <script>
  import FrontendPerformance from './charts/FrontendPerformance.vue'
  import ErrorRate from './charts/ErrorRate.vue'
  import UserBehaviorAnalysis from './charts/UserBehaviorAnalysis.vue'
  
  export default {
    name: 'UserExperience',
    components: {
      FrontendPerformance,
      ErrorRate,
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
  