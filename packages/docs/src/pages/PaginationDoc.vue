<template>
  <article class="doc-page">
    <h1>Pagination 分页</h1>
    <p class="doc-subtitle">基于 hexo-theme-arknights 风格的分页器组件，支持页码折叠和省略号显示。</p>

    <section>
      <h2>基础用法</h2>
      <div style="margin-bottom: 16px;">
        <AkPagination
          v-model:current-page="page1"
          :total="50"
          :page-size="10"
        />
      </div>
      <p style="color: var(--ak-text-muted); font-family: var(--ak-font-mono); font-size: 12px;">
        当前页: {{ page1 }}
      </p>
      <div class="code-block"><pre><code>&lt;AkPagination
  v-model:current-page="page"
  :total="50"
  :page-size="10"
/&gt;</code></pre></div>
    </section>

    <section>
      <h2>大量页码</h2>
      <div style="margin-bottom: 16px;">
        <AkPagination
          v-model:current-page="page2"
          :total="200"
          :page-size="10"
        />
      </div>
      <p style="color: var(--ak-text-muted); font-family: var(--ak-font-mono); font-size: 12px;">
        当前页: {{ page2 }}
      </p>
    </section>

    <section>
      <h2>API</h2>
      <table class="api-table">
        <thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
        <tbody>
          <tr><td>total</td><td>总条目数</td><td><code>number</code></td><td>0</td></tr>
          <tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td>10</td></tr>
          <tr><td>currentPage</td><td>当前页码（支持 v-model）</td><td><code>number</code></td><td>1</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Events</h2>
      <table class="api-table">
        <thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead>
        <tbody>
          <tr><td>update:currentPage</td><td>页码变化时触发</td><td><code>(page: number)</code></td></tr>
          <tr><td>change</td><td>页码变化时触发</td><td><code>(page: number)</code></td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>设计说明</h2>
      <p>
        分页器样式参考 hexo-theme-arknights 的 <code>#paginator</code> 设计：
        白色文字 + 主题蓝边框，激活页码背景反转为蓝色、文字变为黑色。
        页码超过 7 页时自动折叠中间页码，以省略号显示。
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const page1 = ref(3)
const page2 = ref(8)
</script>

<style scoped>
.doc-page h1 { font-family: 'Rajdhani', sans-serif; font-size: 32px; font-weight: 700; color: var(--ak-primary-light); letter-spacing: 2px; text-transform: uppercase; margin-bottom: var(--ak-spacing-sm); }
.doc-subtitle { color: var(--ak-text-secondary); margin-bottom: 32px; line-height: 1.6; font-size: 15px; }
.doc-page section { margin-bottom: 32px; }
.doc-page h2 { font-size: 18px; font-weight: 600; color: var(--ak-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--ak-border-color); }
.doc-page p { color: var(--ak-text-regular); line-height: 1.6; margin-bottom: 12px; }
.doc-page code { font-family: 'Share Tech Mono', monospace; font-size: 13px; color: var(--ak-primary-light); background: rgba(0,200,255,0.06); padding: 1px 4px; border-radius: 2px; }
.code-block { background: #1a1a2e; border: 1px solid var(--ak-border-color); border-radius: 4px; padding: 16px; overflow-x: auto; }
.code-block pre { margin: 0; }
.code-block code { font-family: 'Share Tech Mono', 'Fira Code', monospace; font-size: 13px; color: #e8ecf1; line-height: 1.5; background: none; padding: 0; }
.api-table { width: 100%; border-collapse: collapse; }
.api-table th { text-align: left; padding: 10px 12px; font-size: 12px; font-weight: 600; color: var(--ak-primary-light); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--ak-border-color); background: var(--ak-bg-panel); }
.api-table td { padding: 10px 12px; font-size: 13px; color: var(--ak-text-regular); border-bottom: 1px solid var(--ak-border-color); }
.api-table code { font-family: 'Share Tech Mono', monospace; font-size: 12px; color: var(--ak-primary-light); background: rgba(0,200,255,0.06); padding: 1px 4px; border-radius: 2px; }
</style>
