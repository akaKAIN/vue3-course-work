<template>
  <button class="btn" @click="goBack">Вернуться</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'BackButton',
  setup() {
    const router = useRouter()
    const goBack = () => router.back()

    return { goBack }
  }
})
</script>
