<!-- src/views/UserManagement.vue -->
<template>
    <div class="user-management">
      <h1>用户管理</h1>
      <div class="actions">
        <router-link to="add-user">
          <button>新增用户</button>
        </router-link>
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
          <tr v-for="user in store.users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td>
              <router-link :to="{ name: 'EditUser', query: { id: user.id } }">
                <button>编辑</button>
              </router-link>
              <button @click="deleteUser(user.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- 渲染子路由组件 -->
      <router-view />
    </div>
  </template>
  
  <script>
  import { useMonitorStore } from '@/stores/monitorStore'
  
  export default {
    name: 'UserManagement',
    setup() {
      const store = useMonitorStore()
  
      const deleteUser = (id) => {
        store.deleteUser(id)
      }
  
      return {
        store,
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
  
  button:last-child {
    margin-right: 0;
  }
  </style>
  