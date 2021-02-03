<template>
  <component v-bind:is="layout + '-layout'"></component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import LostLayout from '@/layouts/LostLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    AuthLayout,
    LostLayout
  },
  setup() {
    const route = useRoute();
    const layout = computed<string>(() => {
      console.log(route);
      return route.meta.layout ? route.meta.layout : 'lost';
    });

    return { layout };
  }
});
</script>
