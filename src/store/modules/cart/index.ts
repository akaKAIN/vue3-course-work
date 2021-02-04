import { CartState, RootState } from '@/models/store.model';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

const state: CartState = { cart: {} };

const getters: GetterTree<CartState, RootState> = {};

const mutations: MutationTree<CartState> = {};

const actions: ActionTree<CartState, RootState> = {};

const namespaced = true;
export const cart: Module<CartState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
