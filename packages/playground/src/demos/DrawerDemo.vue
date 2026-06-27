<template>
  <div class="demo-page">
    <h1 class="demo-title">Drawer 抽屉</h1>
    <p class="demo-desc">从屏幕边缘滑出的浮层面板组件。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">右侧抽屉</h2>
      <div class="demo-row">
        <AkButton variant="primary" @click="showDrawer1 = true">打开右侧抽屉</AkButton>
        <AkDrawer
          v-model:visible="showDrawer1"
          title="OPERATOR DETAILS"
          placement="right"
        >
          <p style="color: var(--ak-text-regular); margin-bottom: 12px;">
            干员代号：阿米娅
          </p>
          <p style="color: var(--ak-text-regular); margin-bottom: 12px;">
            职业：术师
          </p>
          <p style="color: var(--ak-text-regular); margin-bottom: 12px;">
            稀有度：★★★★★
          </p>
          <p style="color: var(--ak-text-secondary);">
            罗德岛的领袖之一，性格温和但意志坚定。
            在战场上展现出卓越的指挥能力。
          </p>
          <template #footer>
            <AkButton @click="showDrawer1 = false">关闭</AkButton>
            <AkButton variant="primary">确认</AkButton>
          </template>
        </AkDrawer>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">左侧抽屉</h2>
      <div class="demo-row">
        <AkButton @click="showDrawer2 = true">打开左侧抽屉</AkButton>
        <AkDrawer
          v-model:visible="showDrawer2"
          title="ARCHIVES"
          placement="left"
        >
          <p style="color: var(--ak-text-regular);">
            罗德岛档案系统。在这里可以查阅所有干员、敌人、和事件的详细记录。
          </p>
        </AkDrawer>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showDrawer1 = ref(false)
const showDrawer2 = ref(false)
</script>

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
.demo-row { display: flex; flex-wrap: wrap; gap: var(--ak-spacing-md); align-items: center; }
</style>
