import { ref } from 'vue'
import { Product } from '@/models/base.model'
import ApiService from '@/services/api.service'
import { AxiosResponse } from 'axios'

export function fetchCartProducts() {
  const apiService = new ApiService()
  const products = ref<Product[] | null>(null)
  const request = async () => {
    const response: AxiosResponse<Product[]> = await apiService.getCartProducts()
    products.value = response.data
  }

  return { products, request }
}
