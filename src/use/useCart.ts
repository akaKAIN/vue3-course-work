import { CommonObject } from '@/models/base.model'
import { computed, ref } from 'vue'

type CartType = CommonObject<number>

export function useCart(cartObject: CartType) {
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

  return { cart, isCartEmpty, incrementCartProduct, decrementCartProduct }
}
