<!-- src/components/SidebarItem.vue -->
<template>
  <router-link :to="to" class="sidebar-item" :class="{ active: isActive }" :title="collapsed ? label : ''">
    <i :class="iconClass"></i>
    <span v-if="!collapsed" class="label">{{ label }}</span>
  </router-link>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'SidebarItem',
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    const iconClass = computed(() => `fas ${props.icon}`)

    return {
      isActive,
      iconClass
    }
  }
}
</script>

<style scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;
  position: relative;
}

.sidebar-item:hover {
  background-color: #f0f0f0;
}

.sidebar-item.active {
  background-color: #dcdfe6;
  font-weight: bold;
}

.fas {
  margin-right: 10px;
  font-size: 1.2em;
}

.label {
  white-space: nowrap;
}
</style>
