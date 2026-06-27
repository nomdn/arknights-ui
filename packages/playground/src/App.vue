<template>
  <div class="playground-app">
    <aside class="playground-sidebar">
      <div class="playground-logo">
        <div class="playground-logo__icon">&#9670;</div>
        <div class="playground-logo__text">
          <span class="playground-logo__name">ARKNIGHTS UI</span>
          <span class="playground-logo__ver">v0.1.0</span>
        </div>
      </div>
      <nav class="playground-nav">
        <div v-for="group in navGroups" :key="group.label" class="playground-nav__group">
          <div class="playground-nav__label">{{ group.label }}</div>
          <router-link
            v-for="item in group.items"
            :key="item.path"
            :to="item.path"
            class="playground-nav__item"
            :class="{ 'playground-nav__item--active': $route.path === item.path }"
          >
            {{ item.label }}
          </router-link>
        </div>
      </nav>
      <div class="playground-sidebar__footer">
        RHODES ISLAND
      </div>
    </aside>
    <main class="playground-main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
const navGroups = [
  {
    label: '基础组件',
    items: [
      { path: '/button', label: 'Button 按钮' },
      { path: '/input', label: 'Input 输入框' },
      { path: '/card', label: 'Card 卡片' },
    ],
  },
  {
    label: '数据展示',
    items: [
      { path: '/table', label: 'Table 表格' },
      { path: '/pagination', label: 'Pagination 分页' },
      { path: '/menu', label: 'Menu 菜单' },
    ],
  },
  {
    label: '反馈组件',
    items: [
      { path: '/dialog', label: 'Dialog 对话框' },
      { path: '/drawer', label: 'Drawer 抽屉' },
    ],
  },
]
</script>

<style>
.playground-app {
  display: flex;
  min-height: 100vh;
}

.playground-sidebar {
  width: 240px;
  background: var(--ak-bg-panel);
  border-right: 1px solid var(--ak-border-color);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
}

.playground-logo {
  display: flex;
  align-items: center;
  gap: var(--ak-spacing-md);
  padding: var(--ak-spacing-xl);
  border-bottom: 1px solid var(--ak-border-color);
}

.playground-logo__icon {
  font-size: 24px;
  color: var(--ak-primary);
  text-shadow: 0 0 10px var(--ak-primary);
}

.playground-logo__text {
  display: flex;
  flex-direction: column;
}

.playground-logo__name {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--ak-primary-light);
  letter-spacing: 2px;
}

.playground-logo__ver {
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: var(--ak-text-muted);
}

.playground-nav {
  flex: 1;
  overflow-y: auto;
  padding: var(--ak-spacing-sm) 0;
}

.playground-nav__group {
  margin-bottom: var(--ak-spacing-md);
}

.playground-nav__label {
  padding: var(--ak-spacing-sm) var(--ak-spacing-xl);
  font-size: 11px;
  font-weight: 600;
  color: var(--ak-text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.playground-nav__item {
  display: block;
  padding: var(--ak-spacing-sm) var(--ak-spacing-xl) var(--ak-spacing-sm) calc(var(--ak-spacing-xl) + 8px);
  color: var(--ak-text-secondary);
  font-size: 14px;
  text-decoration: none;
  transition: all 150ms ease;
  border-left: 2px solid transparent;
}

.playground-nav__item:hover {
  color: var(--ak-text-primary);
  background: var(--ak-bg-card);
}

.playground-nav__item--active {
  color: var(--ak-primary-light);
  border-left-color: var(--ak-primary);
  background: linear-gradient(90deg, rgba(0, 200, 255, 0.08) 0%, transparent 100%);
}

.playground-sidebar__footer {
  padding: var(--ak-spacing-lg) var(--ak-spacing-xl);
  border-top: 1px solid var(--ak-border-color);
  font-family: 'Rajdhani', sans-serif;
  font-size: 11px;
  color: var(--ak-text-muted);
  text-align: center;
  letter-spacing: 3px;
}

.playground-main {
  margin-left: 240px;
  flex: 1;
  padding: var(--ak-spacing-xxl) var(--ak-spacing-xxl) var(--ak-spacing-xxl) calc(var(--ak-spacing-xxl) + 240px);
}
</style>
