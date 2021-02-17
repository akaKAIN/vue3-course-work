<template>
  <keep-alive>
    <div class="product-card text-center">
      <div @click="$router.push({ name: 'product', params: { id } })">
        <div class="product-img">
          <img :src="img" :alt="title" />
        </div>
        <h4 class="product-title">{{ title }}</h4>
      </div>
      <purchase-control :id="id" v-if="count"></purchase-control>
      <button class="btn" v-else disabled>Нет в наличии</button>
    </div>
  </keep-alive>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ProductPropsMixin from '@/mixins/ProductProps'
import PurchaseControl from '@/components/ui/PurchaseControl.vue'

export default defineComponent({
  name: 'CardProduct',
  components: { PurchaseControl },
  emits: ['increment', 'decrement'],
  props: {
    ...ProductPropsMixin,
    countInCart: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(props, { emit }) {
    const increment = () => emit('increment', props.id)
    const decrement = () => emit('decrement', props.id)
    const isDisabled = computed<boolean>(() => {
      return props.countInCart >= props.count
    })
    return { increment, decrement, isDisabled }
  }
})
</script>
