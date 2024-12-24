<!-- src/components/UserManagement/AddUser.vue -->
<template>
    <div class="add-user">
      <h2>新增用户</h2>
      <form @submit.prevent="handleAddUser">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="role">角色</label>
          <select id="role" v-model="role" required>
            <option value="admin">管理员</option>
            <option value="user">普通用户</option>
          </select>
        </div>
        <button type="submit" :disabled="loading">添加</button>
        <div v-if="success" class="success">用户添加成功！</div>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useMonitorStore } from '@/stores/monitorStore'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'AddUser',
    setup() {
      const username = ref('')
      const role = ref('user')
      const success = ref(false)
      const error = ref(null)
      const loading = ref(false)
      const store = useMonitorStore()
      const router = useRouter()
  
      const handleAddUser = async () => {
        loading.value = true
        success.value = false
        error.value = null
        try {
          await store.addUser({ username: username.value, role: role.value })
          success.value = true
          username.value = ''
          role.value = 'user'
          // 重定向回用户管理页面
          router.push({ name: 'UserManagement' })
        } catch (err) {
          error.value = '添加用户失败。'
        } finally {
          loading.value = false
        }
      }
  
      return {
        username,
        role,
        success,
        error,
        handleAddUser,
        loading
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
  