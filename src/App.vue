<template>
  <component :is="layout + '-layout'"></component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
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
