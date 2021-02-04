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
      <tr v-for="product in products" :key="product.id">
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartProductTable',
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
});
</script>
