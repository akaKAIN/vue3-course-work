<template>
  <admin-product-list :products="products"></admin-product-list>
  <the-pagination
    :count="allProducts.length"
    :size="size"
    v-model="pageNumber"
  ></the-pagination>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Product } from '@/models/base.model'
import AdminProductList from '@/components/admin/AdminProductList.vue'
import ThePagination from '@/components/ThePagination.vue'
import { usePagination, ADMIN_PRODUCT_PAGINATION_SIZE } from '@/use/pagination'

export default defineComponent({
  name: 'AdminProducts',
  components: {
    ThePagination,
    AdminProductList
  },
  setup() {
    const store = useStore()
    const allProducts = computed<Product[]>(
      () => store.getters['products/products']
    )
    const {
      paginatedArray: products,
      bindingPageNumber: pageNumber
    } = usePagination(allProducts.value, ADMIN_PRODUCT_PAGINATION_SIZE)

    return {
      products,
      pageNumber,
      allProducts,
      size: ADMIN_PRODUCT_PAGINATION_SIZE
    }
  }
})
</script>
