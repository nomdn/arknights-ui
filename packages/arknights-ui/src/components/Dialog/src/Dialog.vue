<template>
  <Teleport to="body">
    <Transition name="ak-fade">
      <div v-if="visible" class="ak-dialog__overlay" @click.self="handleOverlayClick">
        <Transition name="ak-zoom">
          <div v-if="visible" class="ak-dialog" :style="dialogStyle">
            <!-- Technical line pattern background -->
            <div class="ak-dialog__bg-pattern"></div>
            <!-- Header (optional, shown when title is provided) -->
            <div v-if="title || showClose" class="ak-dialog__header">
              <span v-if="title" class="ak-dialog__title">{{ title }}</span>
              <span v-if="showClose" class="ak-dialog__close" @click="handleClose">&times;</span>
            </div>
            <!-- Body -->
            <div class="ak-dialog__body">
              <slot />
            </div>
            <!-- Footer: built-in cancel/confirm or custom slot -->
            <div v-if="$slots.footer || showFooter" class="ak-dialog__footer">
              <slot name="footer">
                <button class="ak-dialog__btn ak-dialog__btn--cancel" @click="handleClose">
                  <span class="ak-dialog__btn-icon ak-dialog__btn-icon--cancel">&times;</span>
                  <span>取消</span>
                </button>
                <button class="ak-dialog__btn ak-dialog__btn--confirm" @click="handleConfirm">
                  <span class="ak-dialog__btn-icon ak-dialog__btn-icon--confirm">&#10003;</span>
                  <span>确认</span>
                </button>
              </slot>
            </div>
            <!-- Bottom accent line -->
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
import { computed } from 'vue'

export interface DialogProps {
  visible: boolean
  title?: string
  width?: string
  closeOnOverlay?: boolean
  showClose?: boolean
  showFooter?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  title: '',
  width: '440px',
  closeOnOverlay: true,
  showClose: false,
  showFooter: true,
})

const emit = defineEmits<{
  'update:visible': [value: boolean]
  close: []
  confirm: []
}>()

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

function handleConfirm() {
  emit('confirm')
  emit('update:visible', false)
}
</script>

<style scoped>
/* ===== Overlay ===== */
.ak-dialog__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ak-dialog-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ak-z-dialog);
  backdrop-filter: blur(3px);
}

/* ===== Dialog Container ===== */
.ak-dialog {
  position: relative;
  background: var(--ak-dialog-bg);
  overflow: hidden;
  border: 1px solid var(--ak-dialog-border);
}

/* ===== Technical Line Pattern (SVG background) ===== */
.ak-dialog__bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0.06;
  background-image:
    /* Horizontal lines */
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 19px,
      rgba(0, 0, 0, 0.8) 19px,
      rgba(0, 0, 0, 0.8) 20px
    ),
    /* Vertical lines */
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 19px,
      rgba(0, 0, 0, 0.8) 19px,
      rgba(0, 0, 0, 0.8) 20px
    );
  background-size: 20px 20px;
}

/* ===== Header ===== */
.ak-dialog__header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--ak-spacing-lg) var(--ak-spacing-xl) var(--ak-spacing-sm);
}

.ak-dialog__title {
  font-size: var(--ak-font-size-md);
  font-weight: var(--ak-font-weight-bold);
  color: var(--ak-dialog-title);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.ak-dialog__close {
  position: absolute;
  right: var(--ak-spacing-lg);
  font-size: 18px;
  color: var(--ak-text-secondary);
  cursor: pointer;
  line-height: 1;
  transition: color var(--ak-transition-fast);
}
.ak-dialog__close:hover {
  color: var(--ak-danger);
}

/* ===== Body ===== */
.ak-dialog__body {
  position: relative;
  z-index: 1;
  padding: var(--ak-spacing-md) var(--ak-spacing-xxl) var(--ak-spacing-xl);
  color: var(--ak-dialog-body);
  text-align: center;
  font-size: var(--ak-font-size-base);
  line-height: var(--ak-line-height-base);
  max-height: 60vh;
  overflow-y: auto;
}

/* ===== Footer ===== */
.ak-dialog__footer {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

/* ===== Buttons (Arknights style: black cancel / red confirm) ===== */
.ak-dialog__btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--ak-spacing-sm);
  padding: var(--ak-spacing-md) 0;
  border: none;
  cursor: pointer;
  font-family: var(--ak-font-family-bold);
  font-size: var(--ak-font-size-base);
  font-weight: var(--ak-font-weight-bold);
  letter-spacing: 1px;
  transition: filter var(--ak-transition-fast);
  position: relative;
  overflow: hidden;
}

/* Texture overlay for both buttons */
.ak-dialog__btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0.15;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.3) 2px,
      rgba(255, 255, 255, 0.3) 3px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.15) 2px,
      rgba(255, 255, 255, 0.15) 3px
    );
}

.ak-dialog__btn:hover {
  filter: brightness(1.15);
}
.ak-dialog__btn:active {
  filter: brightness(0.9);
}

/* Cancel button: black */
.ak-dialog__btn--cancel {
  background: #1a1a1a;
  color: #fff;
}

/* Confirm button: Arknights red */
.ak-dialog__btn--confirm {
  background: #8b1a1a;
  color: #fff;
}

/* ===== Button Icons ===== */
.ak-dialog__btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 14px;
  line-height: 1;
}

/* ===== Bottom Accent Line ===== */
.ak-dialog__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--ak-primary);
  opacity: 0.7;
}
</style>
