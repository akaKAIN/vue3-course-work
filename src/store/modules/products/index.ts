import { ProductState, RootState } from '@/models/store.model'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { Category, Product } from '@/models/base.model'

const state: ProductState = { products: [], categories: [] }

const getters: GetterTree<ProductState, RootState> = {
  products: (state: ProductState) => state.products,
  categories: (state: ProductState) => state.categories
}

const mutations: MutationTree<ProductState> = {
  setProducts: (state: ProductState, products: Product[]) =>
    (state.products = products),
  setCategories: (state: ProductState, categories: Category[]) =>
    (state.categories = categories)
}

const actions: ActionTree<ProductState, RootState> = {
  setProducts: ({ commit }, products: Product[]) =>
    commit('setProducts', products),
  setCategories: ({ commit }, categories: Category[]) =>
    commit('setCategories', categories)
}

const namespaced = true
export const products: Module<ProductState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
