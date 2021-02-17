import ApiService from '@/services/api.service'
import { BaseCategory, Category, Unformatted } from '@/models/base.model'
import { ref } from 'vue'
import { AxiosResponse } from 'axios'
import { formatResponseElem } from '@/utils/formatter'

export function fetchCategories() {
  const apiService = new ApiService()
  const categories = ref<Category[] | null>(null)

  const request = async () => {
    const {
      data
    }: AxiosResponse<Unformatted<
      BaseCategory
    >> = await apiService.getCategoryProducts()
    categories.value = formatResponseElem<BaseCategory, Category>(data)
  }
  return { categories, request }
}
