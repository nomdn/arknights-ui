<template>
  <article class="doc-page">
    <h1>快速上手</h1>
    <p class="doc-subtitle">Arknights UI 是一套基于 Vue 3 的 UI 组件库，采用明日方舟的科技感视觉风格。</p>

    <section>
      <h2>特性</h2>
      <ul>
        <li>基于 Vue 3 Composition API 和 TypeScript 构建</li>
        <li>采用明日方舟游戏 UI 风格的暗色科技感设计</li>
        <li>完整的 Design Token 系统，支持主题定制</li>
        <li>支持 Tree-shaking，按需引入</li>
        <li>使用 PNPM workspace monorepo 管理</li>
      </ul>
    </section>

    <section>
      <h2>设计风格</h2>
      <p>组件库的设计灵感来源于明日方舟（Arknights）游戏的 UI 界面，融合了以下核心设计元素：</p>
      <ul>
        <li><strong>深色基底</strong>：深邃的暗色背景搭配高对比度的青色（Cyan）主色调</li>
        <li><strong>科技切角</strong>：按钮和卡片采用非对称切角设计，呈现未来科技感</li>
        <li><strong>发光效果</strong>：交互元素带有微妙的辉光（glow）效果</li>
        <li><strong>扫描线纹理</strong>：输入框等组件在聚焦时显示扫描线动画</li>
        <li><strong>角标装饰</strong>：卡片组件带有角落的 L 形装饰线条</li>
      </ul>
    </section>

    <section>
      <h2>技术栈</h2>
      <ul>
        <li>Vue 3.5+ / TypeScript 5.6+</li>
        <li>Vite 6 — 构建工具</li>
        <li>PNPM 8+ — 包管理器与 monorepo workspace</li>
        <li>CSS Custom Properties — Design Token 实现</li>
      </ul>
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
.doc-subtitle {
  color: var(--ak-text-secondary); margin-bottom: 32px; line-height: 1.6; font-size: 15px;
}
.doc-page section { margin-bottom: 32px; }
.doc-page h2 {
  font-size: 18px; font-weight: 600; color: var(--ak-text-primary);
  margin-bottom: 12px; padding-bottom: 8px;
  border-bottom: 1px solid var(--ak-border-color);
}
.doc-page ul { list-style: none; padding: 0; }
.doc-page li {
  padding: 6px 0 6px 16px; color: var(--ak-text-regular);
  position: relative; line-height: 1.6; font-size: 14px;
}
.doc-page li::before {
  content: '▸'; position: absolute; left: 0; color: var(--ak-primary);
}
.doc-page p { color: var(--ak-text-regular); line-height: 1.6; margin-bottom: 12px; }
.doc-page strong { color: var(--ak-text-primary); }
</style>
