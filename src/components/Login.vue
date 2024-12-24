<!-- src/components/Login.vue -->
<template>
  <div class="login">
    <h2>登录</h2>
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
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMonitorStore } from '@/stores/monitorStore'
import { useRouter } from 'vue-router'

export default {
name: 'Login',
setup() {
  const username = ref('')
  const password = ref('')
  const error = ref(null)
  const loading = ref(false)
  const store = useMonitorStore()
  const router = useRouter()

  const handleLogin = async () => {
    loading.value = true
    error.value = null
    try {
      await store.login(username.value, password.value)
      router.push({ name: 'Dashboard' })
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    username,
    password,
    error,
    loading,
    handleLogin
  }
}
}
</script>

<style scoped>
.login {
background-color: #fff;
padding: 40px;
border: 1px solid #dcdfe6;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
width: 300px;
margin: 0 auto;
}

.login h2 {
text-align: center;
margin-bottom: 20px;
}

.form-group {
margin-bottom: 15px;
}

label {
display: block;
margin-bottom: 5px;
font-weight: 500;
}

input {
width: 100%;
padding: 8px;
border: 1px solid #dcdfe6;
border-radius: 4px;
box-sizing: border-box;
}

button {
width: 100%;
padding: 10px;
background-color: #409eff;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 1em;
}

button:hover {
background-color: #3071d3;
}

button:disabled {
background-color: #a0cfff;
cursor: not-allowed;
}

.error {
color: red;
margin-top: 10px;
text-align: center;
}
</style>
