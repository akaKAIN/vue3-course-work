<template>
  <div class="product-card">
    <div class="product-img">
      <img :src="img" :alt="title" />
    </div>
    <h4 class="product-title">{{ title }}</h4>
    <div class="text-center">
      <button
        class="btn"
        v-if="!countInCart"
        :disabled="!count"
        @click="increment"
      >
        {{ price }}
      </button>
      <div class="product-controls" v-else>
        <button class="btn danger" @click="decrement">-</button>
        <strong>{{ countInCart }}</strong>
        <button class="btn primary" @click="increment" :disabled="isDisabled">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ProductPropsMixin from '@/mixins/ProductProps'

export default defineComponent({
  name: 'CardProduct',
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
