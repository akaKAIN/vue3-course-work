<template>
  <button class="btn" @click="show">Show models in console</button>
  <button type="button" class="btn danger" @click="createProducts">
    Перенос "Продуктов"
  </button>
  <button type="button" class="btn danger" @click="createCategory">
    Перенос "Категорий"
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import db from '../../../database.json'
import { Category, Product, CreationResponse } from '@/models/base.model'
import ApiService from '@/services/api.service'
import { AxiosResponse } from 'axios'

const apiService = new ApiService()

export default defineComponent({
  name: 'FillFB',
  setup() {
    const baseDB: {
      products: Product[]
      categories: Category[]
    } = JSON.parse().stringify(db)
    const { products, categories } = baseDB

    const createProducts = () => {
      try {
        products.forEach(async (product: Product) => {
          delete product.id
          const {
            data
          }: AxiosResponse<CreationResponse> = await apiService.createProduct(
            product
          )
          console.log('was created: ', data)
        })
      } catch (err) {
        console.error(err)
      }
    }

    const createCategory = () => {
      try {
        categories.forEach(async (category: Category) => {
          delete category.id
          const {
            data
          }: AxiosResponse<CreationResponse> = await apiService.createCategory(
            category
          )
          console.log('category was created: ', data)
        })
      } catch (err) {
        console.error(err)
      }
    }

    const show = () => {
      console.log('base products:', products)
      console.log('base categories:', categories)
    }
    return {
      createProducts,
      createCategory,
      show
    }
  }
})
</script>
