<template>
  <div class="demo-page">
    <h1 class="demo-title">Button 按钮</h1>
    <p class="demo-desc">用于触发操作的按钮组件，带有明日方舟风格的切角设计和发光效果。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">基础用法</h2>
      <div class="demo-row">
        <AkButton>Default</AkButton>
        <AkButton variant="primary">Primary</AkButton>
        <AkButton variant="danger">Danger</AkButton>
        <AkButton variant="success">Success</AkButton>
        <AkButton variant="warning">Warning</AkButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">尺寸</h2>
      <div class="demo-row">
        <AkButton size="sm">Small</AkButton>
        <AkButton size="md">Medium</AkButton>
        <AkButton size="lg">Large</AkButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Ghost 幽灵按钮</h2>
      <div class="demo-row">
        <AkButton ghost>Default Ghost</AkButton>
        <AkButton variant="primary" ghost>Primary Ghost</AkButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">状态</h2>
      <div class="demo-row">
        <AkButton disabled>Disabled</AkButton>
        <AkButton variant="primary" loading>Loading</AkButton>
        <AkButton variant="primary" block>Block Button</AkButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.demo-page { max-width: 900px; }
.demo-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--ak-primary-light);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: var(--ak-spacing-sm);
}
.demo-desc {
  color: var(--ak-text-secondary);
  margin-bottom: var(--ak-spacing-xxl);
  line-height: 1.6;
}
.demo-section {
  margin-bottom: var(--ak-spacing-xxl);
}
.demo-section__title {
  font-size: 14px;
  font-weight: 600;
  color: var(--ak-text-regular);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--ak-spacing-lg);
  padding-bottom: var(--ak-spacing-sm);
  border-bottom: 1px solid var(--ak-border-color);
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ak-spacing-md);
  align-items: center;
}
</style>
