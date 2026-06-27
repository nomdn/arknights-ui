<template>
  <article class="doc-page">
    <h1>Design Tokens</h1>
    <p class="doc-subtitle">Arknights UI 的设计令牌系统，使用 CSS Custom Properties 实现。</p>

    <section>
      <h2>颜色变量</h2>
      <table class="api-table">
        <thead><tr><th>变量名</th><th>用途</th><th>值</th></tr></thead>
        <tbody>
          <tr><td><code>--ak-primary</code></td><td>主色调</td><td><span class="color-swatch" style="background:#00C8FF"></span> #00C8FF</td></tr>
          <tr><td><code>--ak-primary-light</code></td><td>主色调（亮）</td><td><span class="color-swatch" style="background:#33D6FF"></span> #33D6FF</td></tr>
          <tr><td><code>--ak-danger</code></td><td>危险色</td><td><span class="color-swatch" style="background:#FF4757"></span> #FF4757</td></tr>
          <tr><td><code>--ak-success</code></td><td>成功色</td><td><span class="color-swatch" style="background:#00E676"></span> #00E676</td></tr>
          <tr><td><code>--ak-warning</code></td><td>警告色</td><td><span class="color-swatch" style="background:#FFB300"></span> #FFB300</td></tr>
          <tr><td><code>--ak-bg-base</code></td><td>页面背景</td><td><span class="color-swatch" style="background:#0B0E17"></span> #0B0E17</td></tr>
          <tr><td><code>--ak-bg-panel</code></td><td>面板背景</td><td><span class="color-swatch" style="background:#111827"></span> #111827</td></tr>
          <tr><td><code>--ak-bg-card</code></td><td>卡片背景</td><td><span class="color-swatch" style="background:#1A2035"></span> #1A2035</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>字体</h2>
      <table class="api-table">
        <thead><tr><th>变量名</th><th>用途</th><th>值</th></tr></thead>
        <tbody>
          <tr><td><code>--ak-font-family</code></td><td>主字体</td><td>Rajdhani, Noto Sans SC, sans-serif</td></tr>
          <tr><td><code>--ak-font-mono</code></td><td>等宽字体</td><td>Share Tech Mono, Fira Code, monospace</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>间距</h2>
      <p>间距系统从 4px 到 32px，遵循 4px 基准网格。</p>
      <table class="api-table">
        <thead><tr><th>Token</th><th>值</th></tr></thead>
        <tbody>
          <tr><td><code>--ak-spacing-xs</code></td><td>4px</td></tr>
          <tr><td><code>--ak-spacing-sm</code></td><td>8px</td></tr>
          <tr><td><code>--ak-spacing-md</code></td><td>12px</td></tr>
          <tr><td><code>--ak-spacing-lg</code></td><td>16px</td></tr>
          <tr><td><code>--ak-spacing-xl</code></td><td>24px</td></tr>
          <tr><td><code>--ak-spacing-xxl</code></td><td>32px</td></tr>
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
.doc-page p { color: var(--ak-text-regular); line-height: 1.6; margin-bottom: 12px; }
.api-table { width: 100%; border-collapse: collapse; }
.api-table th { text-align: left; padding: 10px 12px; font-size: 12px; font-weight: 600; color: var(--ak-primary-light); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--ak-border-color); background: var(--ak-bg-panel); }
.api-table td { padding: 10px 12px; font-size: 13px; color: var(--ak-text-regular); border-bottom: 1px solid var(--ak-border-color); }
.api-table code { font-family: 'Share Tech Mono', monospace; font-size: 12px; color: var(--ak-primary-light); background: rgba(0,200,255,0.06); padding: 1px 4px; border-radius: 2px; }
.color-swatch { display: inline-block; width: 16px; height: 16px; border-radius: 3px; vertical-align: middle; margin-right: 6px; border: 1px solid rgba(255,255,255,0.1); }
</style>
