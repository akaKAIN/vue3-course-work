<template>
  <transition name="show-message">
    <div v-if="message" :class="['message', 'alert', message.level]">
      <h3 id="message-title">{{ message.title }}</h3>
      <span id="message-text">{{ message.text }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { MessageObject } from '@/models/base.model'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'TheMessage',
  setup() {
    const store = useStore()
    const message = computed<MessageObject | null>(
      () => store.getters['message']
    )

    return {
      message
    }
  }
})
</script>

<style scoped>
.message {
  position: absolute;
  top: 60px;
  right: 0;
  width: 380px;
}

.show-message-enter-active {
  transition: all 0.5s ease;
}

.show-message-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.show-message-enter, .show-message-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */
 {
  transform: translateX(10px);
  opacity: 0;
}
</style>
