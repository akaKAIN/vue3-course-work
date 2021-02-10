<template>
  <app-page title="Авторизация">
    <form @submit.prevent>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" @blur="emailBlur" />
        <small class="text-danger" v-if="emailError">{{ emailError }}</small>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          @blur="passwordBlur"
        />
        <small class="text-danger" v-if="passwordError">{{
          passwordError
        }}</small>
      </div>
      <button
        type="submit"
        class="btn primary"
        @click="onSubmit"
        :disabled="isSubmitting"
      >
        Войти
      </button>
    </form>
  </app-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppPage from '@/components/ui/AppPage.vue'
import { useLoginForm } from '@/use/forms/login-form'

export default defineComponent({
  name: 'Auth',
  components: { AppPage },
  setup() {
    return { ...useLoginForm() }
  }
})
</script>
