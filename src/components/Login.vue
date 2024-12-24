<!-- src/components/Login.vue -->
<template>
    <div class="login">
      <h2>登录监控系统</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" :disabled="loading">登录</button>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
      <div class="links">
        <a href="#">忘记密码</a> | <a href="#">注册新用户</a>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useMonitorStore } from '../stores/monitorStore'
  
  export default {
    name: 'Login',
    setup() {
      const store = useMonitorStore()
      const username = ref('')
      const password = ref('')
      const error = ref(null)
  
      const handleLogin = async () => {
        error.value = null
        try {
          await store.login(username.value, password.value)
          // 登录成功后，导航到主监控面板
          // 使用路由实例进行导航
          window.location.href = '/dashboard' // 或使用 router.push('/dashboard')，需要在 setup 中引入 useRouter
        } catch (err) {
          error.value = store.error || '登录失败，请重试。'
        }
      }
  
      return {
        username,
        password,
        handleLogin,
        error,
        loading: store.loading
      }
    }
  }
  </script>
  
  <style scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    padding: 8px;
    width: 200px;
  }
  
  button {
    padding: 10px 20px;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .links {
    margin-top: 10px;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  