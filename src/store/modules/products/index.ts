import { ProductState, RootState } from '@/models/store.model'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'

const state: ProductState = { products: [] }

const getters: GetterTree<ProductState, RootState> = {}

const mutations: MutationTree<ProductState> = {}

const actions: ActionTree<ProductState, RootState> = {}

const namespaced = true
export const products: Module<ProductState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
