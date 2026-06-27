<template>
  <Teleport to="body">
    <Transition name="ak-fade">
      <div v-if="visible" class="ak-dialog__overlay" @click.self="handleOverlayClick">
        <Transition name="ak-zoom">
          <div v-if="visible" :class="classes" :style="dialogStyle">
            <div class="ak-dialog__header">
              <span class="ak-dialog__title">{{ title }}</span>
              <span class="ak-dialog__close" @click="handleClose">&times;</span>
            </div>
            <div class="ak-dialog__body">
              <slot />
            </div>
            <div v-if="$slots.footer" class="ak-dialog__footer">
              <slot name="footer" />
            </div>
            <!-- Top accent line -->
            <div class="ak-dialog__accent"></div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
export default { name: 'AkDialog' }
</script>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'

export interface DialogProps {
  visible: boolean
  title?: string
  width?: string
  closeOnOverlay?: boolean
  showClose?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  title: '',
  width: '520px',
  closeOnOverlay: true,
  showClose: true,
})

const emit = defineEmits<{
  'update:visible': [value: boolean]
  close: []
  confirm: []
}>()

const classes = computed(() => ['ak-dialog'])

const dialogStyle = computed(() => ({ width: props.width }))

function handleOverlayClick() {
  if (props.closeOnOverlay) {
    handleClose()
  }
}

function handleClose() {
  emit('update:visible', false)
  emit('close')
}
</script>

<style scoped>
.ak-dialog__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ak-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ak-z-dialog);
  backdrop-filter: blur(4px);
}

.ak-dialog {
  position: relative;
  background: var(--ak-bg-panel);
  border: 1px solid var(--ak-border-color);
  box-shadow: var(--ak-shadow-lg);
  overflow: hidden;
}

/* Top accent line */
.ak-dialog__accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--ak-primary);
  opacity: 0.8;
}

.ak-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ak-spacing-lg) var(--ak-spacing-xl);
  border-bottom: 1px solid var(--ak-border-color);
  background: rgba(24, 209, 255, 0.05);
}

.ak-dialog__title {
  font-size: var(--ak-font-size-md);
  font-weight: var(--ak-font-weight-medium);
  color: var(--ak-primary-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ak-dialog__close {
  font-size: 20px;
  color: var(--ak-text-secondary);
  cursor: pointer;
  transition: all var(--ak-transition-fast);
  line-height: 1;
}
.ak-dialog__close:hover {
  color: var(--ak-danger);
}

.ak-dialog__body {
  padding: var(--ak-spacing-xl);
  color: var(--ak-text-regular);
  max-height: 60vh;
  overflow-y: auto;
}

.ak-dialog__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--ak-spacing-md);
  padding: var(--ak-spacing-lg) var(--ak-spacing-xl);
  border-top: 1px solid var(--ak-border-color);
  background: rgba(0, 0, 0, 0.15);
}
</style>
