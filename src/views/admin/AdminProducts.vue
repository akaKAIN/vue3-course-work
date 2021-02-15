<template>
  <admin-product-list :products="products"></admin-product-list>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Product } from '@/models/base.model'
import AdminProductList from '@/components/admin/AdminProductList.vue'

export default defineComponent({
  name: 'AdminProducts',
  components: {
    AdminProductList
  },
  setup() {
    const store = useStore()
    const products = computed<Product[]>(() => {
      return store.getters['products/products']
    })

    return { products }
  }
})
</script>
