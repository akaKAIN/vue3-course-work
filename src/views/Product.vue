<template>
  <back-button></back-button>
  <app-page back center :title="product?.title" v-if="product">
    <img :src="product?.img" :alt="product?.title" />
    <p>
      Категория: <strong>{{ product?.category }}</strong>
    </p>
    <purchase-control :id="id"></purchase-control>
  </app-page>
  <h3 class="text-center text-white" v-else>
    Товара не найден.
  </h3>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import AppPage from '@/components/ui/AppPage.vue'
import { Product } from '@/models/base.model'
import { useStore } from 'vuex'
import { useCart } from '@/use/cart'
import PurchaseControl from '@/components/ui/PurchaseControl.vue'
import BackButton from '@/components/ui/BackButton.vue'

export default defineComponent({
  name: 'Product',
  components: { BackButton, PurchaseControl, AppPage },
  props: {
    id: {
      type: String
    }
  },
  setup(props) {
    const store = useStore()
    const {
      incrementCartProduct,
      decrementCartProduct,
      getCountFromCart
    } = useCart()
    const product = ref<Product | null>(null)
    onMounted(() => {
      product.value = store.getters['products/productByID'](props.id)
    })
    return {
      incrementCartProduct,
      decrementCartProduct,
      getCountFromCart,
      product
    }
  }
})
</script>

<style>
.card {
  text-align: center;
}
</style>
