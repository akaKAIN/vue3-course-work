<template>
  <app-page title="Home"></app-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppPage from '@/components/ui/AppPage.vue';

export default defineComponent({
  name: 'Shop',
  components: { AppPage }
});
</script>
