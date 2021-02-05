<template>
  <table class="table">
    <thead>
      <tr>
        <th>Наименование</th>
        <th>Количество</th>
        <th>Цена (шт)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in cartProducts" :key="product.id">
        <td>{{ product.title }}</td>
        <td>
          <button class="btn danger" @click="$emit('subtract', product.id)">
            -
          </button>
          {{ product.count }} шт.
          <button class="btn primary" @click="$emit('add', product.id)">
            +
          </button>
        </td>
        <td>{{ product.count * product.price }} руб.</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { CommonObject, Product } from '@/models/base.model'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CartProductTable',
  emits: ['subtract', 'add', 'totalAmount'],
  props: {
    cart: {
      type: Object,
      default: (): CommonObject<string> => ({})
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    const products = computed(() => store.getters['products/products'])
    const cartProducts = computed<Product[]>(() => {
      const cartProductsID: string[] = Object.keys(props.cart)
      return products.value
        .map((product: Product) => {
          if (cartProductsID.includes(product.id)) {
            const cartProduct = Object.assign({}, product)
            cartProduct.count = props.cart[cartProduct.id]
            return cartProduct
          }
        })
        .filter((product: Product) => !!product)
    })

    const totalAmount = computed<number>(() => {
      if (cartProducts.value.length > 0) {
        return cartProducts.value.reduce((accum: number, prod: Product) => {
          return accum + prod.price * prod.count
        }, 0)
      }
      return 0
    })

    store.dispatch('cart/setTotalAmount', totalAmount.value)
    watch(totalAmount, () => {
      store.dispatch('cart/setTotalAmount', totalAmount.value)
    })

    return { cartProducts }
  }
})
</script>
