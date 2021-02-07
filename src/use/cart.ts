import { CommonObject, Product } from '@/models/base.model'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

type CartType = CommonObject<number>

export function useCart(cartObject: CartType) {
  const store = useStore()
  const products = computed<Product[]>(() => store.getters['products/products'])
  const cart = ref<CartType>(cartObject)

  const isCartEmpty = computed<boolean>(
    () => Object.keys(cart.value).length === 0
  )

  const removeID = (id: string): void => {
    delete cart.value[id]
  }

  const incrementCartProduct = (id: string): void => {
    cart.value[id]++
  }
  const decrementCartProduct = (id: string): void => {
    cart.value[id] > 1 ? cart.value[id]-- : removeID(id)
  }

  const totalAmount = computed<number>(() => {
    if (cart.value) {
      return products.value
        .filter((product: Product) => cart.value[product.id])
        .reduce(
          (accum: number, next: Product) =>
            accum + next.price * cart.value[next.id],
          0
        )
    }
    return 0
  })

  return {
    cart,
    isCartEmpty,
    incrementCartProduct,
    decrementCartProduct,
    totalAmount
  }
}
