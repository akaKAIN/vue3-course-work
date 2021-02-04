<template>
  <app-page title="Корзина">
    <suspense>
      <template #fallback>
        <div class="loader"></div>
      </template>
      <template #default>
        <cart-product></cart-product>
      </template>
    </suspense>
    <small class="text-danger" v-if="error">{{ error }}</small>
  </app-page>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue';
import CartProduct from '@/components/CartProduct.vue';
import AppPage from '@/components/ui/AppPage.vue';
import { CommonObject } from '@/models/base.model';

const CART_MODEL: CommonObject<number> = {
  '2': 3,
  '5': 1
};

export default defineComponent({
  name: 'Cart',
  components: { AppPage, CartProduct },
  setup() {
    const cart = ref<CommonObject<number>>(CART_MODEL);
    const error = ref<null | unknown>(null);
    onErrorCaptured(err => {
      error.value = err;
      return true;
    });

    return { error };
  }
});
</script>
