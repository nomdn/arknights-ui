<template>
  <div class="demo-page">
    <h1 class="demo-title">Menu 菜单</h1>
    <p class="demo-desc">用于导航的菜单组件，支持垂直和水平两种模式。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">垂直菜单</h2>
      <div class="demo-row">
        <div style="width: 220px;">
          <AkMenu v-model="activeKey" title="MAIN MENU">
            <AkMenuItem key="terminal" label="终端" icon="▣" />
            <AkMenuItem key="operator" label="干员" icon="◈" />
            <AkMenuItem key="recruit" label="公开招募" icon="◇" />
            <AkMenuItem key="mission" label="任务" icon="▸" />
            <AkMenuItem key="base" label="基建" icon="⊤" />
            <AkMenuItem key="depot" label="仓库" icon="□" />
            <AkMenuItem key="settings" label="设置" icon="⚙" disabled />
          </AkMenu>
        </div>
        <p style="color: var(--ak-text-muted); font-family: var(--ak-font-mono); font-size: 13px;">
          Selected: {{ activeKey }}
        </p>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">水平菜单</h2>
      <div>
        <AkMenu v-model="hActiveKey" mode="horizontal">
          <AkMenuItem key="index" label="首页" />
          <AkMenuItem key="info" label="情报" />
          <AkMenuItem key="operator" label="干员" />
          <AkMenuItem key="world" label="设定" />
          <AkMenuItem key="media" label="泰拉万象" />
        </AkMenu>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeKey = ref('terminal')
const hActiveKey = ref('index')
</script>

<style scoped>
.demo-page { max-width: 900px; }
.demo-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 28px; font-weight: 700;
  color: var(--ak-primary-light); letter-spacing: 2px;
  text-transform: uppercase; margin-bottom: var(--ak-spacing-sm);
}
.demo-desc { color: var(--ak-text-secondary); margin-bottom: var(--ak-spacing-xxl); line-height: 1.6; }
.demo-section { margin-bottom: var(--ak-spacing-xxl); }
.demo-section__title {
  font-size: 14px; font-weight: 600; color: var(--ak-text-regular);
  text-transform: uppercase; letter-spacing: 1px;
  margin-bottom: var(--ak-spacing-lg); padding-bottom: var(--ak-spacing-sm);
  border-bottom: 1px solid var(--ak-border-color);
}
.demo-row { display: flex; align-items: flex-start; gap: var(--ak-spacing-xl); }
</style>
