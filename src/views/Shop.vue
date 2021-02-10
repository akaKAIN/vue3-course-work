<template>
  <div class="card">
    <side-bar-filter></side-bar-filter>
    <main-showcase></main-showcase>
  </div>
</template>

<script>
import SideBarFilter from '../components/ui/SideBarFilter'
import MainShowcase from '@/components/MainShowcase'
export default {
  components: { MainShowcase, SideBarFilter }
}
</script>

<style scoped>
.card {
  border-radius: 4px;
  padding: 0;
  display: flex;
}
</style>
