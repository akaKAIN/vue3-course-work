<template>
  <h3 class="text-center" v-if="isCartEmpty">
    В корзине пока ничего нет
  </h3>
  <template v-else>
    <cart-product-table
      :cart="cart"
      @add="incrementCartProduct"
      @subtract="decrementCartProduct"
      @totalAmount="setTotalAmount"
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
import { defineComponent, ref } from 'vue'
import CartProductTable from '@/components/CartProductTable.vue'
import { useCart } from '@/use/useCart'
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
    const totalAmount = ref<number>(0)
    const setTotalAmount = (amount: number): void => {
      totalAmount.value = amount
    }
    return { ...useCart(CART_MODEL), totalAmount, setTotalAmount }
  }
})
</script>
