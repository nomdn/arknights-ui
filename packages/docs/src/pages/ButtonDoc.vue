<template>
  <article class="doc-page">
    <h1>Button 按钮</h1>
    <p class="doc-subtitle">用于触发操作的按钮组件，带有明日方舟风格的切角设计和发光效果。</p>

    <section>
      <h2>基础用法</h2>
      <div class="demo-row">
        <AkButton>Default</AkButton>
        <AkButton variant="primary">Primary</AkButton>
        <AkButton variant="danger">Danger</AkButton>
        <AkButton variant="success">Success</AkButton>
        <AkButton variant="warning">Warning</AkButton>
      </div>
      <div class="code-block"><pre><code>&lt;AkButton&gt;Default&lt;/AkButton&gt;
&lt;AkButton variant="primary"&gt;Primary&lt;/AkButton&gt;
&lt;AkButton variant="danger"&gt;Danger&lt;/AkButton&gt;</code></pre></div>
    </section>

    <section>
      <h2>尺寸</h2>
      <div class="demo-row">
        <AkButton size="sm">Small</AkButton>
        <AkButton size="md">Medium</AkButton>
        <AkButton size="lg">Large</AkButton>
      </div>
    </section>

    <section>
      <h2>API</h2>
      <table class="api-table">
        <thead>
          <tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
        </thead>
        <tbody>
          <tr><td>variant</td><td>按钮变体</td><td><code>'default' | 'primary' | 'danger' | 'success' | 'warning'</code></td><td>'default'</td></tr>
          <tr><td>size</td><td>按钮尺寸</td><td><code>'sm' | 'md' | 'lg'</code></td><td>'md'</td></tr>
          <tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr>
          <tr><td>loading</td><td>是否加载中</td><td><code>boolean</code></td><td>false</td></tr>
          <tr><td>block</td><td>是否撑满父容器</td><td><code>boolean</code></td><td>false</td></tr>
          <tr><td>ghost</td><td>幽灵按钮样式</td><td><code>boolean</code></td><td>false</td></tr>
          <tr><td>htmlType</td><td>原生 type 属性</td><td><code>'button' | 'submit' | 'reset'</code></td><td>'button'</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Events</h2>
      <table class="api-table">
        <thead>
          <tr><th>事件名</th><th>说明</th><th>回调参数</th></tr>
        </thead>
        <tbody>
          <tr><td>click</td><td>点击事件</td><td><code>(event: MouseEvent)</code></td></tr>
        </tbody>
      </table>
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
.demo-row { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; align-items: center; }
.code-block {
  background: #1a1a2e; border: 1px solid var(--ak-border-color);
  border-radius: 4px; padding: 16px; overflow-x: auto;
}
.code-block pre { margin: 0; }
.code-block code {
  font-family: 'Share Tech Mono', 'Fira Code', monospace;
  font-size: 13px; color: #e8ecf1; line-height: 1.5;
}
.api-table {
  width: 100%; border-collapse: collapse;
}
.api-table th {
  text-align: left; padding: 10px 12px; font-size: 12px;
  font-weight: 600; color: var(--ak-primary-light);
  text-transform: uppercase; letter-spacing: 1px;
  border-bottom: 1px solid var(--ak-border-color);
  background: var(--ak-bg-panel);
}
.api-table td {
  padding: 10px 12px; font-size: 13px; color: var(--ak-text-regular);
  border-bottom: 1px solid var(--ak-border-color);
}
.api-table code {
  font-family: 'Share Tech Mono', monospace; font-size: 12px;
  color: var(--ak-primary-light); background: rgba(0,200,255,0.06);
  padding: 1px 4px; border-radius: 2px;
}
</style>
