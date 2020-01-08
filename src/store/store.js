import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store(
  {
    state: {
      client: false,
      admin: false,
      client_name: '',
      info: {},
    },
    mutations: {
      setInfo(state, response) {
        state.info = response;
      },
      setName(state, status) {
        state.client_name = status;
      },
      setClient(state, status) {
        state.client = status;
      },
      setAdmin(state, status) {
        state.admin = status;
      },
    },
  },
);

export default store;
