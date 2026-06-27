<template>
  <article class="doc-page">
    <h1>Card 卡片</h1>
    <p class="doc-subtitle">带有明日方舟科技感角标装饰的卡片容器组件。</p>

    <section>
      <h2>基础用法</h2>
      <div style="max-width: 500px; margin-bottom: 16px;">
        <AkCard title="OPERATOR INFO">
          <p style="color: var(--ak-text-regular);">卡片内容区域。</p>
        </AkCard>
      </div>
      <div class="code-block"><pre><code>&lt;AkCard title="OPERATOR INFO"&gt;
  &lt;p&gt;卡片内容区域。&lt;/p&gt;
&lt;/AkCard&gt;</code></pre></div>
    </section>

    <section>
      <h2>Slots</h2>
      <table class="api-table">
        <thead><tr><th>Slot</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>default</td><td>卡片主体内容</td></tr>
          <tr><td>header</td><td>自定义头部（替代 title）</td></tr>
          <tr><td>extra</td><td>头部右侧额外内容</td></tr>
          <tr><td>footer</td><td>底部区域</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>API</h2>
      <table class="api-table">
        <thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
        <tbody>
          <tr><td>title</td><td>卡片标题</td><td><code>string</code></td><td>''</td></tr>
          <tr><td>bordered</td><td>是否显示边框</td><td><code>boolean</code></td><td>true</td></tr>
          <tr><td>shadow</td><td>是否显示阴影</td><td><code>boolean</code></td><td>true</td></tr>
          <tr><td>hoverable</td><td>是否悬浮交互</td><td><code>boolean</code></td><td>false</td></tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

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
