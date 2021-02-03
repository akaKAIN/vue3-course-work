<template>
  <div class="container">
    <div class="card">
      <h1>Корзина</h1>
      <cart-product></cart-product>
      <small class="text-danger">{{ error }}</small>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue';
import CartProduct from '@/components/CartProduct.vue';

// const CART_MODEL: CommonObject<string, number> = {
//   '2': 3,
//   '5': 1
// };

export default defineComponent({
  name: 'Cart',
  components: { CartProduct },
  setup() {
    const error = ref<null | unknown>(null);
    onErrorCaptured(err => {
      console.log('onErrorCaptured: ', err);
      error.value = err;
      return true;
    });

    return { error };
  }
});
</script>
