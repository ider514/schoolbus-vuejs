import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store(
  {
    state: {
      auth: false,
      admin: false,
    },
    mutations: {
      setAuth(state, status) {
        state.auth = status;
      },
      setAdmin(state, status) {
        state.admin = status;
      },
    },
  },
);

export default store;
