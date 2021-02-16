import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import { chunk } from '@/utils/chunk'

export const ADMIN_PRODUCT_PAGINATION_SIZE = 10
export const ADMIN_CATEGORY_PAGINATION_SIZE = 4
export const SHOP_PRODUCTS_PAGINATION_SIZE = 9

export function usePagination<T>(ArrayItem: Array<T>, paginationSize: number) {
  const route = useRoute()
  const router = useRouter()
  const page = computed<number>(() =>
    route.query.page ? +route.query.page : 1
  )
  const addQueryPage = async (queryPageNum: number) =>
    await router.replace({ query: { page: queryPageNum } })
  const paginatedArray = computed<Array<T>>(
    () => chunk<T>(ArrayItem, paginationSize)[page.value - 1]
  )
  const bindingPageNumber = ref<number>(page.value)
  watch(bindingPageNumber, (newQueryPageValue: number) =>
    addQueryPage(newQueryPageValue)
  )
  addQueryPage(bindingPageNumber.value)

  return {
    paginatedArray,
    bindingPageNumber
  }
}
