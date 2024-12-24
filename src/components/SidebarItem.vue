<!-- src/components/SidebarItem.vue -->
<template>
  <div>
    <router-link :to="to" :exact="exact" class="sidebar-item" active-class="active">
      <i :class="icon"></i>
      <span>{{ label }}</span>
    </router-link>
    <div v-if="children && children.length" class="sidebar-children">
      <SidebarItem
        v-for="child in children"
        :key="child.to"
        :to="child.to"
        :label="child.label"
        :icon="child.icon"
        :exact="child.exact"
        :children="child.children"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    exact: {
      type: Boolean,
      default: false
    },
    children: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #ecf0f1;
  text-decoration: none;
}
.sidebar-item:hover {
  background-color: #34495e;
}
.sidebar-item.active {
  background-color: #1abc9c;
}
.sidebar-item i {
  margin-right: 10px;
}
.sidebar-children {
  padding-left: 20px;
}
</style>
