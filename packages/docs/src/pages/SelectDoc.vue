<template>
  <article class="doc-page">
    <h1>Select 选择器</h1>
    <p class="doc-subtitle">明日方舟风格的下拉选择组件，参考游戏倍速选择器。</p>

    <section>
      <h2>基础用法</h2>
      <div style="max-width: 400px; margin-bottom: 16px;">
        <AkSelect v-model="value" :options="options" placeholder="请选择..." />
      </div>
      <div class="code-block"><pre><code>&lt;AkSelect v-model="value" :options="options" placeholder="请选择..." /&gt;</code></pre></div>
    </section>

    <section>
      <h2>API</h2>
      <table class="api-table">
        <thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
        <tbody>
          <tr><td>v-model</td><td>选中值</td><td><code>string | number</code></td><td>''</td></tr>
          <tr><td>options</td><td>选项数据</td><td><code>SelectOption[]</code></td><td>required</td></tr>
          <tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td>'请选择'</td></tr>
          <tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr>
          <tr><td>size</td><td>尺寸</td><td><code>'sm' | 'md' | 'lg'</code></td><td>'md'</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>SelectOption</h2>
      <table class="api-table">
        <thead><tr><th>字段</th><th>说明</th><th>类型</th></tr></thead>
        <tbody>
          <tr><td>label</td><td>显示文本</td><td><code>string</code></td></tr>
          <tr><td>value</td><td>选项值</td><td><code>string | number</code></td></tr>
          <tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Events</h2>
      <table class="api-table">
        <thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead>
        <tbody>
          <tr><td>update:modelValue</td><td>选中值变化时触发</td><td><code>(value: string | number)</code></td></tr>
          <tr><td>change</td><td>选中值变化时触发</td><td><code>(value: string | number)</code></td></tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const options = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
]
</script>

<style scoped>
.doc-page h1 { font-family: 'Rajdhani', sans-serif; font-size: 32px; font-weight: 700; color: var(--ak-primary-light); letter-spacing: 2px; text-transform: uppercase; margin-bottom: var(--ak-spacing-sm); }
.doc-subtitle { color: var(--ak-text-secondary); margin-bottom: 32px; line-height: 1.6; font-size: 15px; }
.doc-page section { margin-bottom: 32px; }
.doc-page h2 { font-size: 18px; font-weight: 600; color: var(--ak-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--ak-border-color); }
.code-block { background: #1a1a2e; border: 1px solid var(--ak-border-color); border-radius: 4px; padding: 16px; overflow-x: auto; }
.code-block pre { margin: 0; }
.code-block code { font-family: 'Share Tech Mono', 'Fira Code', monospace; font-size: 13px; color: #e8ecf1; line-height: 1.5; }
.api-table { width: 100%; border-collapse: collapse; }
.api-table th { text-align: left; padding: 10px 12px; font-size: 12px; font-weight: 600; color: var(--ak-primary-light); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--ak-border-color); background: var(--ak-bg-panel); }
.api-table td { padding: 10px 12px; font-size: 13px; color: var(--ak-text-regular); border-bottom: 1px solid var(--ak-border-color); }
.api-table code { font-family: 'Share Tech Mono', monospace; font-size: 12px; color: var(--ak-primary-light); background: rgba(0,200,255,0.06); padding: 1px 4px; border-radius: 2px; }
</style>
