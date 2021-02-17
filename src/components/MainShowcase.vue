<template>
  <div class="products-table">
    <div class="products-wrapper">
      <card-product
        v-for="product in paginatedArray"
        :key="product.id"
        :title="product.title"
        :id="product.id"
        :img="product.img"
        :count="product.count"
        :price="product.price"
        @increment="incrementCartProduct"
        @decrement="decrementCartProduct"
        :countInCart="getCountFromCart(product.id)"
      ></card-product>
    </div>

    <the-pagination
      :is-isolated="false"
      :count="filteredProducts.length"
      :size="size"
      v-model="pageNumber"
    ></the-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import CardProduct from '@/components/cards/CardProduct.vue'
import ThePagination from '@/components/ui/ThePagination.vue'
import { useStore } from 'vuex'
import { Product } from '@/models/base.model'
import { useCart } from '@/use/cart'
import { useRoute } from 'vue-router'
import { SHOP_PRODUCTS_PAGINATION_SIZE, usePagination } from '@/use/pagination'

export default defineComponent({
  name: 'MainShowcase',
  components: { CardProduct, ThePagination },
  setup() {
    const store = useStore()
    const route = useRoute()
    const products = computed<Product[]>(
      () => store.getters['products/products']
    )
    const {
      decrementCartProduct,
      incrementCartProduct,
      getCountFromCart
    } = useCart()

    const filteredProducts = computed<Product[]>(() => {
      if (!products.value) {
        return []
      }
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

    const { paginatedArray, bindingPageNumber: pageNumber } = usePagination(
      filteredProducts.value,
      SHOP_PRODUCTS_PAGINATION_SIZE
    )

    return {
      filteredProducts,
      decrementCartProduct,
      incrementCartProduct,
      getCountFromCart,
      paginatedArray,
      pageNumber,
      size: SHOP_PRODUCTS_PAGINATION_SIZE
    }
  }
})
</script>

<style scoped>
.products-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
