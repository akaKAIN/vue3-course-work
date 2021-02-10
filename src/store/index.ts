import {
  ActionTree,
  createStore,
  GetterTree,
  MutationTree,
  createLogger
} from 'vuex'
import { RootState } from '@/models/store.model'
import { products } from '@/store/modules/products'
import { cart } from '@/store/modules/cart'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}
const state: RootState = { message: null, isModalVisible: false }

const getters: GetterTree<RootState, RootState> = {
  message: (state: RootState) => state.message,
  isModalVisible: (state: RootState) => state.isModalVisible
}

const mutations: MutationTree<RootState> = {
  setMessage: (state: RootState, message: string) => (state.message = message),
  clearMessage: (state: RootState) => (state.message = null),
  toggleModal: (state: RootState, isVisible: boolean) =>
    (state.isModalVisible = isVisible)
}

const actions: ActionTree<RootState, RootState> = {
  setMessage: ({ commit }, message: string) => commit('setMessage', message),
  clearMessage: ({ commit }) => commit('clearMessage'),
  turnOnModal: ({ commit }) => commit('toggleModal', true),
  turnOffModal: ({ commit }) => commit('toggleModal', false)
}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  plugins,
  modules: { products, cart }
})
