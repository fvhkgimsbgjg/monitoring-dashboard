<!-- src/components/Login.vue -->
<template>
  <div class="login">
    <div class="login-card">
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
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMonitorStore } from '../stores/monitorStore'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const store = useMonitorStore()
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const error = ref(null)

    const handleLogin = async () => {
      error.value = null
      try {
        await store.login(username.value, password.value)
        // 登录成功后，导航到主监控面板
        router.push({ name: 'Dashboard' })
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
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-color);
}

.login-card {
  background-color: #ffffff;
  padding: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  box-sizing: border-box;
}

.login-card h2 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--text-color);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-color);
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #409eff;
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3071d3;
}

button:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}

.links {
  margin-top: 20px;
  text-align: center;
}

.links a {
  color: #409eff;
  text-decoration: none;
  margin: 0 5px;
}

.links a:hover {
  text-decoration: underline;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
