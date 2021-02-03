<template>
  <suspense>
    <template #fallback>
      <div class="loader"></div>
    </template>
    <template #default>
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
        <p class="text-right"><button class="btn">Оплатить</button></p>
      </template>
    </template>
  </suspense>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useCartProducts } from '@/use/useCartProducts';
import { Product } from '@/models/base.model';

export default defineComponent({
  name: 'CartProduct',
  async setup() {
    const {
      products,
      request,
      addProduct,
      subtractProduct
    } = await useCartProducts();
    if (!products.value) {
      await request();
      console.log(products.value);
    }

    const totalAmount = computed<number>(() => {
      if (products.value) {
        const reducer = (accum: number, product: Product): number =>
          accum + product.count * product.price;
        return products.value.reduce(reducer, 0);
      }
      return 0;
    });

    return { products, addProduct, subtractProduct, totalAmount };
  }
});
</script>
