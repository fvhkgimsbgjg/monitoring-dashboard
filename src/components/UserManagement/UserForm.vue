// src/components/UserManagement/UserForm.vue
<template>
  <div class="user-form">
    <h2>{{ title }}</h2>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="username">用户名</label>
        <input
          type="text"
          id="username"
          v-model="form.username"
          :class="{ 'error-input': v$.form.username.$error }"
          @blur="v$.form.username.$touch()"
          required
        />
        <span v-if="v$.form.username.$error" class="error-text">
          {{ v$.form.username.$errors[0].$message }}
        </span>
      </div>
      
      <div class="form-group">
        <label for="role">角色</label>
        <select
          id="role"
          v-model="form.role"
          :class="{ 'error-input': v$.form.role.$error }"
          @blur="v$.form.role.$touch()"
          required
        >
          <option value="admin">管理员</option>
          <option value="user">普通用户</option>
        </select>
        <span v-if="v$.form.role.$error" class="error-text">
          {{ v$.form.role.$errors[0].$message }}
        </span>
      </div>

      <button type="submit" :disabled="loading || v$.$invalid">
        {{ loading ? '处理中...' : submitText }}
      </button>

      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
  name: 'UserForm',
  props: {
    initialData: {
      type: Object,
      default: () => ({
        username: '',
        role: 'user'
      })
    },
    title: {
      type: String,
      required: true
    },
    submitText: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  
  emits: ['submit'],

  setup(props, { emit }) {
    const form = reactive({
      username: props.initialData.username,
      role: props.initialData.role
    })

    const rules = computed(() => ({
      form: {
        username: { 
          required, 
          minLength: minLength(3)
        },
        role: { required }
      }
    }))

    const v$ = useVuelidate(rules, { form })
    
    const successMessage = ref('')
    const errorMessage = ref('')

    const handleSubmit = async () => {
      errorMessage.value = ''
      successMessage.value = ''
      
      const isValid = await v$.value.$validate()
      if (!isValid) return

      try {
        emit('submit', { ...form })
        successMessage.value = '操作成功！'
      } catch (err) {
        errorMessage.value = err.message || '操作失败'
      }
    }

    return {
      form,
      v$,
      successMessage,
      errorMessage,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.user-form {
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
  max-width: 500px;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 500;
  color: var(--text-color);
}

input,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: border-color 0.2s;
}

.error-input {
  border-color: #f56c6c;
}

.error-text {
  color: #f56c6c;
  font-size: 0.875rem;
}

button {
  padding: 0.75rem;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover:not(:disabled) {
  background-color: #3071d3;
}

button:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}

.success,
.error {
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
}

.success {
  background-color: #f0f9eb;
  color: #67c23a;
}

.error {
  background-color: #fef0f0;
  color: #f56c6c;
}
</style>