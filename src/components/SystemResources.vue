<!-- src/components/SystemResources.vue -->
<template>
    <div class="system-resources">
      <CpuUsage />
      <MemoryUsage />
      <StorageNetwork />
      <NetworkTraffic />
    </div>
  </template>
  
  <script>
  import CpuUsage from './charts/CpuUsage.vue'
  import MemoryUsage from './charts/MemoryUsage.vue'
  import StorageNetwork from './charts/StorageNetwork.vue'
  import NetworkTraffic from './charts/NetworkTraffic.vue'
  
  export default {
    name: 'SystemResources',
    components: {
      CpuUsage,
      MemoryUsage,
      StorageNetwork,
      NetworkTraffic
    }
  }
  </script>
  
  <style scoped>
  .system-resources {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  </style>
  