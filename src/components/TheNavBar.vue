<template>
  <nav class="navbar">
    <h3>Shop App</h3>
    <ul class="navbar-menu">
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="cart-link">
        <router-link :to="{ name: 'cart' }">Cart</router-link>
        <div class="cart-count container" v-show="count">
          <div class="cart-count__count">
            {{ count }}
          </div>
        </div>
      </li>
      <li>
        <router-link :to="{ name: 'admin' }">Admin</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { CommonObject } from '@/models/base.model'

export default defineComponent({
  name: 'TheNavBar',
  setup() {
    const store = useStore()
    const cart = computed<CommonObject<number>>(
      () => store.getters['cart/cart']
    )
    const count = computed<number>(() => {
      return Object.keys(cart.value).reduce(
        (accum: number, key: string) => accum + cart.value[key],
        0
      )
    })

    return { count }
  }
})
</script>

<style scoped>
.cart-link {
  position: relative;
}
.cart-count {
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: bold;
}
.container {
  position: absolute;
  right: -20px;
  top: -7px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #c25205;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
</style>
