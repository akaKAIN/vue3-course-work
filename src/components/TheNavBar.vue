<template>
  <nav class="navbar">
    <h3>Shop App</h3>
    <ul class="navbar-menu">
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'cart' }">Cart</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheNavBar'
});
</script>
