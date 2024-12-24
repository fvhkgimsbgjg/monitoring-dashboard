<!-- src/components/alerts/ActiveAlerts.vue -->
<template>
  <div class="alerts-container">
    <div class="alerts-header">
      <h2 class="text-xl font-bold mb-4">活动警报</h2>
      <div class="alert-filters">
        <select v-model="severityFilter" class="filter-select">
          <option value="">全部严重程度</option>
          <option value="critical">严重</option>
          <option value="warning">警告</option>
          <option value="info">信息</option>
        </select>
        <select v-model="timeFilter" class="filter-select">
          <option value="1h">最近1小时</option>
          <option value="24h">最近24小时</option>
          <option value="7d">最近7天</option>
        </select>
      </div>
    </div>

    <div class="alerts-list" v-if="filteredAlerts.length">
      <div v-for="alert in filteredAlerts" 
           :key="alert.id" 
           :class="['alert-item', `severity-${alert.severity}`]">
        <div class="alert-icon">
          <i :class="getAlertIcon(alert.severity)"></i>
        </div>
        <div class="alert-content">
          <h3 class="alert-title">{{ alert.title }}</h3>
          <p class="alert-message">{{ alert.message }}</p>
          <div class="alert-meta">
            <span class="alert-time">{{ formatTime(alert.timestamp) }}</span>
            <span class="alert-source">{{ alert.source }}</span>
          </div>
        </div>
        <div class="alert-actions">
          <button @click="acknowledgeAlert(alert.id)" 
                  class="btn-acknowledge"
                  :disabled="alert.acknowledged">
            {{ alert.acknowledged ? '已确认' : '确认' }}
          </button>
          <button @click="muteAlert(alert.id)" 
                  class="btn-mute"
                  :class="{ 'btn-muted': alert.muted }">
            {{ alert.muted ? '已静音' : '静音' }}
          </button>
        </div>
      </div>
    </div>
    <div v-else class="no-alerts">
      <p>当前没有符合条件的警报</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useMonitorStore } from '@/stores/monitorStore'

export default {
  name: 'ActiveAlerts',
  
  setup() {
    const store = useMonitorStore()
    const severityFilter = ref('')
    const timeFilter = ref('24h')
    
    const filteredAlerts = computed(() => {
      return store.alerts.filter(alert => {
        const matchesSeverity = !severityFilter.value || alert.severity === severityFilter.value
        const matchesTime = isWithinTimeFilter(alert.timestamp)
        return matchesSeverity && matchesTime && !alert.archived
      })
    })

    const getAlertIcon = (severity) => {
      const icons = {
        critical: 'fas fa-exclamation-circle text-red-600',
        warning: 'fas fa-exclamation-triangle text-yellow-500',
        info: 'fas fa-info-circle text-blue-500'
      }
      return icons[severity] || icons.info
    }

    const formatTime = (timestamp) => {
      return new Date(timestamp).toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    const isWithinTimeFilter = (timestamp) => {
      const now = Date.now()
      const timeFilters = {
        '1h': 60 * 60 * 1000,
        '24h': 24 * 60 * 60 * 1000,
        '7d': 7 * 24 * 60 * 60 * 1000
      }
      return now - timestamp <= timeFilters[timeFilter.value]
    }

    const acknowledgeAlert = async (alertId) => {
      try {
        await store.acknowledgeAlert(alertId)
      } catch (error) {
        console.error('确认警报失败:', error)
      }
    }

    const muteAlert = async (alertId) => {
      try {
        await store.muteAlert(alertId)
      } catch (error) {
        console.error('静音警报失败:', error)
      }
    }

    onMounted(async () => {
      await store.fetchAlerts()
    })

    return {
      severityFilter,
      timeFilter,
      filteredAlerts,
      getAlertIcon,
      formatTime,
      acknowledgeAlert,
      muteAlert
    }
  }
}
</script>

<style scoped>
.alerts-container {
  padding: 1.25rem;
  background-color: var(--background-color, #f8f9fa);
}

.alerts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.filter-select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  margin-left: 0.75rem;
  background-color: white;
}

.alerts-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.alert-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-left: 4px solid transparent;
}

.severity-critical {
  border-left-color: #dc3545;
}

.severity-warning {
  border-left-color: #ffc107;
}

.severity-info {
  border-left-color: #17a2b8;
}

.alert-icon {
  padding: 0.5rem;
  font-size: 1.25rem;
}

.alert-content {
  flex: 1;
  margin: 0 1rem;
}

.alert-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.alert-message {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.alert-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #718096;
}

.alert-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-acknowledge,
.btn-mute {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-acknowledge {
  background-color: #28a745;
  color: white;
}

.btn-acknowledge:disabled {
  background-color: #82c791;
  cursor: not-allowed;
}

.btn-mute {
  background-color: #6c757d;
  color: white;
}

.btn-muted {
  background-color: #adb5bd;
}

.no-alerts {
  text-align: center;
  padding: 2rem;
  color: #718096;
}

@media (max-width: 640px) {
  .alerts-header {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .alert-filters {
    display: flex;
    gap: 0.5rem;
  }
  
  .filter-select {
    flex: 1;
    margin-left: 0;
  }
}
</style>