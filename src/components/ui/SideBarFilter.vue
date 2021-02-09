<template>
  <div class="products-filter">
    <form @submit.prevent="onSearch">
      <div class="form-control">
        <label for="search"></label>
        <input
          id="search"
          type="text"
          placeholder="Найти товар..."
          v-model="searchText"
          @blur="sBlur"
        />
        <span class="form-control-clear" v-if="searchText" @click="clear"
          >&times;</span
        >
      </div>
    </form>

    <ul class="list">
      <li class="list-item">
        <router-link :to="{ name: 'home' }">Все </router-link>
      </li>
      <li
        class="list-item"
        v-for="category in categories"
        :key="category.title"
      >
        <router-link
          :to="{ name: 'home', query: { category: category.type } }"
          exact
          >{{ category.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Category } from '@/models/base.model'
import { useSearchFilterForm } from '@/use/forms/search-filter-form'

export default defineComponent({
  name: 'SideBarFilter',
  setup() {
    const store = useStore()
    const categories = computed<Category[]>(
      () => store.getters['products/categories']
    )

    return { ...useSearchFilterForm(), categories }
  }
})
</script>
