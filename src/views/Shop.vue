<template>
  <div class="card">
    <side-bar-filter></side-bar-filter>
    <div class="products-table">
      <div class="product-card">
        <div class="product-img">
          <img
            src="https://images.grocery.yandex.net/2756334/33a66b51989449f9918122a775885fbc/300x300.png"
          />
        </div>
        <h4 class="product-title">Название товара</h4>
        <div class="text-center">
          <button class="btn">23</button>
          <!--          <div class="product-controls">-->
          <!--            <button class="btn danger">-</button>-->
          <!--            <strong>123</strong>-->
          <!--            <button class="btn primary">+</button>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarFilter from '../components/ui/SideBarFilter'
export default {
  components: { SideBarFilter }
}
</script>

<style scoped>
.card {
  border-radius: 4px;
  padding: 0;
  display: flex;
}
</style>
