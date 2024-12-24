// src/components/UserManagement/AddUser.vue
<template>
  <UserForm
    title="新增用户"
    submit-text="添加"
    :loading="loading"
    @submit="handleAddUser"
  />
</template>

<script>
import { ref } from 'vue'
import { useMonitorStore } from '@/stores/monitorStore'
import { useRouter } from 'vue-router'
import UserForm from './UserForm.vue'

export default {
  name: 'AddUser',
  components: {
    UserForm
  },
  
  setup() {
    const store = useMonitorStore()
    const router = useRouter()
    const loading = ref(false)

    const handleAddUser = async (formData) => {
      loading.value = true
      try {
        await store.addUser(formData)
        router.push({ name: 'UserManagement' })
      } catch (err) {
        throw new Error('添加用户失败')
      } finally {
        loading.value = false
      }
    }

    return {
      loading,
      handleAddUser
    }
  }
}
</script>
  
  <style scoped>
  .add-user {
    padding: 20px;
    background-color: var(--background-color);
    color: var(--text-color);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 15px;
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    background-color: #3071d3;
  }
  
  button:disabled {
    background-color: #a0cfff;
    cursor: not-allowed;
  }
  
  .success {
    margin-top: 15px;
    color: green;
    text-align: center;
  }
  
  .error {
    margin-top: 15px;
    color: red;
    text-align: center;
  }
  </style>
  