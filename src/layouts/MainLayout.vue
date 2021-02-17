<template>
  <the-nav-bar></the-nav-bar>
  <div class="container with-nav"></div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNavBar from '@/components/TheNavBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { TheNavBar }
})
</script>
