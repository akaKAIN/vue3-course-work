<template>
  <h3 class="text-center" v-if="isCartEmpty">
    В корзине пока ничего нет
  </h3>
  <template v-else>
    <cart-product-table
      :cart="cart"
      @add="incrementCartProduct"
      @subtract="decrementCartProduct"
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
import { defineComponent } from 'vue'
import CartProductTable from '@/components/CartProductTable.vue'
import { useCart } from '@/use/cart'
import { CommonObject } from '@/models/base.model'

const CART_MODEL: CommonObject<number> = {
  '2': 3,
  '5': 1,
  '22': 4
}

export default defineComponent({
  name: 'CartProduct',
  components: { CartProductTable },
  setup() {
    return { ...useCart(CART_MODEL) }
  }
})
</script>
