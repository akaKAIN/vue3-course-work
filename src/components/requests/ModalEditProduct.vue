<template>
  <form @submit.prevent>
    <div class="form-control">
      <label for="title">Product title</label>
      <input type="text" id="title" v-model="title" @blur="tBlur" />
      <small class="text-danger" v-if="tError">{{ tError }}</small>
    </div>
    <div class="form-control">
      <label for="image">Image URL</label>
      <input type="text" id="image" v-model="image" @blur="iBlur" />
      <small class="text-danger" v-if="iError">{{ iError }}</small>
    </div>
    <div class="form-control">
      <label for="category">Category</label>
      <select id="category" v-model="category" @blur="catBlur">
        <option v-for="cat in categories" :key="cat.id" :value="cat.type">
          {{ cat.title }}
        </option>
      </select>
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

    <button class="btn primary">G</button>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCreateProductForm } from '@/use/forms/create-product-form'
import { Category, MessageObject, Product } from '@/models/base.model'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ModalEditProduct',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const submitFn = async (values: Record<string, string | number>) => {
      console.log('edited product:', values)

      const message: MessageObject = {
        title: 'Success',
        text: `Product: ${values.title} was changed`,
        level: 'primary'
      }
      await store.dispatch('setMessage', message)
    }
    const categories = computed<Category[]>(
      () => store.getters['products/categories']
    )
    const oldProduct = computed<Product>(() =>
      store.getters['products/productByID'](props.id)
    )

    const productForm = useCreateProductForm(submitFn)

    productForm.title.value = oldProduct.value.title
    productForm.image.value = oldProduct.value.img
    productForm.category.value = oldProduct.value.category
    productForm.price.value = oldProduct.value.price
    productForm.count.value = oldProduct.value.count

    return {
      categories,
      ...productForm
    }
  }
})
</script>
