import { ProductState, RootState } from '@/models/store.model'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { Product } from '@/models/base.model'

const state: ProductState = { products: [] }

const getters: GetterTree<ProductState, RootState> = {
  products: (state: ProductState) => state.products
}

const mutations: MutationTree<ProductState> = {
  setProducts: (state: ProductState, products: Product[]) =>
    (state.products = products)
}

const actions: ActionTree<ProductState, RootState> = {
  setProducts: ({ commit }, products: Product[]) =>
    commit('setProducts', products)
}

const namespaced = true
export const products: Module<ProductState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
