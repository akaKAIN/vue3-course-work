<template>
  <admin-nav-bar></admin-nav-bar>
  <div class="container with-nav"></div>
  <the-message></the-message>
  <the-loader :is-loading="isLoading"></the-loader>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import AdminNavBar from '@/components/admin/AdminNavBar.vue'
import TheMessage from '@/components/TheMessage.vue'
import TheLoader from '@/components/TheLoader.vue'
import { useBaseData } from '@/use/baseData'

export default defineComponent({
  name: 'AdminLayout',
  components: { TheLoader, TheMessage, AdminNavBar },
  setup() {
    const { isLoading, loadData } = useBaseData()
    onMounted(() => loadData())
    return { isLoading }
  }
})
</script>
