<template>
  <article class="doc-page">
    <h1>Table 表格</h1>
    <p class="doc-subtitle">带有明日方舟科技感渐变边框的数据展示表格。</p>

    <section>
      <h2>基础用法</h2>
      <div style="max-width: 700px; margin-bottom: 16px;">
        <AkTable :columns="columns" :data="data" />
      </div>
      <div class="code-block"><pre><code>&lt;AkTable :columns="columns" :data="data" /&gt;</code></pre></div>
    </section>

    <section>
      <h2>API</h2>
      <table class="api-table">
        <thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
        <tbody>
          <tr><td>columns</td><td>列配置</td><td><code>TableColumn[]</code></td><td>required</td></tr>
          <tr><td>data</td><td>表格数据</td><td><code>Record&lt;string, unknown&gt;[]</code></td><td>required</td></tr>
          <tr><td>bordered</td><td>是否带边框</td><td><code>boolean</code></td><td>true</td></tr>
          <tr><td>striped</td><td>斑马纹</td><td><code>boolean</code></td><td>true</td></tr>
          <tr><td>hoverable</td><td>悬浮高亮</td><td><code>boolean</code></td><td>true</td></tr>
          <tr><td>compact</td><td>紧凑模式</td><td><code>boolean</code></td><td>false</td></tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script setup lang="ts">
const columns = [
  { key: 'name', title: '名称' },
  { key: 'class', title: '类型' },
  { key: 'rarity', title: '稀有度', align: 'center' as const },
]
const data = [
  { name: '阿米娅', class: '术师', rarity: '★★★★★' },
  { name: '银灰', class: '近卫', rarity: '★★★★★' },
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
