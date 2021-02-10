<template>
  <div class="text-center">
    <button
      class="btn"
      v-if="!cartCount"
      @click="incrementCartProduct(product.id)"
    >
      {{ product.price }} руб.
    </button>
    <div class="product-controls" v-else>
      <button class="btn danger" @click="decrementCartProduct(product.id)">
        -
      </button>
      <strong>{{ cartCount }} шт.</strong>
      <button
        class="btn primary"
        @click="incrementCartProduct(product.id)"
        :disabled="isDisabledIncrement"
      >
        +
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useCart } from '@/use/cart'

export default defineComponent({
  name: 'PurchaseControl',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const product = store.getters['products/productByID'](props.id)

    const {
      incrementCartProduct,
      decrementCartProduct,
      getCountFromCart
    } = useCart()

    const cartCount = computed<number>(() => getCountFromCart(product.id))
    const isDisabledIncrement = computed<boolean>(() => {
      return cartCount.value >= product.count
    })

    return {
      product,
      incrementCartProduct,
      decrementCartProduct,
      cartCount,
      isDisabledIncrement
    }
  }
})
</script>
