import { ActionTree, createStore, GetterTree, MutationTree } from 'vuex'
import { RootState } from '@/models/store.model'
import { products } from '@/store/modules/products'
import { cart } from '@/store/modules/cart'

const state: RootState = { message: null }

const getters: GetterTree<RootState, RootState> = {
  message: (state: RootState) => state.message
}

const mutations: MutationTree<RootState> = {
  setMessage: (state: RootState, message: string) => (state.message = message),
  clearMessage: (state: RootState) => (state.message = null)
}

const actions: ActionTree<RootState, RootState> = {
  setMessage: ({ commit }, message: string) => commit('setMessage', message),
  clearMessage: ({ commit }) => commit('clearMessage')
}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: { products, cart }
})
