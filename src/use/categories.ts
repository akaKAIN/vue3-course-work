import { fetchCategories } from '@/fetch/categories.axios'

export async function useCategories() {
  const { categories, request } = fetchCategories()
  await request()
  return { categories }
}
