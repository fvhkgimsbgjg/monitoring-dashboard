<!-- src/views/Logs.vue -->
<template>
    <div class="logs">
      <h1>系统日志</h1>
      <div class="logs-filter">
        <label for="log-level">日志级别:</label>
        <select id="log-level" v-model="selectedLevel">
          <option value="">全部</option>
          <option value="info">信息</option>
          <option value="warning">警告</option>
          <option value="error">错误</option>
        </select>
      </div>
      <ul class="logs-list">
        <li v-for="log in filteredLogs" :key="log.id" :class="log.level">
          <span class="timestamp">{{ log.timestamp }}</span>
          <strong>{{ log.level.toUpperCase() }}:</strong> {{ log.message }}
        </li>
      </ul>
    </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Logs',
  setup() {
    const logs = ref([
      { id: 1, level: 'info', message: '系统启动成功。', timestamp: '2024-04-27 08:00:00' },
      { id: 2, level: 'warning', message: '磁盘空间不足。', timestamp: '2024-04-27 09:30:00' },
      { id: 3, level: 'error', message: '应用程序崩溃。', timestamp: '2024-04-27 10:45:00' },
      { id: 4, level: 'info', message: '用户登录成功。', timestamp: '2024-04-27 11:00:00' },
      // 添加更多静态日志数据
    ])

    const selectedLevel = ref('')

    const filteredLogs = computed(() => {
      if (!selectedLevel.value) {
        return logs.value
      }
      return logs.value.filter(log => log.level === selectedLevel.value)
    })

    return {
      logs,
      selectedLevel,
      filteredLogs
    }
  }
}
</script>

<style scoped>
.logs {
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.logs-filter {
  margin-bottom: 20px;
}

.logs-list {
  list-style-type: none;
  padding: 0;
  margin: 0; /* 确保没有额外的外边距 */
}

.logs-list li {
  padding: 10px 10px 10px 120px; /* 增加左侧内边距，为时间戳留出空间 */
  border-bottom: 1px solid #ddd;
  position: relative;
}

.logs-list li.info {
  background-color: #d1ecf1;
  color: #0c5460;
}

.logs-list li.warning {
  background-color: #fff3cd;
  color: #856404;
}

.logs-list li.error {
  background-color: #f8d7da;
  color: #721c24;
}

.timestamp {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.8em;
  color: #6c757d;
  width: 100px; /* 固定宽度，确保时间戳不会超过预期范围 */
  text-align: right; /* 右对齐时间戳 */
  white-space: nowrap; /* 防止时间戳换行 */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
