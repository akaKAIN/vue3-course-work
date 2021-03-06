import { Product } from '@/models/base.model'
import { fetchProducts } from '@/fetch/products.fetch'
import { computed } from 'vue'

export async function useProducts() {
  const { products, request } = fetchProducts()
  await request()
  const removeProduct = (id: string): void => {
    if (products.value) {
      const ind: number = products.value.findIndex(
        (prod: Product) => prod.id === id
      )
      products.value.splice(ind, 1)
    }
  }

  const subtractProduct = (id: string): void => {
    if (products.value) {
      products.value.find((prod: Product) => {
        if (prod.id === id) {
          if (prod.count <= 1) {
            removeProduct(id)
          } else {
            prod.count--
          }
        }
      })
    }
  }

  const addProduct = (id: string): void => {
    if (products.value) {
      products.value.find((prod: Product) => {
        if (prod.id === id) {
          prod.count++
        }
      })
    }
  }

  const totalAmount = computed<number>(() => {
    if (products.value) {
      const reducer = (accum: number, product: Product): number =>
        accum + product.count * product.price
      return products.value.reduce(reducer, 0)
    }
    return 0
  })

  const prepareProducts = () => {
    if (products.value) {
      // Сортировка по имени товара
      products.value.sort((a: Product, b: Product) => {
        if (a.title > b.title) {
          return 1
        }
        if (a.title < b.title) {
          return -1
        }
        if (a.title === b.title) {
          return 0
        }
        return 0
      })

      // Сортировка товаров в конец списка, если их нет на складе (кол-во равно 0)
      products.value.sort((a: Product, b: Product) => {
        if (a.count === 0) {
          return 1
        }
        if (b.count === 0) {
          return -1
        }
        if (a.count === 0 && b.count === 0) {
          return 0
        }
        return 0
      })
    }
  }

  prepareProducts()

  return { products, addProduct, subtractProduct, totalAmount }
}
