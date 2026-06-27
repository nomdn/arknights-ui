<template>
  <div class="demo-page">
    <h1 class="demo-title">Input 输入框</h1>
    <p class="demo-desc">带有明日方舟扫描线效果的数据输入组件。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">基础用法</h2>
      <div class="demo-block" style="max-width: 400px;">
        <AkInput v-model="value1" placeholder="请输入内容..." />
        <p class="demo-value">Value: {{ value1 }}</p>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">可清空</h2>
      <div class="demo-block" style="max-width: 400px;">
        <AkInput v-model="value2" placeholder="可清空输入框" clearable />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">不同尺寸</h2>
      <div class="demo-block" style="max-width: 400px; display: flex; flex-direction: column; gap: 12px;">
        <AkInput size="sm" placeholder="Small" />
        <AkInput size="md" placeholder="Medium" />
        <AkInput size="lg" placeholder="Large" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">禁用状态</h2>
      <div class="demo-block" style="max-width: 400px;">
        <AkInput model-value="禁用状态" disabled />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
</script>

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
.demo-desc { color: var(--ak-text-secondary); margin-bottom: var(--ak-spacing-xxl); line-height: 1.6; }
.demo-section { margin-bottom: var(--ak-spacing-xxl); }
.demo-section__title {
  font-size: 14px; font-weight: 600; color: var(--ak-text-regular);
  text-transform: uppercase; letter-spacing: 1px;
  margin-bottom: var(--ak-spacing-lg); padding-bottom: var(--ak-spacing-sm);
  border-bottom: 1px solid var(--ak-border-color);
}
.demo-block { margin-bottom: var(--ak-spacing-md); }
.demo-value {
  margin-top: var(--ak-spacing-sm);
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  color: var(--ak-text-muted);
}
</style>
