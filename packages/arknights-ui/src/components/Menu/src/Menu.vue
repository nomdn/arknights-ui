<template>
  <div :class="wrapperClasses" role="menu">
    <div v-if="title" class="ak-menu__title">{{ title }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
export default { name: 'AkMenu' }
</script>

<script setup lang="ts">
import { provide, ref, computed } from 'vue'
import type { WritableComputedRef } from 'vue'

export interface MenuProps {
  mode?: 'vertical' | 'horizontal'
  collapsed?: boolean
  title?: string
  modelValue?: string
}

const props = withDefaults(defineProps<MenuProps>(), {
  mode: 'vertical',
  collapsed: false,
  title: '',
  modelValue: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  select: [key: string]
}>()

const activeKey = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v),
})

provide('menuMode', props.mode)
provide('menuCollapsed', props.collapsed)
provide('activeKey', activeKey)

function handleSelect(key: string) {
  activeKey.value = key
  emit('select', key)
}

provide('handleMenuSelect', handleSelect)

const wrapperClasses = computed(() => [
  'ak-menu',
  `ak-menu--${props.mode}`,
  {
    'ak-menu--collapsed': props.collapsed,
  },
])
</script>

<style scoped>
.ak-menu {
  font-family: var(--ak-font-family);
}

.ak-menu--vertical {
  display: flex;
  flex-direction: column;
  width: 220px;
  background: var(--ak-bg-panel);
  border-right: 1px solid var(--ak-border-color);
  padding: var(--ak-spacing-sm) 0;
}

.ak-menu--vertical.ak-menu--collapsed {
  width: 60px;
}

.ak-menu--horizontal {
  display: flex;
  align-items: center;
  height: 48px;
  background: var(--ak-bg-panel);
  border-bottom: 1px solid var(--ak-border-color);
  padding: 0 var(--ak-spacing-md);
  gap: 2px;
}

.ak-menu__title {
  padding: var(--ak-spacing-md) var(--ak-spacing-lg);
  font-size: var(--ak-font-size-xs);
  font-weight: var(--ak-font-weight-medium);
  color: var(--ak-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--ak-border-color);
  margin-bottom: var(--ak-spacing-xs);
}
</style>
