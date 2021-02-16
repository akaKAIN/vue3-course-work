<template>
  <teleport to="body">
    <app-modal v-if="modal" :title="currentTitle" @close="close">
      <component
        :is="'modal-' + currentModal + '-product'"
        v-bind="modalProps"
      ></component>
    </app-modal>
  </teleport>

  <app-page title="Admin products">
    <template #header>
      <button class="btn primary" @click="openModal('create')">
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
            <button class="btn" @click="openModal('edit', product.id)">
              Редактировать
            </button>
            <button class="btn warning">&times;</button>
          </td>
        </tr>
      </tbody>
    </table>
  </app-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import AppPage from '@/components/ui/AppPage.vue'
import AppModal from '@/components/ui/AppModal.vue'
import ModalCreateProduct from '@/components/requests/ModalCreateProduct.vue'
import ModalEditProduct from '@/components/requests/ModalEditProduct.vue'
import { useStore } from 'vuex'
import {
  EnumModalTitle,
  IdentifiedObject,
  TitleKeys
} from '@/models/base.model'

export default defineComponent({
  name: 'AdminProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    AppPage,
    AppModal,
    ModalCreateProduct,
    ModalEditProduct
  },
  setup() {
    const store = useStore()
    const currentModal = ref<string>('')
    const currentTitle = ref<string>(EnumModalTitle['default'])
    const modalProps = ref<IdentifiedObject | null>(null)
    const modal = computed<boolean>(() => store.getters['isModalVisible'])
    const openModal = async (command: TitleKeys, id?: string) => {
      if (id) {
        modalProps.value = { id }
      }
      currentModal.value = command
      currentTitle.value = `${EnumModalTitle[command]} продукт`
      await store.dispatch('turnOnModal', null)
    }

    const close = async () => await store.dispatch('turnOffModal')

    return { openModal, currentModal, currentTitle, modalProps, modal, close }
  }
})
</script>
