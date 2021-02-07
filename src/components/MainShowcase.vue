<template>
  <div class="products-table">
    <card-product
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :id="product.id"
      :img="product.img"
      :count="product.count"
      :price="product.price"
      @increment="incrementCartProduct"
      @decrement="decrementCartProduct"
    ></card-product>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import CardProduct from '@/components/cards/CardProduct.vue'
import { useStore } from 'vuex'
import { Product } from '@/models/base.model'
import { useCart } from '@/use/cart'

export default defineComponent({
  name: 'MainShowcase',
  components: { CardProduct },
  setup() {
    const store = useStore()
    const products = computed<Product[]>(
      () => store.getters['products/products']
    )
    const { cart, decrementCartProduct, incrementCartProduct } = useCart()

    console.log(cart.value)
    console.log(store.getters['cart/products'])

    return { products, decrementCartProduct, incrementCartProduct }
  }
})
</script>
