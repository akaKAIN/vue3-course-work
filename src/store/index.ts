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
import { MessageObject } from '@/models/base.model'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

const MESSAGE_LIFE_TIME = 5000

const state: RootState = { message: null, isModalVisible: false }

const getters: GetterTree<RootState, RootState> = {
  message: (state: RootState) => state.message,
  isModalVisible: (state: RootState) => state.isModalVisible
}

const mutations: MutationTree<RootState> = {
  setMessage: (state: RootState, message: MessageObject | null) =>
    (state.message = message),
  toggleModal: (state: RootState, isVisible: boolean) =>
    (state.isModalVisible = isVisible)
}

const actions: ActionTree<RootState, RootState> = {
  setMessage: ({ commit }, message: MessageObject) => {
    commit('setMessage', message)
    setTimeout(() => commit('setMessage', null), MESSAGE_LIFE_TIME)
  },
  clearMessage: ({ commit }) => commit('setMessage', null),
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
