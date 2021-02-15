<template>
  <app-page title="Admin products">
    <template #header>
      <button class="btn primary" @click="openModal">
        Add product
      </button>
    </template>
    <table class="table" v-if="products">
      <thead>
        <tr>
          <th>Идентификатор</th>
          <th>Наименование</th>
          <th>Категория</th>
          <th>Стоимость</th>
          <th>Количество</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.count }}</td>
          <td>
            <button class="btn">Редактировать</button>
            <button class="btn warning">&times;</button>
          </td>
        </tr>
      </tbody>
    </table>
  </app-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppPage from '@/components/ui/AppPage.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AdminProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    AppPage
  },
  setup() {
    const store = useStore()
    const openModal = async () => await store.dispatch('turnOnModal')

    return { openModal }
  }
})
</script>
