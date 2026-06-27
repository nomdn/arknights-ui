<template>
  <div
    :class="classes"
    role="menuitem"
    :tabindex="disabled ? -1 : 0"
    @click="handleClick"
    @keydown.enter="handleClick"
  >
    <span v-if="icon" class="ak-menu-item__icon" v-html="icon"></span>
    <span v-if="!collapsed" class="ak-menu-item__label">{{ label }}</span>
    <div class="ak-menu-item__indicator"></div>
  </div>
</template>

<script lang="ts">
export default { name: 'AkMenuItem' }
</script>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'

export interface MenuItemProps {
  key: string
  label?: string
  icon?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<MenuItemProps>(), {
  label: '',
  icon: '',
  disabled: false,
})

const mode = inject<string>('menuMode', 'vertical')
const collapsed = inject<boolean>('menuCollapsed', false)
const activeKey = inject<Ref<string>>('activeKey')
const handleMenuSelect = inject<(key: string) => void>('handleMenuSelect')

const classes = computed(() => [
  'ak-menu-item',
  `ak-menu-item--${mode}`,
  {
    'ak-menu-item--active': activeKey?.value === props.key,
    'ak-menu-item--disabled': props.disabled,
  },
])

function handleClick() {
  if (props.disabled) return
  handleMenuSelect?.(props.key)
}
</script>

<style scoped>
.ak-menu-item {
  display: flex;
  align-items: center;
  gap: var(--ak-spacing-md);
  cursor: pointer;
  transition: all var(--ak-transition-fast);
  position: relative;
  user-select: none;
}

/* Vertical */
.ak-menu-item--vertical {
  padding: var(--ak-spacing-md) var(--ak-spacing-lg);
  margin: 1px var(--ak-spacing-sm);
  color: var(--ak-text-regular);
}

.ak-menu-item--vertical.ak-menu-item--active {
  background: rgba(24, 209, 255, 0.1);
  color: var(--ak-primary-light);
}

.ak-menu-item--vertical.ak-menu-item--active .ak-menu-item__indicator {
  position: absolute;
  left: 0;
  top: 25%;
  bottom: 25%;
  width: 3px;
  background: var(--ak-primary);
  box-shadow: 0 0 8px var(--ak-primary);
  border-radius: 0;
}

.ak-menu-item--vertical:hover:not(.ak-menu-item--active):not(.ak-menu-item--disabled) {
  background: var(--ak-bg-card-hover);
  color: var(--ak-text-primary);
}

/* Horizontal */
.ak-menu-item--horizontal {
  padding: var(--ak-spacing-sm) var(--ak-spacing-lg);
  color: var(--ak-text-regular);
  font-size: var(--ak-font-size-sm);
}

.ak-menu-item--horizontal.ak-menu-item--active {
  color: var(--ak-primary-light);
}

.ak-menu-item--horizontal.ak-menu-item--active .ak-menu-item__indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: var(--ak-primary);
}

.ak-menu-item--horizontal:hover:not(.ak-menu-item--active):not(.ak-menu-item--disabled) {
  background: var(--ak-bg-card-hover);
  color: var(--ak-text-primary);
}

/* Icon */
.ak-menu-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  flex-shrink: 0;
  font-size: var(--ak-font-size-md);
}

.ak-menu-item__label {
  flex: 1;
  font-size: var(--ak-font-size-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Disabled */
.ak-menu-item--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
