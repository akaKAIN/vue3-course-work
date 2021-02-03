import {createStore, GetterTree} from 'vuex';
import { RootState } from '@/models/store.model';

const state: RootState = { message: null };

const getters: GetterTree<RootState, RootState> = {
  message: (state: RootState) => state.message
};

export default createStore({
  state,
  getters,
  mutations: {},
  actions: {},
  modules: {}
});
