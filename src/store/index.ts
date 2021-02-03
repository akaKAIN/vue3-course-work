import { createStore } from 'vuex';
import { RootState } from '@/models/store.model';

const state: RootState = { message: null };

export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {}
});
