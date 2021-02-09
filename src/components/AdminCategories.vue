<template>
  <app-page title="Категории продуктов">
    <table class="table">
      <thead>
        <tr>
          <th>Идентификатор</th>
          <th>Наименование</th>
          <th>Тип</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.title }}</td>
          <td>{{ category.type }}</td>
        </tr>
      </tbody>
    </table>
  </app-page>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Category } from '@/models/base.model'
import AppPage from '@/components/ui/AppPage.vue'

export default defineComponent({
  name: 'AdminCategories',
  components: { AppPage },
  setup() {
    const store = useStore()
    const categories = computed<Category[]>(() => {
      return store.getters['products/categories']
    })

    return { categories }
  }
})
</script>
