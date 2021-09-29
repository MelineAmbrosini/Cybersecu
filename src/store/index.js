import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import ingredients from "./modules/ingredients";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, ingredients },
  plugins: [
    createPersistedState({ paths: ["auth"], storage: window.sessionStorage }),
  ],
});
