<template>
  <admin-nav-bar></admin-nav-bar>
  <div class="container with-nav"></div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AdminNavBar from '@/components/admin/AdminNavBar.vue'
import { useStore } from 'vuex'
import { useProducts } from '@/use/products'
import { useCategories } from '@/use/categories'

export default defineComponent({
  name: 'AdminLayout',
  components: { AdminNavBar },
  async setup() {
    const store = useStore()

    const { products } = await useProducts()
    await store.dispatch('products/setProducts', products.value)

    const { categories } = await useCategories()
    await store.dispatch('products/setCategories', categories.value)
  }
})
</script>
