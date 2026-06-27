<template>
  <div :class="classes">
    <div v-if="title || $slots.header" class="ak-card__header">
      <slot name="header">
        <span class="ak-card__title">{{ title }}</span>
        <slot name="extra" />
      </slot>
    </div>
    <div class="ak-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="ak-card__footer">
      <slot name="footer" />
    </div>
    <!-- Corner accents -->
    <div class="ak-card__corner ak-card__corner--tl"></div>
    <div class="ak-card__corner ak-card__corner--br"></div>
  </div>
</template>

<script lang="ts">
export default { name: 'AkCard' }
</script>

<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  title?: string
  bordered?: boolean
  shadow?: boolean
  hoverable?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  title: '',
  bordered: true,
  shadow: true,
  hoverable: false,
})

const classes = computed(() => [
  'ak-card',
  {
    'ak-card--bordered': props.bordered,
    'ak-card--shadow': props.shadow,
    'ak-card--hoverable': props.hoverable,
  },
])
</script>

<style scoped>
.ak-card {
  position: relative;
  background: var(--ak-bg-card);
  overflow: hidden;
  transition: all var(--ak-transition-base);
}

.ak-card--bordered {
  border: 1px solid var(--ak-border-color);
}

.ak-card--shadow {
  box-shadow: var(--ak-shadow-md);
}

.ak-card--hoverable:hover {
  background-color: var(--ak-primary);
  border-color: var(--ak-primary);
}
.ak-card--hoverable:hover .ak-card__title {
  color: var(--ak-text-rev);
}
.ak-card--hoverable:hover .ak-card__body {
  color: #000 !important;
}
.ak-card--hoverable:hover .ak-card__body * {
  color: #000 !important;
}
.ak-card--hoverable:hover .ak-card__corner {
  border-color: var(--ak-text-rev);
}

/* Corner accent decorations */
.ak-card__corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--ak-primary);
  border-style: solid;
  pointer-events: none;
  opacity: 0.6;
}

.ak-card__corner--tl {
  top: 4px;
  left: 4px;
  border-width: 2px 0 0 2px;
}

.ak-card__corner--br {
  bottom: 4px;
  right: 4px;
  border-width: 0 2px 2px 0;
}

.ak-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ak-spacing-lg) var(--ak-spacing-xl);
  border-bottom: 1px solid var(--ak-border-color);
  background: rgba(24, 209, 255, 0.05);
}

.ak-card__title {
  font-size: var(--ak-font-size-md);
  font-weight: var(--ak-font-weight-medium);
  color: var(--ak-text-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ak-card__body {
  padding: var(--ak-spacing-xl);
  color: #fff;
  font-weight: 500;
}

.ak-card__footer {
  padding: var(--ak-spacing-lg) var(--ak-spacing-xl);
  border-top: 1px solid var(--ak-border-color);
  background: rgba(0, 0, 0, 0.15);
}
</style>
