import componentService from "../../services/componentService";

const getDefaultState = () => {
  return {
    components: [],    
  };
};

const authModule = {
  state: getDefaultState(),
  getters: {
    getComponents: (state) => {
      return state.components;
    },
  },
  mutations: {
    ADD_COMPONENT(state, component) {
      state.components.push(component);
    },
    SET_COMPONENT: (state, component) => {
      const index = state.components.findIndex(
        (comp) => comp.id === component.id
      );
      if (index !== -1) {
        state.components[index].ingredient = component.ingredient;
        state.components[index].weight = component.weight;
        state.components[index].model = component.model;
      }
    },
    SET_COMPONENTS: (state, data) => {
      state.components = data;
    },
    REMOVE_COMPONENT: (state, id) => {
      state.components = state.components.filter(
        (component) => component.id !== id
      );
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    updateComponent: async ({ commit }, component) => {
      await componentService.updateComponent(component);
      commit("SET_COMPONENT", component);
    },
    createComponent: async ({ commit }, component) => {
      const response = await componentService.createComponent(component);
      commit("ADD_COMPONENT", response.data);
    },
    deleteComponent: async ({ commit }, id) => {
      await componentService.deleteComponent(id);
      commit("REMOVE_COMPONENT", id);
    },
    fetchComponents: async ({ commit }) => {
      const response = await componentService.fetchComponents();
      const components = response.data;

      commit("SET_COMPONENTS", components);
    },
  },
};

export default authModule;
