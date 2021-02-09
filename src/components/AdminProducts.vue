<template>
  <app-page title="Admin products">
    <table class="table">
      <thead>
        <tr>
          <th>Идентификатор</th>
          <th>Наименование</th>
          <th>Категория</th>
          <th>Стоимость</th>
          <th>Количество</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.count }}</td>
        </tr>
      </tbody>
    </table>
  </app-page>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import AppPage from './ui/AppPage.vue'
import { useStore } from 'vuex'
import { Product } from '@/models/base.model'

export default defineComponent({
  name: 'AdminProducts',
  components: { AppPage },
  setup() {
    const store = useStore()
    const products = computed<Product[]>(() => {
      return store.getters['products/products']
    })

    return { products }
  }
})
</script>
