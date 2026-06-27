<template>
  <div class="demo-page">
    <h1 class="demo-title">Table 表格</h1>
    <p class="demo-desc">带有明日方舟科技感渐变边框的数据展示表格。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">基础用法</h2>
      <div style="max-width: 700px;">
        <AkTable :columns="columns" :data="tableData" />
      </div>
    </section>



    <section class="demo-section">
      <h2 class="demo-section__title">空状态</h2>
      <div style="max-width: 700px;">
        <AkTable :columns="columns" :data="[]" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const columns = [
  { key: 'name', title: '干员名称' },
  { key: 'class', title: '职业' },
  { key: 'rarity', title: '稀有度', align: 'center' as const },
  { key: 'level', title: '等级', align: 'center' as const },
]

const tableData = reactive([
  { name: '阿米娅', class: '术师', rarity: '★★★★★', level: 'Lv.80' },
  { name: '银灰', class: '近卫', rarity: '★★★★★', level: 'Lv.80' },
  { name: '能天使', class: '狙击', rarity: '★★★★★★', level: 'Lv.70' },
  { name: '星熊', class: '重装', rarity: '★★★★★★', level: 'Lv.60' },
  { name: '波登可', class: '辅助', rarity: '★★★★', level: 'Lv.50' },
])
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
</style>
