<template>
    <div class="role-permissions">
      <h2 class="text-2xl font-bold mb-6">角色权限管理</h2>
      <div class="roles-list grid gap-4">
        <div v-for="role in roles" :key="role.id" class="role-card bg-white p-4 rounded shadow">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl">{{ role.name }}</h3>
            <div class="actions">
              <button class="btn-edit mr-2" @click="editRole(role)">编辑</button>
              <button class="btn-delete" @click="deleteRole(role.id)">删除</button>
            </div>
          </div>
          <div class="permissions-list">
            <div v-for="perm in role.permissions" :key="perm.id" class="permission-item">
              <input type="checkbox" :checked="perm.enabled" @change="togglePermission(role.id, perm.id)">
              <span class="ml-2">{{ perm.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RolePermissions',
    data() {
      return {
        roles: [
          {
            id: 1,
            name: '管理员',
            permissions: [
              { id: 1, name: '用户管理', enabled: true },
              { id: 2, name: '系统设置', enabled: true },
              { id: 3, name: '数据访问', enabled: true }
            ]
          },
          {
            id: 2,
            name: '普通用户',
            permissions: [
              { id: 1, name: '用户管理', enabled: false },
              { id: 2, name: '系统设置', enabled: false },
              { id: 3, name: '数据访问', enabled: true }
            ]
          }
        ]
      }
    },
    methods: {
      editRole(role) {
        // 实现编辑角色逻辑
      },
      deleteRole(roleId) {
        // 实现删除角色逻辑
      },
      togglePermission(roleId, permId) {
        // 实现权限切换逻辑
      }
    }
  }
  </script>
  
  <style scoped>
  .btn-edit {
    @apply bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600;
  }
  
  .btn-delete {
    @apply bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600;
  }
  
  .permission-item {
    @apply flex items-center py-2;
  }
  </style>