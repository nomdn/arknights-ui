<template>
  <div class="docs-app">
    <!-- Header -->
    <header class="docs-header">
      <div class="docs-header__left">
        <router-link to="/" class="docs-header__logo">
          <span class="docs-header__icon">◆</span>
          <span class="docs-header__name">ARKNIGHTS UI</span>
        </router-link>
        <span class="docs-header__version">v0.1.0</span>
      </div>
      <nav class="docs-header__nav">
        <router-link to="/guide/getting-started" class="docs-header__link">指南</router-link>
        <router-link to="/components/button" class="docs-header__link">组件</router-link>
        <router-link to="/design/tokens" class="docs-header__link">设计</router-link>
      </nav>
    </header>

    <!-- Sidebar -->
    <aside class="docs-sidebar">
      <div v-for="group in sidebarGroups" :key="group.label" class="docs-sidebar__group">
        <div class="docs-sidebar__label">{{ group.label }}</div>
        <router-link
          v-for="item in group.items"
          :key="item.path"
          :to="item.path"
          class="docs-sidebar__item"
          :class="{ 'docs-sidebar__item--active': $route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </div>
    </aside>

    <!-- Content -->
    <main class="docs-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
const sidebarGroups = [
  {
    label: '开发指南',
    items: [
      { path: '/guide/getting-started', label: '快速上手' },
      { path: '/guide/installation', label: '安装' },
    ],
  },
  {
    label: '通用组件',
    items: [
      { path: '/components/button', label: 'Button 按钮' },
      { path: '/components/input', label: 'Input 输入框' },
    ],
  },
  {
    label: '布局组件',
    items: [
      { path: '/components/card', label: 'Card 卡片' },
    ],
  },
  {
    label: '导航组件',
    items: [
      { path: '/components/menu', label: 'Menu 菜单' },
    ],
  },
  {
    label: '数据展示',
    items: [
      { path: '/components/table', label: 'Table 表格' },
      { path: '/components/pagination', label: 'Pagination 分页' },
    ],
  },
  {
    label: '反馈组件',
    items: [
      { path: '/components/dialog', label: 'Dialog 对话框' },
      { path: '/components/drawer', label: 'Drawer 抽屉' },
    ],
  },
  {
    label: '设计规范',
    items: [
      { path: '/design/tokens', label: 'Design Tokens' },
      { path: '/design/colors', label: '色彩系统' },
    ],
  },
]
</script>

<style>
.docs-app {
  min-height: 100vh;
}

.docs-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: rgba(11, 14, 23, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--ak-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--ak-spacing-xl);
  z-index: 100;
}

.docs-header__left {
  display: flex;
  align-items: center;
  gap: var(--ak-spacing-md);
}

.docs-header__logo {
  display: flex;
  align-items: center;
  gap: var(--ak-spacing-sm);
  text-decoration: none;
}

.docs-header__icon {
  font-size: 22px;
  color: var(--ak-primary);
  text-shadow: 0 0 12px var(--ak-primary);
}

.docs-header__name {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--ak-primary-light);
  letter-spacing: 3px;
}

.docs-header__version {
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: var(--ak-text-muted);
  padding: 2px 6px;
  border: 1px solid var(--ak-border-color);
  border-radius: 2px;
}

.docs-header__nav {
  display: flex;
  gap: var(--ak-spacing-xl);
}

.docs-header__link {
  font-size: 14px;
  color: var(--ak-text-secondary);
  text-decoration: none;
  transition: color var(--ak-transition-fast);
}

.docs-header__link:hover,
.docs-header__link.router-link-active {
  color: var(--ak-primary-light);
}

.docs-sidebar {
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  width: 260px;
  background: var(--ak-bg-panel);
  border-right: 1px solid var(--ak-border-color);
  overflow-y: auto;
  padding: var(--ak-spacing-md) 0;
  z-index: 50;
}

.docs-sidebar__group {
  margin-bottom: var(--ak-spacing-sm);
}

.docs-sidebar__label {
  padding: var(--ak-spacing-sm) var(--ak-spacing-xl);
  font-size: 11px;
  font-weight: 600;
  color: var(--ak-text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.docs-sidebar__item {
  display: block;
  padding: 6px var(--ak-spacing-xl) 6px calc(var(--ak-spacing-xl) + 8px);
  color: var(--ak-text-secondary);
  font-size: 13px;
  text-decoration: none;
  transition: all 150ms ease;
  border-left: 2px solid transparent;
}

.docs-sidebar__item:hover {
  color: var(--ak-text-primary);
  background: var(--ak-bg-card);
}

.docs-sidebar__item--active {
  color: var(--ak-primary-light);
  border-left-color: var(--ak-primary);
  background: linear-gradient(90deg, rgba(0, 200, 255, 0.08) 0%, transparent 100%);
}

.docs-content {
  margin-left: 260px;
  margin-top: 56px;
  padding: 40px 48px 80px;
  max-width: 900px;
  min-height: calc(100vh - 56px);
}
</style>
