import api from '../../api/imgur';

const state = {
  token: null,
};

const getters = {
  isLoggedId: state => !!state.token,
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  },

  login: () => {
    api.login();
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
