import { CartState, RootState } from '@/models/store.model'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { CommonObject } from '@/models/base.model'

export const localStorageKeyNameCart = 'userCart'
let userCart: CommonObject<number> = {}
const userCartString: string | null = localStorage.getItem(
  localStorageKeyNameCart
)

userCart = userCartString ? JSON.parse(userCartString) : {}

const state: CartState = { cart: userCart }

const getters: GetterTree<CartState, RootState> = {
  cart: (state: CartState) => state.cart
}

const mutations: MutationTree<CartState> = {
  setCart: (state: CartState, cart: CommonObject<number>) =>
    (state.cart = cart),
  incrementCartProduct: (
    state: CartState,
    item: { id: string; step: number }
  ) =>
    (state.cart[item.id] = state.cart[item.id]
      ? state.cart[item.id] + item.step
      : item.step),
  decrementCartProduct: (
    state: CartState,
    item: { id: string; step: number }
  ) => (state.cart[item.id] -= item.step)
}

const actions: ActionTree<CartState, RootState> = {
  incrementCartProduct: ({ commit }, item: { id: string; step: number }) =>
    commit('incrementCartItem', item),
  decrementCartProduct: ({ commit }, item: { id: string; step: number }) =>
    commit('decrementCartItem', item)
}

const namespaced = true
export const cart: Module<CartState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
