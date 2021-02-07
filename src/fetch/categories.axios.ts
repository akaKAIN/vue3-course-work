import ApiService from '@/services/api.service'
import { Category } from '@/models/base.model'
import { ref } from 'vue'

export function fetchCategories() {
  const apiService = new ApiService()
  const categories = ref<Category[] | null>(null)

  const request = async () => {
    const { data } = await apiService.getCategoryProducts()
    categories.value = data
  }
  return { categories, request }
}
