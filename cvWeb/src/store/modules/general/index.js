export default {
  state: {
    locale: null
  },
  mutations: {
    setLocale(state, payload) {
      state.locale = payload;
    }
  },
  actions: {
    setLocale({ commit }, payload) {
      commit("setLocale", payload);
    }
  },
  getters: {
    locale: state => state.locale
  },
}