<template>
  <app-page title="Авторизация">
    <form @submit.prevent>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit" class="btn primary" @click="onSubmit">
        Войти
      </button>
    </form>
  </app-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppPage from '@/components/ui/AppPage.vue'

export default defineComponent({
  name: 'Auth',
  components: { AppPage },
  setup() {
    const onSubmit = () => {
      console.log('Inter')
    }

    return { onSubmit }
  }
})
</script>
