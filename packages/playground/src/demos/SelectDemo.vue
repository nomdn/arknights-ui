<template>
  <div class="demo-page">
    <h1 class="demo-title">Select 选择器</h1>
    <p class="demo-desc">明日方舟风格的下拉选择组件，参考游戏倍速选择器。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">基础用法</h2>
      <div class="demo-block" style="max-width: 400px;">
        <AkSelect v-model="value1" :options="basicOptions" placeholder="请选择..." />
        <p class="demo-value">Value: {{ value1 }}</p>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">倍速选择</h2>
      <div class="demo-block" style="max-width: 400px;">
        <AkSelect v-model="value2" :options="speedOptions" />
        <p class="demo-value">Speed: {{ value2 }}</p>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">不同尺寸</h2>
      <div class="demo-block" style="max-width: 400px; display: flex; flex-direction: column; gap: 12px;">
        <AkSelect v-model="value3" :options="basicOptions" size="sm" />
        <AkSelect v-model="value3" :options="basicOptions" size="md" />
        <AkSelect v-model="value3" :options="basicOptions" size="lg" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">禁用选项</h2>
      <div class="demo-block" style="max-width: 400px;">
        <AkSelect v-model="value4" :options="disabledOptions" placeholder="请选择..." />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">禁用状态</h2>
      <div class="demo-block" style="max-width: 400px;">
        <AkSelect model-value="disabled" :options="basicOptions" disabled />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('×1')
const value3 = ref('')
const value4 = ref('')

const basicOptions = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
  { label: '选项 D', value: 'd' },
]

const speedOptions = [
  { label: '×1', value: '×1' },
  { label: '×2', value: '×2' },
  { label: '×3', value: '×3' },
  { label: '×4', value: '×4' },
  { label: '×5', value: '×5' },
  { label: '×6', value: '×6' },
]

const disabledOptions = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B（禁用）', value: 'b', disabled: true },
  { label: '选项 C', value: 'c' },
]
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
