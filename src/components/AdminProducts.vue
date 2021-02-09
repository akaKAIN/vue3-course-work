<template>
  <teleport to="body">
    <app-modal
      v-if="isModalVisible"
      title="Добавить продукт"
      @close="isModalVisible = false"
    >
      <modal-create-product></modal-create-product>
    </app-modal>
  </teleport>

  <app-page title="Admin products">
    <template #header>
      <button class="btn primary" @click="isModalVisible = true">
        Add product
      </button>
    </template>
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
import { computed, defineComponent, ref } from 'vue'
import AppPage from './ui/AppPage.vue'
import { useStore } from 'vuex'
import { Product } from '@/models/base.model'
import AppModal from '@/components/ui/AppModal.vue'
import ModalCreateProduct from '@/components/requests/ModalCreateProduct.vue'

export default defineComponent({
  name: 'AdminProducts',
  components: { ModalCreateProduct, AppModal, AppPage },
  setup() {
    const store = useStore()
    const products = computed<Product[]>(() => {
      return store.getters['products/products']
    })

    const isModalVisible = ref<boolean>(false)

    return { products, isModalVisible: isModalVisible }
  }
})
</script>
