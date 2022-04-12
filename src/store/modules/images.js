import api from '../../api/imgur';

const state = {
  images: [],
};

const getters = {
  allImages: state => state.images,
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

const actions = {
  fetchImages: async ({ commit, rootState }) => {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
