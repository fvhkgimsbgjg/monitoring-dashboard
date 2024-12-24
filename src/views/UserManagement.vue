<!-- src/views/UserManagement.vue -->
<template>
    <div class="user-management">
      <h1>用户管理</h1>
      <div class="actions">
        <button @click="openAddUserModal">新增用户</button>
      </div>
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>角色</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="editUser(user)">编辑</button>
              <button @click="deleteUser(user.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- 新增用户模态框 -->
      <div v-if="isAddUserModalOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeAddUserModal">&times;</span>
          <h2>新增用户</h2>
          <form @submit.prevent="addUser">
            <div class="form-group">
              <label for="username">用户名</label>
              <input type="text" id="username" v-model="newUser.username" required />
            </div>
            <div class="form-group">
              <label for="role">角色</label>
              <select id="role" v-model="newUser.role" required>
                <option value="admin">管理员</option>
                <option value="user">普通用户</option>
              </select>
            </div>
            <button type="submit">添加</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'UserManagement',
    setup() {
      const users = ref([
        { id: 1, username: 'admin', role: 'admin' },
        { id: 2, username: 'user1', role: 'user' },
        // 添加更多静态用户数据
      ])
  
      const isAddUserModalOpen = ref(false)
      const newUser = ref({
        username: '',
        role: 'user'
      })
  
      const openAddUserModal = () => {
        isAddUserModalOpen.value = true
      }
  
      const closeAddUserModal = () => {
        isAddUserModalOpen.value = false
        newUser.value = { username: '', role: 'user' }
      }
  
      const addUser = () => {
        const newId = users.value.length + 1
        users.value.push({ id: newId, ...newUser.value })
        closeAddUserModal()
      }
  
      const editUser = (user) => {
        alert(`编辑用户：${user.username}`)
        // 实际项目中应弹出编辑模态框并处理编辑逻辑
      }
  
      const deleteUser = (id) => {
        users.value = users.value.filter(user => user.id !== id)
      }
  
      return {
        users,
        isAddUserModalOpen,
        newUser,
        openAddUserModal,
        closeAddUserModal,
        addUser,
        editUser,
        deleteUser
      }
    }
  }
  </script>
  
  <style scoped>
  .user-management {
    padding: 20px;
    background-color: var(--background-color);
    color: var(--text-color);
  }
  
  .actions {
    margin-bottom: 20px;
  }
  
  .user-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .user-table th,
  .user-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .user-table th {
    background-color: #f2f2f2;
  }
  
  button {
    margin-right: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: var(--background-color);
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    color: var(--text-color);
  }
  
  .close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
  }
  </style>
  