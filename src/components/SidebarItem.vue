<!-- src/components/SidebarItem.vue -->
<template>
  <div>
    <router-link 
      :to="to" 
      :exact="exact" 
      class="sidebar-item" 
      active-class="active"
      @click.native="toggleSubmenu"
    >
      <i :class="icon"></i>
      <span>{{ label }}</span>
      <i 
        v-if="children && children.length" 
        :class="['fas', isOpen ? 'fa-chevron-down' : 'fa-chevron-right']"
        class="submenu-arrow"
      ></i>
    </router-link>
    <transition name="slide">
      <div 
        v-if="children && children.length" 
        v-show="isOpen"
        class="sidebar-children"
      >
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
    </transition>
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
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleSubmenu() {
      if (this.children && this.children.length) {
        this.isOpen = !this.isOpen;
      }
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
  position: relative;
  transition: background-color 0.3s;
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

.submenu-arrow {
  position: absolute;
  right: 15px;
  transition: transform 0.3s;
}

.sidebar-children {
  padding-left: 20px;
  overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>