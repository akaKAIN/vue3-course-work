import { AuthState, RootState } from '@/models/store.model'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { SubmitValues } from '@/models/form.model'
import ApiAuthService from '@/services/apiAuth.service'
import { MessageObject } from '@/models/base.model'
import Message from '@/utils/message'

const apiAuthService = new ApiAuthService()

const state: AuthState = { token: localStorage.getItem('token') }

const getters: GetterTree<AuthState, RootState> = {
  token: (state: AuthState) => state.token,
  isAuthenticated: (state: AuthState) => !!state.token
}

const mutations: MutationTree<AuthState> = {
  setToken: (state: AuthState, token: string) => {
    state.token = token
    localStorage.setItem('token', token)
  }
}

const actions: ActionTree<AuthState, RootState> = {
  setToken: ({ commit }, token: string) => commit('setToken', token),
  login: async ({ commit }, loginData: SubmitValues) => {
    try {
      const response = await apiAuthService.loginUser(loginData)
      console.log(response)
    } catch (err) {
      console.log('error', err)
      const message = new Message('Login Error:', err, 'danger')
      // const message: MessageObject = {
      //   title: 'Login Error:',
      //   text: err,
      //   level: 'danger'
      // }
      // await dispatch('setMessage', message, { root: true })
      await message.show()
    }
  }
}

const namespaced = true
export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
