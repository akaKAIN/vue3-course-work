<template>
  <form @submit.prevent>
    <div class="form-control">
      <label for="title">Product title</label>
      <input type="text" id="title" v-model="title" @blur="tBlur" />
      <small class="text-danger" v-if="tError">{{ tError }}</small>
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

    <button class="btn primary" type="submit">
      Добавить
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCreateProductForm } from '@/use/forms/create-product-form'

export default defineComponent({
  name: 'ModalCreateProduct',
  setup() {
    return { ...useCreateProductForm() }
  }
})
</script>
