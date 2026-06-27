<template>
  <article class="doc-page">
    <h1>安装</h1>
    <p class="doc-subtitle">通过以下步骤在项目中使用 Arknights UI。</p>

    <section>
      <h2>使用 PNPM 安装</h2>
      <div class="code-block"><pre><code>pnpm add @arknights-ui/arknights-ui</code></pre></div>
    </section>

    <section>
      <h2>全局引入</h2>
      <div class="code-block"><pre><code>import { createApp } from 'vue'
import ArknightsUI from '@arknights-ui/arknights-ui'
import '@arknights-ui/arknights-ui/styles'

const app = createApp(App)
app.use(ArknightsUI)
app.mount('#app')</code></pre></div>
    </section>

    <section>
      <h2>按需引入</h2>
      <div class="code-block"><pre><code>import { Button, Input, Card } from '@arknights-ui/arknights-ui'
import '@arknights-ui/arknights-ui/styles'</code></pre></div>
      <p>推荐配合 <code>unplugin-vue-components</code> 实现自动按需引入。</p>
    </section>

    <section>
      <h2>字体引入</h2>
      <p>在 HTML 的 <code>&lt;head&gt;</code> 中添加 Google Fonts 链接以获得最佳效果：</p>
      <div class="code-block"><pre><code>&lt;link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&amp;family=Share+Tech+Mono&amp;display=swap" rel="stylesheet"&gt;</code></pre></div>
    </section>
  </article>
</template>

<style scoped>
.doc-page h1 {
  font-family: 'Rajdhani', sans-serif;
  font-size: 32px; font-weight: 700;
  color: var(--ak-primary-light); letter-spacing: 2px;
  text-transform: uppercase; margin-bottom: var(--ak-spacing-sm);
}
.doc-subtitle { color: var(--ak-text-secondary); margin-bottom: 32px; line-height: 1.6; font-size: 15px; }
.doc-page section { margin-bottom: 32px; }
.doc-page h2 {
  font-size: 18px; font-weight: 600; color: var(--ak-text-primary);
  margin-bottom: 12px; padding-bottom: 8px;
  border-bottom: 1px solid var(--ak-border-color);
}
.code-block {
  background: #1a1a2e; border: 1px solid var(--ak-border-color);
  border-radius: 4px; padding: 16px; overflow-x: auto;
}
.code-block pre { margin: 0; }
.code-block code {
  font-family: 'Share Tech Mono', 'Fira Code', monospace;
  font-size: 13px; color: #e8ecf1; line-height: 1.5;
}
.doc-page p { color: var(--ak-text-regular); line-height: 1.6; margin-bottom: 12px; }
.doc-page code {
  font-family: 'Share Tech Mono', monospace;
  font-size: 13px; color: var(--ak-primary-light);
  background: rgba(0, 200, 255, 0.08);
  padding: 2px 6px; border-radius: 3px;
}
</style>
