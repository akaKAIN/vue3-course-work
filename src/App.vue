<template>
  <suspense>
    <template #default>
      <component v-bind:is="layout + '-layout'"></component>
    </template>
    <template #fallback><div class="loader"></div></template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    AuthLayout,
    AdminLayout
  },
  setup() {
    const route = useRoute()
    const layout = computed<string>(() => {
      console.log(route)
      return route.meta.layout ? route.meta.layout : 'lost'
    })

    return { layout }
  }
})
</script>
