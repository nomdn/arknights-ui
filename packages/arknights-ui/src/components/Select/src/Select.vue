<template>
  <div
    ref="selectRef"
    :class="selectClasses"
    @click="toggleDropdown"
  >
    <!-- Trigger -->
    <div class="ak-select__trigger">
      <span class="ak-select__label">
        <template v-if="selectedLabel">{{ selectedLabel }}</template>
        <span v-else class="ak-select__placeholder">{{ placeholder }}</span>
      </span>
      <span class="ak-select__arrow" :class="{ 'ak-select__arrow--open': isOpen }">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>
        </svg>
      </span>
    </div>

    <!-- Dropdown panel -->
    <Transition name="ak-zoom">
      <div
        v-show="isOpen"
        class="ak-select__dropdown"
        @click.stop
      >
        <ul class="ak-select__list">
          <li
            v-for="option in options"
            :key="option.value"
            :class="[
              'ak-select__option',
              {
                'ak-select__option--selected': option.value === modelValue,
                'ak-select__option--disabled': option.disabled,
              },
            ]"
            @click.stop="selectOption(option)"
          >
            <span class="ak-select__option-label">{{ option.label }}</span>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
export default { name: 'AkSelect' }
</script>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { sizeClassMap, type SizeType } from '../../../utils/props'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectProps {
  modelValue?: string | number
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
  size?: SizeType
}

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: '',
  placeholder: '请选择',
  disabled: false,
  size: 'md',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

const selectRef = ref<HTMLElement>()
const isOpen = ref(false)

const selectClasses = computed(() => [
  'ak-select',
  sizeClassMap[props.size],
  {
    'ak-select--disabled': props.disabled,
    'ak-select--open': isOpen.value,
  },
])

const selectedLabel = computed(() => {
  const found = props.options.find((o) => o.value === props.modelValue)
  return found?.label ?? ''
})

function toggleDropdown() {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

function selectOption(option: SelectOption) {
  if (option.disabled) return
  isOpen.value = false
  if (props.modelValue !== option.value) {
    emit('update:modelValue', option.value)
    emit('change', option.value)
  }
}

function handleClickOutside(e: MouseEvent) {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside, true)
})
</script>

<style scoped>
.ak-select {
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-family: var(--ak-font-family);
  font-size: var(--ak-font-size-base);
  user-select: none;
}

.ak-size-sm {
  font-size: var(--ak-font-size-xs);
}
.ak-size-lg {
  font-size: var(--ak-font-size-md);
}

/* === Trigger === */
.ak-select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--ak-component-size-md);
  background: var(--ak-bg-input);
  border: 1px solid var(--ak-border-color);
  border-left: none;
  padding: 0 var(--ak-spacing-md);
  position: relative;
  cursor: pointer;
  transition: all var(--ak-transition-fast);
  overflow: hidden;
}

.ak-size-sm .ak-select__trigger {
  height: var(--ak-component-size-sm);
}
.ak-size-lg .ak-select__trigger {
  height: var(--ak-component-size-lg);
}

/* Left accent bar */
.ak-select__trigger::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: var(--ak-primary);
  z-index: 2;
  transition: background var(--ak-transition-fast);
}

/* Focus mask overlay */
.ak-select__trigger::after {
  content: '';
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

.ak-select--open .ak-select__trigger {
  border-color: var(--ak-primary);
}

.ak-select--open .ak-select__trigger::after {
  opacity: 1;
  transform: scaleX(1);
}

.ak-select--open .ak-select__label,
.ak-select--open .ak-select__arrow {
  color: #000;
  position: relative;
  z-index: 2;
}

/* === Label & Placeholder === */
.ak-select__label {
  flex: 1;
  color: var(--ak-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  z-index: 2;
}

.ak-select__placeholder {
  color: var(--ak-text-placeholder);
}

/* === Arrow === */
.ak-select__arrow {
  display: flex;
  align-items: center;
  color: var(--ak-text-secondary);
  transition: transform var(--ak-transition-fast), color var(--ak-transition-fast);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.ak-select__arrow--open {
  transform: rotate(180deg);
}

/* === Dropdown Panel === */
.ak-select__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 2px;
  background: var(--ak-bg-panel);
  border: 1px solid var(--ak-border-color);
  z-index: var(--ak-z-dropdown);
  min-width: 100%;
  overflow: hidden;
}

/* === Option List === */
.ak-select__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* === Option Item === */
.ak-select__option {
  padding: 0 var(--ak-spacing-md);
  height: var(--ak-component-size-md);
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--ak-text-primary);
  border-bottom: 1px solid var(--ak-border-color);
  transition: background var(--ak-transition-fast), color var(--ak-transition-fast);
  white-space: nowrap;
}

.ak-select__option:last-child {
  border-bottom: none;
}

.ak-size-sm .ak-select__option {
  height: var(--ak-component-size-sm);
  font-size: var(--ak-font-size-xs);
}

.ak-size-lg .ak-select__option {
  height: var(--ak-component-size-lg);
  font-size: var(--ak-font-size-md);
}

.ak-select__option:hover {
  background: var(--ak-primary);
  color: #000;
}

.ak-select__option--selected {
  background: var(--ak-primary);
  color: #000;
}

.ak-select__option--disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* === Zoom Transition === */
.ak-zoom-enter-active {
  transition: opacity var(--ak-transition-fast), transform var(--ak-transition-fast);
  transform-origin: top center;
}

.ak-zoom-leave-active {
  transition: opacity var(--ak-transition-fast), transform var(--ak-transition-fast);
  transform-origin: top center;
}

.ak-zoom-enter-from {
  opacity: 0;
  transform: scaleY(0.9);
}

.ak-zoom-leave-to {
  opacity: 0;
  transform: scaleY(0.9);
}

/* === Disabled State === */
.ak-select--disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
