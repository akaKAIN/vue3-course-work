<template>
  <div class="products-table">
    <card-product
      v-for="product in filteredProducts"
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
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MainShowcase',
  components: { CardProduct },
  setup() {
    const store = useStore()
    const route = useRoute()
    const products = computed<Product[]>(
      () => store.getters['products/products']
    )
    const { cart, decrementCartProduct, incrementCartProduct } = useCart()

    const filteredProducts = computed<Product[]>(() => {
      return products.value
        .filter((product: Product) => {
          if (route.query.category) {
            return product.category === route.query.category
          } else {
            return true
          }
        })
        .filter((product: Product) => {
          if (route.query.search) {
            return product.title
              .toLowerCase()
              .includes(route.query.search.toString().toLowerCase())
          } else {
            return true
          }
        })
    })

    return { filteredProducts, decrementCartProduct, incrementCartProduct }
  }
})
</script>
