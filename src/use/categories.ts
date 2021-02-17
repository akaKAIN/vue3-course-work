import { fetchCategories } from '@/fetch/categories.fetch'

export async function useCategories() {
  const { categories, request } = fetchCategories()
  await request()
  return { categories }
}
