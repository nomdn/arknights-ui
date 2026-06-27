<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
    :type="htmlType"
    @click="handleClick"
  >
    <span v-if="loading" class="ak-button__loading">
      <span class="ak-button__loading-icon"></span>
    </span>
    <span class="ak-button__content">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
export default { name: 'AkButton' }
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { sizeClassMap, variantClassMap, type SizeType, type VariantType } from '../../../utils/props'

export interface ButtonProps {
  variant?: VariantType
  size?: SizeType
  disabled?: boolean
  loading?: boolean
  block?: boolean
  ghost?: boolean
  angled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  block: false,
  ghost: false,
  angled: false,
  htmlType: 'button',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const classes = computed(() => [
  'ak-button',
  sizeClassMap[props.size],
  variantClassMap[props.variant],
  {
    'ak-button--disabled': props.disabled,
    'ak-button--loading': props.loading,
    'ak-button--block': props.block,
    'ak-button--ghost': props.ghost,
    'ak-button--angled': props.angled,
  },
])

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>

<style scoped>
.ak-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ak-spacing-sm);
  padding: 0 var(--ak-spacing-lg);
  height: var(--ak-component-size-md);
  font-family: var(--ak-font-family);
  font-size: var(--ak-font-size-base);
  font-weight: var(--ak-font-weight-medium);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: 1px solid var(--ak-border-color);
  background: var(--ak-bg-card);
  color: var(--ak-text-primary);
  cursor: pointer;
  transition: all var(--ak-transition-fast);
  position: relative;
  overflow: hidden;
}

/* Angled (chamfered) mode */
.ak-button--angled {
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
}
.ak-button--angled::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  background: rgba(255,255,255,0.02);
  pointer-events: none;
}

/* Sizes */
.ak-size-sm {
  height: var(--ak-component-size-sm);
  font-size: var(--ak-font-size-xs);
  padding: 0 var(--ak-spacing-md);
}
.ak-size-sm.ak-button--angled {
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
}
.ak-size-sm.ak-button--angled::before {
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
}

.ak-size-lg {
  height: var(--ak-component-size-lg);
  font-size: var(--ak-font-size-md);
  padding: 0 var(--ak-spacing-xl);
}
.ak-size-lg.ak-button--angled {
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
}
.ak-size-lg.ak-button--angled::before {
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
}

/* Variants */
.ak-variant-default:hover {
  background: #fff;
  border-color: #fff;
  color: #000;
}

.ak-variant-primary {
  background: var(--ak-primary-dark);
  border-color: var(--ak-primary);
  color: #fff;
}
.ak-variant-primary:hover {
  background: #fff;
  border-color: #fff;
  color: #000;
}

.ak-variant-danger {
  background: var(--ak-danger-dark);
  border-color: var(--ak-danger);
  color: #fff;
}
.ak-variant-danger:hover {
  background: var(--ak-danger);
}

.ak-variant-success {
  background: var(--ak-success-dark);
  border-color: var(--ak-success);
  color: #fff;
}
.ak-variant-success:hover {
  background: var(--ak-success);
}

.ak-variant-warning {
  background: var(--ak-warning-dark);
  border-color: var(--ak-warning);
  color: #fff;
}
.ak-variant-warning:hover {
  background: var(--ak-warning);
}

/* Ghost */
.ak-button--ghost {
  background: transparent;
}
.ak-button--ghost.ak-variant-primary {
  background: transparent;
  color: var(--ak-primary);
}

/* Block */
.ak-button--block {
  display: flex;
  width: 100%;
}

/* Disabled */
.ak-button--disabled,
.ak-button--loading {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Loading */
.ak-button__loading-icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ak-spin 0.6s linear infinite;
}

@keyframes ak-spin {
  to { transform: rotate(360deg); }
}
</style>
