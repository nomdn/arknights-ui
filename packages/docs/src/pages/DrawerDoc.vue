<template>
  <article class="doc-page">
    <h1>Drawer 抽屉</h1>
    <p class="doc-subtitle">从屏幕边缘滑出的浮层面板组件。</p>

    <section>
      <h2>基础用法</h2>
      <div class="demo-row">
        <AkButton variant="primary" @click="visible = true">打开抽屉</AkButton>
        <AkDrawer v-model:visible="visible" title="DRAWER" placement="right">
          <p style="color: var(--ak-text-regular);">抽屉内容。</p>
          <template #footer>
            <AkButton @click="visible = false">关闭</AkButton>
            <AkButton variant="primary">确认</AkButton>
          </template>
        </AkDrawer>
      </div>
    </section>

    <section>
      <h2>API</h2>
      <table class="api-table">
        <thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
        <tbody>
          <tr><td>v-model:visible</td><td>是否显示</td><td><code>boolean</code></td><td>false</td></tr>
          <tr><td>placement</td><td>方向</td><td><code>'left' | 'right' | 'top' | 'bottom'</code></td><td>'right'</td></tr>
          <tr><td>title</td><td>标题</td><td><code>string</code></td><td>''</td></tr>
          <tr><td>size</td><td>尺寸</td><td><code>string</code></td><td>'360px'</td></tr>
          <tr><td>closeOnOverlay</td><td>点击遮罩关闭</td><td><code>boolean</code></td><td>true</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Slots</h2>
      <table class="api-table">
        <thead><tr><th>Slot</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>default</td><td>抽屉内容</td></tr>
          <tr><td>footer</td><td>底部操作区</td></tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>

<style scoped>
.doc-page h1 { font-family: 'Rajdhani', sans-serif; font-size: 32px; font-weight: 700; color: var(--ak-primary-light); letter-spacing: 2px; text-transform: uppercase; margin-bottom: var(--ak-spacing-sm); }
.doc-subtitle { color: var(--ak-text-secondary); margin-bottom: 32px; line-height: 1.6; font-size: 15px; }
.doc-page section { margin-bottom: 32px; }
.doc-page h2 { font-size: 18px; font-weight: 600; color: var(--ak-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--ak-border-color); }
.demo-row { display: flex; gap: 12px; margin-bottom: 16px; }
.api-table { width: 100%; border-collapse: collapse; }
.api-table th { text-align: left; padding: 10px 12px; font-size: 12px; font-weight: 600; color: var(--ak-primary-light); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--ak-border-color); background: var(--ak-bg-panel); }
.api-table td { padding: 10px 12px; font-size: 13px; color: var(--ak-text-regular); border-bottom: 1px solid var(--ak-border-color); }
.api-table code { font-family: 'Share Tech Mono', monospace; font-size: 12px; color: var(--ak-primary-light); background: rgba(0,200,255,0.06); padding: 1px 4px; border-radius: 2px; }
</style>
