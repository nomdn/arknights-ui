<template>
  <article class="doc-page">
    <h1>色彩系统</h1>
    <p class="doc-subtitle">Arknights UI 的色彩灵感来源于明日方舟游戏的视觉设计。</p>

    <section>
      <h2>设计理念</h2>
      <p>色彩系统围绕以下原则构建：</p>
      <ul>
        <li><strong>深色基底</strong>：使用 #0B0E17 ~ #1A2035 的深色背景层次，营造沉浸式科技氛围</li>
        <li><strong>青色高亮</strong>：主色调 #00C8FF 取自明日方舟 UI 的标志性颜色，用于强调交互元素</li>
        <li><strong>语义色彩</strong>：danger (#FF4757)、success (#00E676)、warning (#FFB300) 语义明确</li>
        <li><strong>发光效果</strong>：通过 box-shadow 和 text-shadow 的 glow 效果增强科技感</li>
      </ul>
    </section>

    <section>
      <h2>主色阶</h2>
      <div class="color-steps">
        <div v-for="color in primarySteps" :key="color.name" class="color-step">
          <div class="color-step__box" :style="{ background: color.value }"></div>
          <div class="color-step__info">
            <span class="color-step__name">{{ color.name }}</span>
            <span class="color-step__hex">{{ color.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>语义色</h2>
      <div class="color-steps">
        <div v-for="color in semanticColors" :key="color.name" class="color-step">
          <div class="color-step__box" :style="{ background: color.value }"></div>
          <div class="color-step__info">
            <span class="color-step__name">{{ color.name }}</span>
            <span class="color-step__hex">{{ color.value }}</span>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const primarySteps = [
  { name: 'Primary Darkest', value: '#0065B8' },
  { name: 'Primary Dark', value: '#0091EA' },
  { name: 'Primary', value: '#00C8FF' },
  { name: 'Primary Light', value: '#33D6FF' },
  { name: 'Primary Lighter', value: '#80E5FF' },
  { name: 'Primary Lightest', value: '#B3F0FF' },
]

const semanticColors = [
  { name: 'Danger', value: '#FF4757' },
  { name: 'Success', value: '#00E676' },
  { name: 'Warning', value: '#FFB300' },
  { name: 'Info', value: '#7C4DFF' },
]
</script>

<style scoped>
.doc-page h1 { font-family: 'Rajdhani', sans-serif; font-size: 32px; font-weight: 700; color: var(--ak-primary-light); letter-spacing: 2px; text-transform: uppercase; margin-bottom: var(--ak-spacing-sm); }
.doc-subtitle { color: var(--ak-text-secondary); margin-bottom: 32px; line-height: 1.6; font-size: 15px; }
.doc-page section { margin-bottom: 32px; }
.doc-page h2 { font-size: 18px; font-weight: 600; color: var(--ak-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--ak-border-color); }
.doc-page p { color: var(--ak-text-regular); line-height: 1.6; margin-bottom: 12px; }
.doc-page ul { list-style: none; padding: 0; }
.doc-page li { padding: 6px 0 6px 16px; color: var(--ak-text-regular); position: relative; line-height: 1.6; font-size: 14px; }
.doc-page li::before { content: '▸'; position: absolute; left: 0; color: var(--ak-primary); }
.doc-page strong { color: var(--ak-text-primary); }
.color-steps { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
.color-step { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.color-step__box { width: 80px; height: 50px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); }
.color-step__info { text-align: center; }
.color-step__name { display: block; font-size: 11px; color: var(--ak-text-secondary); }
.color-step__hex { display: block; font-family: 'Share Tech Mono', monospace; font-size: 12px; color: var(--ak-text-muted); }
</style>
