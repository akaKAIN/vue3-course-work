<template>
  <nav class="navbar">
    <h3>Admin</h3>
    <ul class="navbar-menu">
      <li>
        <router-link :to="{ name: 'admin-products' }">Products</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'admin-categories' }">Categories</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'home' }">Back</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdminNavBar'
})
</script>
