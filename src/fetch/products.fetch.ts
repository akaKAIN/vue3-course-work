import { ref } from 'vue'
import { BaseProduct, Product, Unformatted } from '@/models/base.model'
import ApiService from '@/services/api.service'
import { formatResponseElem } from '@/utils/formatter'
import { AxiosResponse } from 'axios'

export function fetchProducts() {
  const apiService = new ApiService()
  const products = ref<Product[] | null>(null)
  const request = async () => {
    const {
      data
    }: AxiosResponse<Unformatted<BaseProduct>> = await apiService.getProducts()

    products.value = formatResponseElem<BaseProduct, Product>(data)
  }

  return { products, request }
}
