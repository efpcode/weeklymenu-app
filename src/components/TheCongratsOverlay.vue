<template>
  <transition name="fade">
    <aside class="congrats-overlay" v-if="show">
      <h2 class="congrats__header" :class="{ 'congrats__header--regular': !props.isHighContrast }">
        Great job! Take-off the Week!
      </h2>
      <p class="congrats__heart">{{ heart }}</p>
    </aside>
  </transition>
</template>

<script setup>
import { watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: Boolean,

  isHighContrast: {
    type: Boolean,
    required: true,
  },
})

const heart = '\u2764'

const DELAY = 3000

watch(
  () => props.show,
  (newValue) => {
    if (newValue) {
      setTimeout(() => {
        emit('update:show', false)
      }, DELAY)
    }
  },
)

const emit = defineEmits(['update:show'])
</script>

<style scoped>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.congrats-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-cta-highlight-light);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  flex-direction: column;
}
.congrats__header {
  padding: 0;
  text-align: center;
  width: 90%;
  margin: 1rem auto;
  font-size: 3rem;
  background: var(--color-primary-1);
  color: var(--color-text-dark);
}

.congrats__header--regular {
  color: var(--color-black);
}

.congrats__heart {
  font-size: 5rem;
  color: var(--color-black);
  margin: 0 auto;
  padding: 0;
}
</style>
