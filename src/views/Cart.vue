<template>
  <app-page title="Корзина">
    <cart-product></cart-product>
    <small class="text-danger" v-if="error">{{ error }}</small>
  </app-page>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'
import CartProduct from '@/components/CartProduct.vue'
import AppPage from '@/components/ui/AppPage.vue'

export default defineComponent({
  name: 'Cart',
  components: { AppPage, CartProduct },
  setup() {
    const error = ref<null | unknown>(null)
    onErrorCaptured(err => {
      error.value = err
      return true
    })

    return { error }
  }
})
</script>
