<template>
  <div class="container">
    <div class="card">
      <h1>MainLayout</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout'
});
</script>
