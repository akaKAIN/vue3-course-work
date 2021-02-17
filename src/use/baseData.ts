import { useStore } from 'vuex'
import { ref } from 'vue'
import { useProducts } from '@/use/products'
import { useCategories } from '@/use/categories'

export function useBaseData() {
  const store = useStore()
  const isLoading = ref<boolean>(false)

  const loadData = async () => {
    isLoading.value = true
    const { products } = await useProducts()
    await store.dispatch('products/setProducts', products.value)

    const { categories } = await useCategories()
    await store.dispatch('products/setCategories', categories.value)
    isLoading.value = false
  }

  return { isLoading, loadData }
}
