<template>
  <article class="doc-page">
    <h1>Menu 菜单</h1>
    <p class="doc-subtitle">用于导航的菜单组件，支持垂直和水平两种模式。</p>

    <section>
      <h2>垂直菜单</h2>
      <div class="demo-row">
        <div style="width: 220px;">
          <AkMenu v-model="key" title="NAV MENU">
            <AkMenuItem key="home" label="首页" icon="▣" />
            <AkMenuItem key="about" label="关于" icon="◈" />
          </AkMenu>
        </div>
      </div>
    </section>

    <section>
      <h2>API - Menu</h2>
      <table class="api-table">
        <thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
        <tbody>
          <tr><td>modelValue</td><td>当前激活项的 key</td><td><code>string</code></td><td>''</td></tr>
          <tr><td>mode</td><td>菜单模式</td><td><code>'vertical' | 'horizontal'</code></td><td>'vertical'</td></tr>
          <tr><td>collapsed</td><td>是否折叠</td><td><code>boolean</code></td><td>false</td></tr>
          <tr><td>title</td><td>菜单标题</td><td><code>string</code></td><td>''</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>API - MenuItem</h2>
      <table class="api-table">
        <thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
        <tbody>
          <tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>required</td></tr>
          <tr><td>label</td><td>菜单文本</td><td><code>string</code></td><td>''</td></tr>
          <tr><td>icon</td><td>图标 HTML</td><td><code>string</code></td><td>''</td></tr>
          <tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const key = ref('home')
</script>

<style scoped>
.doc-page h1 { font-family: 'Rajdhani', sans-serif; font-size: 32px; font-weight: 700; color: var(--ak-primary-light); letter-spacing: 2px; text-transform: uppercase; margin-bottom: var(--ak-spacing-sm); }
.doc-subtitle { color: var(--ak-text-secondary); margin-bottom: 32px; line-height: 1.6; font-size: 15px; }
.doc-page section { margin-bottom: 32px; }
.doc-page h2 { font-size: 18px; font-weight: 600; color: var(--ak-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--ak-border-color); }
.demo-row { display: flex; gap: 24px; margin-bottom: 16px; }
.api-table { width: 100%; border-collapse: collapse; }
.api-table th { text-align: left; padding: 10px 12px; font-size: 12px; font-weight: 600; color: var(--ak-primary-light); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--ak-border-color); background: var(--ak-bg-panel); }
.api-table td { padding: 10px 12px; font-size: 13px; color: var(--ak-text-regular); border-bottom: 1px solid var(--ak-border-color); }
.api-table code { font-family: 'Share Tech Mono', monospace; font-size: 12px; color: var(--ak-primary-light); background: rgba(0,200,255,0.06); padding: 1px 4px; border-radius: 2px; }
</style>
