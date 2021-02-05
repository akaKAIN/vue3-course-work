import { CartState, RootState } from '@/models/store.model'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'

const state: CartState = { cart: {}, totalAmount: 0 }

const getters: GetterTree<CartState, RootState> = {
  totalAmount: (state: CartState) => state.totalAmount
}

const mutations: MutationTree<CartState> = {
  setTotalAmount: (state: CartState, amount: number) =>
    (state.totalAmount = amount)
}

const actions: ActionTree<CartState, RootState> = {
  setTotalAmount: ({ commit }, amount: number) =>
    commit('setTotalAmount', amount)
}

const namespaced = true
export const cart: Module<CartState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
