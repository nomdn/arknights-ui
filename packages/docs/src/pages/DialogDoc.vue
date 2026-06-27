<template>
  <article class="doc-page">
    <h1>Dialog 对话框</h1>
    <p class="doc-subtitle">模态对话框组件，用于需要用户确认或输入信息的场景。</p>

    <section>
      <h2>基础用法</h2>
      <div class="demo-row">
        <AkButton variant="primary" @click="visible = true">打开对话框</AkButton>
        <AkDialog v-model:visible="visible" title="DIALOG">
          <p>这是一个对话框。</p>
          <template #footer>
            <AkButton @click="visible = false">取消</AkButton>
            <AkButton variant="primary" @click="visible = false">确认</AkButton>
          </template>
        </AkDialog>
      </div>
    </section>

    <section>
      <h2>API</h2>
      <table class="api-table">
        <thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
        <tbody>
          <tr><td>v-model:visible</td><td>是否显示</td><td><code>boolean</code></td><td>false</td></tr>
          <tr><td>title</td><td>标题</td><td><code>string</code></td><td>''</td></tr>
          <tr><td>width</td><td>宽度</td><td><code>string</code></td><td>'520px'</td></tr>
          <tr><td>closeOnOverlay</td><td>点击遮罩关闭</td><td><code>boolean</code></td><td>true</td></tr>
          <tr><td>showClose</td><td>显示关闭按钮</td><td><code>boolean</code></td><td>true</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Slots</h2>
      <table class="api-table">
        <thead><tr><th>Slot</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>default</td><td>对话框内容</td></tr>
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
