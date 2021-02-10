<template>
  <form @submit.prevent>
    <div class="form-control">
      <label for="title">Наменование категории</label>
      <input id="title" type="text" v-model="title" @blur="titleBlur" />
      <small class="text-danger" v-if="titleError">{{ titleError }}</small>
    </div>
    <div class="form-control">
      <label for="type">Тип категории</label>
      <input id="type" type="text" v-model="type" @blur="typeBlur" />
      <small class="text-danger" v-if="typeError">{{ typeError }}</small>
    </div>

    <button class="btn primary" type="submit" @click="omSubmit">
      Добавить
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCategoryForm } from '@/use/forms/category-form'

export default defineComponent({
  name: 'ModalCreateCategory',
  setup() {
    const CreateCategoryFn = (values: Record<string, number | string>) => {
      console.log('creating: ', values)
    }
    return { ...useCategoryForm(CreateCategoryFn) }
  }
})
</script>
