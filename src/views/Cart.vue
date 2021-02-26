<template>
  <app-page title="Корзина">
    <cart-product></cart-product>
    <!--    <small class="text-danger" v-if="error">{{ error }}</small>-->
    <auth></auth>
  </app-page>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'
import CartProduct from '@/components/CartProduct.vue'
import AppPage from '@/components/ui/AppPage.vue'
import Auth from '@/views/Auth.vue'
import Message from '@/utils/message'

export default defineComponent({
  name: 'Cart',
  components: { Auth, AppPage, CartProduct },
  setup() {
    const error = ref<null | unknown>(null)
    const showMessage = async (err: string | unknown) => {
      const message = new Message('Login Error:', err, 'danger')
      await message.show()
    }
    onErrorCaptured(err => {
      showMessage(err)
      return true
    })

    return { error }
  }
})
</script>
