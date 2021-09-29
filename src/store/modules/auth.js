import authService from "../../services/authService";
import jwt from "jsonwebtoken";

const getDefaultState = () => {
  return {
    jwtToken: "",
    infos: {},
  };
};

const authModule = {
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => {
      return state.jwtToken != "";
    },
    getToken: (state) => {
      return state.jwtToken;
    },
    getInfos: (state) => {
      return state.infos;
    },
  },
  mutations: {
    SET_TOKEN_INFO: (state, data) => {
      state.jwtToken = data.jwtToken;
      state.infos = data.infos;
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    login: async ({ commit }, { credentials }) => {
      const response = await authService.login(credentials);
      const token = response.data.token;
      const data = {
        jwtToken: token,
        infos: jwt.decode(token),
      };

      commit("SET_TOKEN_INFO", data);
    },

    logout: ({ commit }) => {
      commit("RESET", "");
    },
  },
};

export default authModule;
