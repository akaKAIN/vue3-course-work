<template>
  <h3 class="text-center" v-if="!products">
    В корзине пока ничего нет
  </h3>
  <template v-else>
    <cart-product-table
      :products="products"
      @add="addProduct"
      @subtract="subtractProduct"
    ></cart-product-table>
    <hr />
    <p class="text-right">
      <strong>Всего: {{ totalAmount }} руб.</strong>
    </p>
    <p class="text-right">
      <button class="btn">Оплатить</button>
    </p>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartProduct } from '@/use/useCartProducts';
import CartProductTable from '@/components/CartProductTable.vue';

export default defineComponent({
  name: 'CartProduct',
  components: { CartProductTable },
  async setup() {
    const {
      products,
      addProduct,
      subtractProduct,
      totalAmount
    } = await useCartProduct();
    console.log('Gotten: ', products.value);
    return { products, addProduct, subtractProduct, totalAmount };
  }
});
</script>
