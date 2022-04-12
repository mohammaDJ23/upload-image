import api from '../../api/imgur';
import { router } from '../../main';

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

  uploadImages: async ({ rootState }, images) => {
    const { token } = rootState.auth;
    await api.uploadImages(images, token);
    router.push('/');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
