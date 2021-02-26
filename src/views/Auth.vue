<template>
  <app-page title="Авторизация">
    <form @submit.prevent>
      <div class="form-control text-left">
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
import ApiAuthService from '@/services/apiAuth.service'
import { SubmitValues } from '@/models/form.model'

export default defineComponent({
  name: 'Auth',
  components: { AppPage },
  setup() {
    const apiAuthService = new ApiAuthService()
    console.log('ls: ', localStorage.getItem('testtis'))
    // TODO: реализовать обработку ответа при создании пользователя
    const submitCreateFn = async (values: SubmitValues) => {
      const response = await apiAuthService.createUser(values)
      console.log(response)
    }

    // TODO: реализовать обработку ответа при логине пользователя
    const submitLoginFn = async (values: SubmitValues) => {
      const response = await apiAuthService.loginUser(values)
      console.log(response)
    }
    return { ...useLoginForm(submitLoginFn) }
  }
})
</script>
