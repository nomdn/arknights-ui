<template>
  <div class="demo-page">
    <h1 class="demo-title">Pagination 分页</h1>
    <p class="demo-desc">基于 hexo-theme-arknights 风格的分页器组件，带有明日方舟主题蓝色边框和激活反转效果。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">基础用法</h2>
      <div class="demo-row">
        <AkPagination
          v-model:current-page="page1"
          :total="50"
          :page-size="10"
        />
      </div>
      <p class="demo-value">Current: {{ page1 }}</p>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">每页 5 条</h2>
      <div class="demo-row">
        <AkPagination
          v-model:current-page="page2"
          :total="50"
          :page-size="5"
        />
      </div>
      <p class="demo-value">Current: {{ page2 }}</p>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">大量页码</h2>
      <div class="demo-row">
        <AkPagination
          v-model:current-page="page3"
          :total="200"
          :page-size="10"
        />
      </div>
      <p class="demo-value">Current: {{ page3 }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const page1 = ref(1)
const page2 = ref(3)
const page3 = ref(5)
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
.demo-value {
  margin-top: var(--ak-spacing-sm);
  font-family: var(--ak-font-mono);
  font-size: 12px;
  color: var(--ak-text-muted);
}
</style>
