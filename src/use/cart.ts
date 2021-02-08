import { CommonObject, Product } from '@/models/base.model'
import { computed } from 'vue'
import { useStore } from 'vuex'

type CartType = CommonObject<number>

export function useCart() {
  const store = useStore()
  const products = computed<Product[]>(() => store.getters['products/products'])
  const cart = computed<CartType>(() => store.getters['cart/products'])

  const isCartEmpty = computed<boolean>(() => {
    if (cart.value) {
      return Object.keys(cart.value).length === 0
    } else {
      return true
    }
  })

  const removeID = (id: string): void => {
    delete cart.value[id]
  }

  const incrementCartProduct = (id: string): void => {
    if (cart.value) {
      cart.value[id]++
    }
  }
  const decrementCartProduct = (id: string): void => {
    if (cart.value) {
      cart.value[id] > 1 ? cart.value[id]-- : removeID(id)
    }
  }

  const countFromCart = (productID: string): number => {
    if (cart.value && cart.value[productID]) {
      return cart.value[productID]
    }
    return 0
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
    getCountFromCart: countFromCart,
    totalAmount
  }
}
