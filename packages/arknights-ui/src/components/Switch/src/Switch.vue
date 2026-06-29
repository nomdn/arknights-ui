<template>
  <div
    :class="classes"
    role="switch"
    :aria-checked="modelValue"
    :aria-disabled="disabled"
    @click="handleToggle"
  >
    <span class="ak-switch__track">
      <span class="ak-switch__label ak-switch__label--active">{{ activeText }}</span>
      <span class="ak-switch__label ak-switch__label--inactive">{{ inactiveText }}</span>
      <span class="ak-switch__thumb"></span>
    </span>
  </div>
</template>

<script lang="ts">
export default { name: 'AkSwitch' }
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { sizeClassMap, type SizeType } from '../../../utils/props'

export interface SwitchProps {
  modelValue?: boolean
  disabled?: boolean
  activeText?: string
  inactiveText?: string
  size?: SizeType
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  activeText: '开启',
  inactiveText: '关闭',
  size: 'md',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const classes = computed(() => [
  'ak-switch',
  sizeClassMap[props.size],
  {
    'ak-switch--active': props.modelValue,
    'ak-switch--disabled': props.disabled,
  },
])

function handleToggle() {
  if (props.disabled) return
  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<style scoped>
.ak-switch {
  display: inline-flex;
  cursor: pointer;
  user-select: none;
}

.ak-switch--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Track */
.ak-switch__track {
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: var(--ak-component-size-md);
  min-width: calc(var(--ak-component-size-md) * 2.4);
  padding: 0 var(--ak-spacing-xs);
  background: var(--ak-bg-panel);
  border: 1px solid var(--ak-border-color);
  transition: background var(--ak-transition-base), border-color var(--ak-transition-base);
}

.ak-size-sm .ak-switch__track {
  height: var(--ak-component-size-sm);
  min-width: calc(var(--ak-component-size-sm) * 2.5);
}

.ak-size-lg .ak-switch__track {
  height: var(--ak-component-size-lg);
  min-width: calc(var(--ak-component-size-lg) * 2.3);
}

/* Active track color */
.ak-switch--active .ak-switch__track {
  background: var(--ak-primary-dark);
  border-color: var(--ak-primary);
}

/* Labels */
.ak-switch__label {
  position: relative;
  z-index: 1;
  font-family: var(--ak-font-family);
  font-size: var(--ak-font-size-xs);
  font-weight: var(--ak-font-weight-medium);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 1;
  padding: 0 2px;
  pointer-events: none;
}

.ak-switch__label--active {
  color: var(--ak-primary);
  margin-right: auto;
}

.ak-switch__label--inactive {
  color: var(--ak-text-secondary);
  margin-left: auto;
}

.ak-switch--active .ak-switch__label--active {
  color: #fff;
}
.ak-switch--active .ak-switch__label--inactive {
  color: var(--ak-text-muted);
}

/* Thumb */
.ak-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(50% - 3px);
  height: calc(100% - 4px);
  background: var(--ak-text-primary);
  z-index: 0;
  transition: transform var(--ak-transition-base);
}

html:not(.dark) .ak-switch--active .ak-switch__thumb {
  background: var(--ak-primary);
}

html.dark .ak-switch--active .ak-switch__thumb {
  background: #fff;
}

.ak-switch--active .ak-switch__thumb {
  transform: translateX(calc(100% + 1px));
}

/* Disabled hover guard */
.ak-switch--disabled:hover .ak-switch__thumb {
  transform: none;
}
.ak-switch--disabled.ak-switch--active:hover .ak-switch__thumb {
  transform: translateX(calc(100% + 1px));
}
</style>
