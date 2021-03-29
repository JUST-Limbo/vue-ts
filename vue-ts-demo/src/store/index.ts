import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { IAboutState } from './module/about'

interface IRootState {
  about: IAboutState
}

export default new Vuex.Store<IRootState>({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
