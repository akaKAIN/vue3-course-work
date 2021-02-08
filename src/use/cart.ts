import { CommonObject, Product } from '@/models/base.model'
import { computed } from 'vue'
import { useStore } from 'vuex'

type CartType = CommonObject<number>

export function useCart() {
  const store = useStore()
  const products = computed<Product[]>(() => store.getters['products/products'])
  const cart = computed<CartType>(() => store.getters['cart/cart'])

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

  const incrementCartProduct = (id: string) => {
    store.commit('cart/incrementCartProduct', { id, step: 1 })
  }
  const decrementCartProduct = (id: string): void => {
    if (cart.value) {
      cart.value[id] > 1 ? cart.value[id]-- : removeID(id)
    }
  }

  const countFromCart = (productID: string): number => {
    console.log('cart', cart.value)
    return cart.value && cart.value[productID] ? cart.value[productID] : 0
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
