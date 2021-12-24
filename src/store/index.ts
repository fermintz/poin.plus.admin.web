import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from 'vuex-class-component';
import { UserStore } from './user.vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { ...extractVuexModule(UserStore) },
});

export const vmx = {
  user: createProxy(store, UserStore),
};

export default store;
