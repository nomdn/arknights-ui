<template>
  <Teleport to="body">
    <Transition name="ak-fade">
      <div v-if="visible" class="ak-drawer__overlay" @click.self="handleOverlayClick"></div>
    </Transition>
    <Transition :name="transitionName">
      <div v-if="visible" :class="classes" :style="drawerStyle">
        <div class="ak-drawer__header">
          <span class="ak-drawer__title">{{ title }}</span>
          <span class="ak-drawer__close" @click="handleClose">&times;</span>
        </div>
        <div class="ak-drawer__body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="ak-drawer__footer">
          <slot name="footer" />
        </div>
        <!-- Edge accent line -->
        <div :class="['ak-drawer__accent', `ak-drawer__accent--${placement}`]"></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
export default { name: 'AkDrawer' }
</script>

<script setup lang="ts">
import { computed } from 'vue'

export interface DrawerProps {
  visible: boolean
  placement?: 'left' | 'right' | 'top' | 'bottom'
  title?: string
  size?: string
  closeOnOverlay?: boolean
}

const props = withDefaults(defineProps<DrawerProps>(), {
  placement: 'right',
  title: '',
  size: '360px',
  closeOnOverlay: true,
})

const emit = defineEmits<{
  'update:visible': [value: boolean]
  close: []
}>()

const classes = computed(() => [
  'ak-drawer',
  `ak-drawer--${props.placement}`,
])

const transitionName = computed(() => {
  const map: Record<string, string> = {
    left: 'ak-slide-left',
    right: 'ak-slide-right',
    top: 'ak-slide-top',
    bottom: 'ak-slide-bottom',
  }
  return map[props.placement] || 'ak-slide-right'
})

const drawerStyle = computed(() => {
  const map: Record<string, string> = {
    left: `right: auto; width: ${props.size}`,
    right: `left: auto; width: ${props.size}`,
    top: `bottom: auto; height: ${props.size}`,
    bottom: `top: auto; height: ${props.size}`,
  }
  return map[props.placement] || ''
})

function handleOverlayClick() {
  if (props.closeOnOverlay) handleClose()
}

function handleClose() {
  emit('update:visible', false)
  emit('close')
}
</script>

<style scoped>
.ak-drawer__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ak-bg-overlay);
  z-index: var(--ak-z-drawer);
  backdrop-filter: blur(4px);
}

.ak-drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  background: var(--ak-bg-panel);
  border: 1px solid var(--ak-border-color);
  z-index: calc(var(--ak-z-drawer) + 1);
  display: flex;
  flex-direction: column;
  box-shadow: var(--ak-shadow-lg);
}

.ak-drawer--right {
  right: 0;
}

.ak-drawer--left {
  left: 0;
}

.ak-drawer--top {
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
}

.ak-drawer--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
}

/* Edge accent line */
.ak-drawer__accent {
  position: absolute;
  width: 2px;
  top: 0;
  bottom: 0;
}
.ak-drawer__accent--right {
  right: 0;
  background: var(--ak-primary);
  opacity: 0.6;
}
.ak-drawer__accent--left {
  left: 0;
  background: var(--ak-primary);
  opacity: 0.6;
}
.ak-drawer__accent--top {
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  width: auto;
  height: 2px;
  background: var(--ak-primary);
  opacity: 0.6;
}
.ak-drawer__accent--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  width: auto;
  height: 2px;
  background: var(--ak-primary);
  opacity: 0.6;
}

.ak-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ak-spacing-lg) var(--ak-spacing-xl);
  border-bottom: 1px solid var(--ak-border-color);
  background: rgba(24, 209, 255, 0.05);
}

.ak-drawer__title {
  font-size: var(--ak-font-size-md);
  font-weight: var(--ak-font-weight-medium);
  color: var(--ak-primary-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ak-drawer__close {
  font-size: 20px;
  color: var(--ak-text-secondary);
  cursor: pointer;
  transition: all var(--ak-transition-fast);
  line-height: 1;
}
.ak-drawer__close:hover {
  color: var(--ak-danger);
}

.ak-drawer__body {
  flex: 1;
  padding: var(--ak-spacing-xl);
  overflow-y: auto;
  color: var(--ak-text-regular);
}

.ak-drawer__footer {
  padding: var(--ak-spacing-lg) var(--ak-spacing-xl);
  border-top: 1px solid var(--ak-border-color);
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-end;
  gap: var(--ak-spacing-md);
}
</style>
