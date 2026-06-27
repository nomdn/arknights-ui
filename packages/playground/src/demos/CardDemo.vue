<template>
  <div class="demo-page">
    <h1 class="demo-title">Card 卡片</h1>
    <p class="demo-desc">带有明日方舟科技感角标装饰的卡片容器组件。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">基础卡片</h2>
      <div class="demo-row" style="max-width: 500px;">
        <AkCard title="OPERATOR INFO">
          <p style="color: var(--ak-text-regular);">
            干员信息面板。罗德岛是一家为感染矿石病的人们提供救治与庇护的医疗机构的公开名称，
            同时也是一艘移动城市的名称。
          </p>
        </AkCard>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">带 Header 和 Footer</h2>
      <div class="demo-row" style="max-width: 500px;">
        <AkCard title="SYSTEM LOG">
          <template #extra>
            <AkButton size="sm" variant="primary">刷新</AkButton>
          </template>
          <p style="color: var(--ak-text-regular); margin-bottom: 8px;">
            系统运行正常
          </p>
          <p style="font-family: var(--ak-font-mono); font-size: 12px; color: var(--ak-text-muted);">
            [2026-06-27 14:49:22] All systems operational.
          </p>
          <template #footer>
            <AkButton size="sm">关闭</AkButton>
          </template>
        </AkCard>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">悬浮交互</h2>
      <div class="demo-row">
        <AkCard hoverable title="RHODES ISLAND" style="max-width: 240px;">
          <p style="color: var(--ak-text-regular);">悬浮查看效果</p>
        </AkCard>
        <AkCard hoverable title="PENGUIN LOGISTICS" style="max-width: 240px;">
          <p style="color: var(--ak-text-regular);">龙门近卫局</p>
        </AkCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.demo-page { max-width: 900px; }
.demo-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 28px; font-weight: 700;
  color: var(--ak-primary-light); letter-spacing: 2px;
  text-transform: uppercase; margin-bottom: var(--ak-spacing-sm);
}
.demo-desc { color: var(--ak-text-secondary); margin-bottom: var(--ak-spacing-xxl); line-height: 1.6; }
.demo-section { margin-bottom: var(--ak-spacing-xxl); }
.demo-section__title {
  font-size: 14px; font-weight: 600; color: var(--ak-text-regular);
  text-transform: uppercase; letter-spacing: 1px;
  margin-bottom: var(--ak-spacing-lg); padding-bottom: var(--ak-spacing-sm);
  border-bottom: 1px solid var(--ak-border-color);
}
.demo-row { display: flex; flex-wrap: wrap; gap: var(--ak-spacing-lg); }
</style>
