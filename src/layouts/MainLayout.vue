<template>
  <the-nav-bar></the-nav-bar>
  <div class="container with-nav"></div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNavBar from '@/components/TheNavBar.vue'
import { useProducts } from '@/use/useProducts'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  components: { TheNavBar },
  async setup() {
    const store = useStore()
    const { products } = await useProducts()
    store.commit('products/setProducts', products.value)
  }
})
</script>
