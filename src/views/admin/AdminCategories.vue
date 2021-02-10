<template>
  <app-page title="Категории продуктов">
    <template #header>
      <button class="btn primary" @click="showModal('create-category')">
        Добавить
      </button>
    </template>

    <teleport to="body">
      <app-modal :title="currentTitle" v-if="modal" @close="closeModal">
        <component
          :is="'modal-' + currentModal"
          v-bind="modalProps"
        ></component>
      </app-modal>
    </teleport>
    <table class="table">
      <thead>
        <tr>
          <th>Идентификатор</th>
          <th>Наименование</th>
          <th>Тип</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.title }}</td>
          <td>{{ category.type }}</td>
          <td>
            <button
              class="btn"
              type="button"
              @click="showModal('edit-category', category.id)"
            >
              Редактировать
            </button>
            <button
              class="btn warning"
              type="button"
              @click="showModal('delete-category', category.id)"
            >
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </app-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import {
  Category,
  IdentifiedObject,
  EnumModalTitle,
  TitleKeys
} from '@/models/base.model'
import AppPage from '@/components/ui/AppPage.vue'
import AppModal from '@/components/ui/AppModal.vue'
import ModalCreateCategory from '@/components/requests/ModalCreateCategory.vue'
import ModalEditCategory from '@/components/requests/ModalEditCategory.vue'

export default defineComponent({
  name: 'AdminCategories',
  components: { AppModal, AppPage, ModalCreateCategory, ModalEditCategory },
  setup() {
    const store = useStore()
    const modal = computed<boolean>(() => store.getters['isModalVisible'])
    const currentModal = ref<string>('')
    const currentTitle = ref<string>(EnumModalTitle['default'])
    const modalProps = ref<IdentifiedObject>({})

    const showModal = async (command: TitleKeys, id?: string) => {
      currentModal.value = command
      currentTitle.value = EnumModalTitle[command]
      if (id) {
        modalProps.value.id = id
      }
      await store.dispatch('turnOnModal')
    }

    const closeModal = async () => {
      await store.dispatch('turnOffModal')
      currentModal.value = ''
      currentTitle.value = ''
    }

    const categories = computed<Category[]>(() => {
      return store.getters['products/categories']
    })

    return {
      modal,
      currentModal,
      currentTitle,
      modalProps,
      showModal,
      closeModal,
      categories
    }
  }
})
</script>
