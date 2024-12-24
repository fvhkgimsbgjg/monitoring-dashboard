<template>
    <div class="user-groups">
      <h2 class="text-2xl font-bold mb-6">用户组管理</h2>
      <div class="mb-4">
        <button class="btn-add" @click="showAddGroupModal = true">
          <i class="fas fa-plus mr-2"></i>新建用户组
        </button>
      </div>
      
      <div class="groups-table">
        <table class="w-full">
          <thead>
            <tr>
              <th>组名称</th>
              <th>成员数量</th>
              <th>创建时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="group in groups" :key="group.id">
              <td>{{ group.name }}</td>
              <td>{{ group.memberCount }}</td>
              <td>{{ group.createTime }}</td>
              <td>
                <button class="btn-edit mr-2" @click="editGroup(group)">编辑</button>
                <button class="btn-delete" @click="deleteGroup(group.id)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserGroups',
    data() {
      return {
        showAddGroupModal: false,
        groups: [
          {
            id: 1,
            name: '开发组',
            memberCount: 8,
            createTime: '2024-01-15'
          },
          {
            id: 2,
            name: '测试组',
            memberCount: 5,
            createTime: '2024-01-16'
          }
        ]
      }
    },
    methods: {
      editGroup(group) {
        // 实现编辑用户组逻辑
      },
      deleteGroup(groupId) {
        // 实现删除用户组逻辑
      }
    }
  }
  </script>
  
  <style scoped>
  .btn-add {
    @apply bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600;
  }
  
  table th {
    @apply bg-gray-100 p-3 text-left;
  }
  
  table td {
    @apply border-b p-3;
  }
  
  .btn-edit {
    @apply bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600;
  }
  
  .btn-delete {
    @apply bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600;
  }
  </style>