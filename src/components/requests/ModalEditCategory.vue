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
      Редактировать
    </button>
    <button class="btn warning" type="submit" @click="closeEdit">
      Отменить
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCategoryForm } from '@/use/forms/category-form'
import { SubmitCallback } from '@/models/form.model'
import { useStore } from 'vuex'
import { Category } from '@/models/base.model'

export default defineComponent({
  name: 'ModalEditCategory',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const category: Category = store.getters['products/categoryByID'](props.id)
    const onEditCategory: SubmitCallback = (
      values: Record<string, string | number>
    ) => {
      console.log('edit: ', values)
    }
    const {
      isSubmitting,
      omSubmit,
      title,
      titleBlur,
      titleError,
      type,
      typeBlur,
      typeError
    } = useCategoryForm(onEditCategory)

    title.value = category.title
    type.value = category.type
    const closeEdit = async () => {
      await store.dispatch('turnOffModal')
    }

    return {
      closeEdit,
      isSubmitting,
      omSubmit,
      title,
      titleBlur,
      titleError,
      type,
      typeBlur,
      typeError
    }
  }
})
</script>
