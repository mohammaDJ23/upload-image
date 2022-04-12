import qs from 'qs';
import api from '../../api/imgur';

const state = {
  token: window.localStorage.getItem('imgur_token'),
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },

  login: () => {
    api.login();
  },

  finalizeLogin: ({ commit }, hashUrl) => {
    const queries = qs.parse(hashUrl.replace('#', ''));

    commit('setToken', queries.access_token || null);
    window.localStorage.setItem('imgur_token', queries.access_token);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
