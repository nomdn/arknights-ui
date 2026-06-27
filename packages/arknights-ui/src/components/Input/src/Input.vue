<template>
  <div :class="wrapperClasses">
    <span v-if="$slots.prefix" class="ak-input__prefix">
      <slot name="prefix" />
    </span>
    <div class="ak-input__wrapper">
      <input
        ref="inputRef"
        :class="inputClasses"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
      />
    </div>
    <span v-if="$slots.suffix || clearable" class="ak-input__suffix">
      <span v-if="clearable && modelValue" class="ak-input__clear" @click="handleClear">&times;</span>
      <slot name="suffix" />
    </span>
    <!-- Focus mask overlay -->
    <div class="ak-input__focus-mask"></div>
  </div>
</template>

<script lang="ts">
export default { name: 'AkInput' }
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { sizeClassMap, type SizeType, bem } from '../../../utils/props'

export interface InputProps {
  modelValue?: string | number
  type?: string
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  clearable?: boolean
  size?: SizeType
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  disabled: false,
  readonly: false,
  placeholder: '',
  clearable: false,
  size: 'md',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  enter: [value: string]
}>()

const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)

const wrapperClasses = computed(() => [
  'ak-input',
  sizeClassMap[props.size],
  {
    'ak-input--disabled': props.disabled,
    'ak-input--focused': isFocused.value,
  },
])

const inputClasses = computed(() => ['ak-input__inner'])

function handleInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val)
}

function handleFocus(e: FocusEvent) {
  isFocused.value = true
  emit('focus', e)
}

function handleBlur(e: FocusEvent) {
  isFocused.value = false
  emit('blur', e)
}

function handleEnter() {
  emit('enter', String(props.modelValue))
}

function handleClear() {
  emit('update:modelValue', '')
  inputRef.value?.focus()
}

defineExpose({ focus: () => inputRef.value?.focus() })
</script>

<style scoped>
.ak-input {
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: var(--ak-component-size-md);
  background: var(--ak-bg-input);
  border: 1px solid var(--ak-border-color);
  border-left: 2px solid #fff;
  transition: all var(--ak-transition-fast);
  overflow: hidden;
  gap: var(--ak-spacing-sm);
  padding: 0 var(--ak-spacing-md);
  position: relative;
}

.ak-size-sm {
  height: var(--ak-component-size-sm);
  font-size: var(--ak-font-size-xs);
}
.ak-size-lg {
  height: var(--ak-component-size-lg);
  font-size: var(--ak-font-size-md);
}

.ak-input__wrapper {
  position: relative;
  flex: 1;
}

.ak-input__inner {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--ak-text-primary);
  font-family: var(--ak-font-family);
  font-size: inherit;
  padding: 0;
  position: relative;
  z-index: 2;
}

.ak-input__inner::placeholder {
  color: var(--ak-text-placeholder);
}

/* Focus state text colors */
.ak-input--focused .ak-input__inner {
  color: #000;
}
.ak-input--focused .ak-input__inner::placeholder {
  color: #fff;
}

/* Focus mask - left-to-right expanding blue overlay */
.ak-input__focus-mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--ak-primary);
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left center;
  pointer-events: none;
  z-index: 1;
  transition: transform var(--ak-transition-base), opacity var(--ak-transition-base);
}

/* Focus state */
.ak-input--focused {
  border-color: var(--ak-primary);
  border-left: 2px solid var(--ak-primary);
}
.ak-input--focused .ak-input__focus-mask {
  opacity: 1;
  transform: scaleX(1);
}

/* Disabled */
.ak-input--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Prefix & Suffix */
.ak-input__prefix,
.ak-input__suffix {
  display: flex;
  align-items: center;
  color: var(--ak-text-secondary);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.ak-input__clear {
  cursor: pointer;
  color: var(--ak-text-secondary);
  font-size: var(--ak-font-size-lg);
  line-height: 1;
  transition: color var(--ak-transition-fast);
}
.ak-input__clear:hover {
  color: var(--ak-danger);
}
</style>
