<template>
  <the-nav-bar></the-nav-bar>
  <div class="container with-nav"></div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNavBar from '@/components/TheNavBar.vue'
import { useProducts } from '@/use/products.ts'
import { useStore } from 'vuex'
import { useCategories } from '@/use/categories'

export default defineComponent({
  name: 'MainLayout',
  components: { TheNavBar },
  async setup() {
    const store = useStore()

    const { products } = await useProducts()
    await store.dispatch('products/setProducts', products.value)

    const { categories } = await useCategories()
    await store.dispatch('products/setCategories', categories.value)
  }
})
</script>
