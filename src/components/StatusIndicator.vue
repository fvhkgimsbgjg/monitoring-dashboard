<template>
    <div class="status-indicator">
      <span :class="['indicator', status]"></span>
      <span class="label">{{ label }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatusIndicator',
    props: {
      status: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .status-indicator {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  
  .indicator.green {
    background-color: green;
  }
  
  .indicator.yellow {
    background-color: yellow;
  }
  
  .indicator.red {
    background-color: red;
  }
  
  .label {
    font-size: 14px;
  }
  </style>
  