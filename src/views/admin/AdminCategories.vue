<template>
  <app-page title="Категории продуктов">
    <template #header>
      <button class="btn primary" @click="showModal('create')">
        Добавить
      </button>
    </template>

    <teleport to="body">
      <app-modal :title="currentTitle" v-if="modal" @close="closeModal">
        <component
          :is="'modal-' + currentModal + '-category'"
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
              @click="showModal('edit', category.id)"
            >
              Редактировать
            </button>
            <button
              class="btn warning"
              type="button"
              @click="showModal('delete', category.id)"
            >
              &times;
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </app-page>
  <the-pagination
    :count="allCategories.length"
    :size="size"
    v-model="pageNumber"
  ></the-pagination>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import {
  Category,
  EnumModalTitle,
  TitleKeys,
  IdentifiedObjectOptional
} from '@/models/base.model'
import AppPage from '@/components/ui/AppPage.vue'
import AppModal from '@/components/ui/AppModal.vue'
import ModalCreateCategory from '@/components/requests/ModalCreateCategory.vue'
import ModalEditCategory from '@/components/requests/ModalEditCategory.vue'
import ThePagination from '@/components/ui/ThePagination.vue'
import { usePagination, ADMIN_CATEGORY_PAGINATION_SIZE } from '@/use/pagination'

export default defineComponent({
  name: 'AdminCategories',
  components: {
    ThePagination,
    AppModal,
    AppPage,
    ModalCreateCategory,
    ModalEditCategory
  },
  setup() {
    const store = useStore()
    const modal = computed<boolean>(() => store.getters['isModalVisible'])
    const currentModal = ref<string>('')
    const currentTitle = ref<string>(EnumModalTitle['default'])
    const modalProps = ref<IdentifiedObjectOptional>({})

    const showModal = async (command: TitleKeys, id?: string) => {
      if (id) {
        modalProps.value.id = id
      }
      currentModal.value = command
      currentTitle.value = `${EnumModalTitle[command]} категорию`
      await store.dispatch('turnOnModal')
    }

    const closeModal = async () => {
      await store.dispatch('turnOffModal')
      currentModal.value = ''
    }

    const allCategories = computed<Category[]>(() => {
      return store.getters['products/categories']
    })

    const {
      paginatedArray: categories,
      bindingPageNumber: pageNumber
    } = usePagination(allCategories.value, ADMIN_CATEGORY_PAGINATION_SIZE)

    return {
      modal,
      currentModal,
      currentTitle,
      modalProps,
      showModal,
      closeModal,
      categories,
      allCategories,
      pageNumber,
      size: ADMIN_CATEGORY_PAGINATION_SIZE
    }
  }
})
</script>
