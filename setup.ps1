# 设置项目根路径
$root = Get-Location

# 定义目录结构
$directories = @(
    "src/assets",
    "src/components/charts",
    "src/layouts",
    "src/router",
    "src/stores",
    "src/views"
)

# 创建目录
foreach ($dir in $directories) {
    $path = Join-Path $root $dir
    if (!(Test-Path -Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
        Write-Host "Created directory: $path"
    } else {
        Write-Host "Directory already exists: $path"
    }
}

# 定义文件结构
$files = @(
    "src/components/Header.vue",
    "src/components/Sidebar.vue",
    "src/components/Footer.vue",
    "src/components/Login.vue",
    "src/components/SystemResources.vue",
    "src/components/UserExperience.vue",
    "src/components/charts/CpuUsage.vue",
    "src/components/charts/MemoryUsage.vue",
    "src/components/charts/DiskUsage.vue",
    "src/components/charts/NetworkTraffic.vue",
    "src/components/charts/FrontendPerformance.vue",
    "src/components/charts/ErrorReports.vue",
    "src/components/charts/UserBehaviorAnalysis.vue",
    "src/layouts/MainLayout.vue",
    "src/router/index.js",
    "src/stores/monitorStore.js",
    "src/views/Dashboard.vue",
    "src/views/LoginPage.vue"
)

# 创建空文件
foreach ($file in $files) {
    $path = Join-Path $root $file
    if (!(Test-Path -Path $path)) {
        New-Item -ItemType File -Path $path -Force | Out-Null
        Write-Host "Created file: $path"
    } else {
        Write-Host "File already exists: $path"
    }
}

Write-Host "Project structure setup complete."
