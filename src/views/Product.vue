<template>
  <app-page title="Products"></app-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppPage from '@/components/ui/AppPage.vue';

export default defineComponent({
  name: 'Product',
  components: { AppPage }
});
</script>
