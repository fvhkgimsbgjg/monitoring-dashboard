// src/components/UserManagement/EditUser.vue
<template>
  <UserForm
    v-if="user"
    title="编辑用户"
    submit-text="保存"
    :initial-data="user"
    :loading="loading"
    @submit="handleEditUser"
  />
</template>

<script>
import { ref, onMounted } from 'vue'
import { useMonitorStore } from '@/stores/monitorStore'
import { useRouter, useRoute } from 'vue-router'
import UserForm from './UserForm.vue'

export default {
  name: 'EditUser',
  components: {
    UserForm
  },

  setup() {
    const store = useMonitorStore()
    const router = useRouter()
    const route = useRoute()
    const loading = ref(false)
    const user = ref(null)

    const userId = parseInt(route.query.id)

    onMounted(() => {
      const foundUser = store.users.find(u => u.id === userId)
      if (foundUser) {
        user.value = {
          username: foundUser.username,
          role: foundUser.role
        }
      } else {
        router.push({ 
          name: 'UserManagement',
          query: { error: 'user-not-found' }
        })
      }
    })

    const handleEditUser = async (formData) => {
      loading.value = true
      try {
        await store.editUser({ 
          id: userId,
          ...formData
        })
        router.push({ name: 'UserManagement' })
      } catch (err) {
        throw new Error('更新用户失败')
      } finally {
        loading.value = false
      }
    }

    return {
      user,
      loading,
      handleEditUser
    }
  }
}
</script>
  
  <style scoped>
  .edit-user {
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
  