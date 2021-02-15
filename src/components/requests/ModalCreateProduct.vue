<template>
  <form @submit.prevent>
    <div class="form-control">
      <label for="title">Product title</label>
      <input type="text" id="title" v-model="title" @blur="tBlur" />
      <small class="text-danger" v-if="tError">{{ tError }}</small>
    </div>

    <div class="form-control">
      <label for="image">Image url</label>
      <input type="text" id="image" v-model="image" @blur="iBlur" />
      <small class="text-danger" v-if="iError">{{ iError }}</small>
    </div>

    <div class="form-control">
      <label for="category">Category</label>
      <select id="category" v-model="category">
        <option v-for="cat in categories" :key="cat.id" :value="cat.type">
          {{ cat.title }}
        </option>
      </select>
      <small class="text-danger" v-if="catError">{{ catError }}</small>
    </div>
    <div class="form-control">
      <label for="price">Product price</label>
      <input type="number" id="price" v-model="price" @blur="pBlur" />
      <small class="text-danger" v-if="pError">{{ pError }}</small>
    </div>
    <div class="form-control">
      <label for="count">Product count</label>
      <input type="number" id="count" v-model="count" @blur="cBlur" />
      <small class="text-danger" v-if="cError">{{ cError }}</small>
    </div>

    <button class="btn primary" type="submit" @click="onSubmit">
      Добавить
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCreateProductForm } from '@/use/forms/create-product-form'
import { useStore } from 'vuex'
import { MessageObject } from '@/models/base.model'

export default defineComponent({
  name: 'ModalCreateProduct',
  setup() {
    const store = useStore()
    const categories = computed(() => store.getters['products/categories'])

    // TODO: submit func for create product
    const submitFn = async (values: Record<string, number | string>) => {
      console.log('create product', values)
      const message: MessageObject = {
        title: 'Success',
        text: `Product ${values.title} was added`,
        level: 'primary'
      }
      await store.dispatch('setMessage', message)
    }
    return {
      categories,
      ...useCreateProductForm(submitFn)
    }
  }
})
</script>
