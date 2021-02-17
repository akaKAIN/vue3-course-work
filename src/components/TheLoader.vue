<template>
  <div class="loader" v-if="isLoading"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheLoader',
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
})
</script>
