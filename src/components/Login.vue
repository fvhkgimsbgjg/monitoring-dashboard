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
        <button type="submit">登录</button>
      </form>
      <div class="links">
        <a href="#">忘记密码</a> | <a href="#">注册新用户</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleLogin() {
        // 登录逻辑，将在后续实现
        // 假设登录成功后，导航到主监控面板
        this.$router.push('/dashboard')
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
  
  .links {
    margin-top: 10px;
  }
  </style>
  