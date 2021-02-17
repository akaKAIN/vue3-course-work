<template>
  <the-loader v-if="isLoading" :is-loading="isLoading"></the-loader>
  <div class="card" v-else>
    <side-bar-filter></side-bar-filter>
    <main-showcase></main-showcase>
  </div>
</template>

<script>
import SideBarFilter from '../components/ui/SideBarFilter'
import MainShowcase from '@/components/MainShowcase'
import { useBaseData } from '@/use/baseData'
import TheLoader from '@/components/TheLoader'
import { onMounted } from 'vue'
export default {
  components: { TheLoader, MainShowcase, SideBarFilter },
  setup() {
    const { isLoading, loadData } = useBaseData()
    onMounted(async () => await loadData())

    return { isLoading }
  }
}
</script>

<style scoped>
.card {
  border-radius: 4px;
  padding: 0;
  display: flex;
}
</style>
