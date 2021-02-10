<template>
  <admin-nav-bar></admin-nav-bar>
  <div class="container with-nav"></div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AdminNavBar from '@/components/admin/AdminNavBar.vue'

export default defineComponent({
  name: 'AdminLayout',
  components: { AdminNavBar }
})
</script>
