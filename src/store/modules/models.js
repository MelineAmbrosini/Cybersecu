import modelService from "../../services/modelService";

const getDefaultState = () => {
  return {
    models: [],    
  };
};

const authModule = {
  state: getDefaultState(),
  getters: {
    getModels: (state) => {
      return state.models;
    },
  },
  mutations: {
    ADD_MODEL(state, model) {
      state.models.push(model);
    },
    SET_MODEL: (state, model) => {
      const index = state.models.findIndex(
        (mod) => mod.id === model.id
      );
      if (index !== -1) {
        state.models[index].name = model.name;
        state.models[index].description = model.description;
        state.models[index].price = model.price;
        state.models[index].range = model.range;        
      }
    },
    SET_MODELS: (state, data) => {
      state.models = data;
    },
    REMOVE_MODEL: (state, id) => {
      state.models = state.models.filter(
        (model) => model.id !== id
      );
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    updateModel: async ({ commit }, model) => {
      await modelService.updateModel(model);
      commit("SET_MODEL", model);
    },
    createModel: async ({ commit }, model) => {
      const response = await modelService.createModel(model);
      commit("ADD_MODEL", response.data);
    },
    deleteModel: async ({ commit }, id) => {
      await modelService.deleteModel(id);
      commit("REMOVE_MODEL", id);
    },
    fetchModels: async ({ commit }) => {
      const response = await modelService.fetchModels();
      const models = response.data;

      commit("SET_MODELS", models);
    },
  },
};

export default authModule;
