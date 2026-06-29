<template>
  <div class="demo-page">
    <h1 class="demo-title">Switch 开关</h1>
    <p class="demo-desc">明日方舟风格的矩形开关组件，无圆角、纯平面设计。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">基础用法</h2>
      <div class="demo-block">
        <AkSwitch v-model="value1" />
        <p class="demo-value">State: {{ value1 ? 'ON' : 'OFF' }}</p>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">自定义文本</h2>
      <div class="demo-block">
        <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
          <AkSwitch v-model="value2" active-text="是" inactive-text="否" />
          <AkSwitch v-model="value2" active-text="ON" inactive-text="OFF" />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">不同尺寸</h2>
      <div class="demo-block">
        <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
          <AkSwitch v-model="value3" size="sm" />
          <AkSwitch v-model="value3" size="md" />
          <AkSwitch v-model="value3" size="lg" />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">禁用状态</h2>
      <div class="demo-block">
        <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
          <AkSwitch :model-value="true" disabled />
          <AkSwitch :model-value="false" disabled />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
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
