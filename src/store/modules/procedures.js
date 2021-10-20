import procedureService from "../../services/procedureService";

const getDefaultState = () => {
  return {
    procedures: [],
  };
};

const authModule = {
  state: getDefaultState(),
  getters: {
    getProcedures: (state) => {
      return state.procedures;
    },
  },
  mutations: {
    ADD_PROCEDURE(state, procedure) {
      state.procedures.push(procedure);
    },
    SET_PROCEDURE: (state, procedure) => {
      const index = state.procedures.findIndex(
        (proc) => proc.id === procedure.id
      );
      if (index !== -1) {
        state.procedures[index].name = procedure.name;
        state.procedures[index].description = procedure.description;
        state.procedures[index].model = procedure.model;
        state.procedures[index].steps = procedure.steps;
        state.procedures[index].val_description = procedure.val_description;
      }
    },
    SET_PROCEDURES: (state, data) => {
      state.procedures = data;
    },
    REMOVE_PROCEDURE: (state, id) => {
      state.procedures = state.procedures.filter(
        (procedure) => procedure.id !== id
      );
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    updateProcedure: async ({ commit }, procedure) => {
      await procedureService.updateProcedure(procedure);
      commit("SET_PROCEDURE", procedure);
    },
    createProcedure: async ({ commit }, procedure) => {
      const response = await procedureService.createProcedure(procedure);
      commit("ADD_PROCEDURE", response.data);
    },
    deleteProcedure: async ({ commit }, id) => {
      await procedureService.deleteProcedure(id);
      commit("REMOVE_PROCEDURE", id);
    },
    fetchProcedures: async ({ commit }) => {
      const response = await procedureService.fetchProcedures();
      const procedures = response.data;

      commit("SET_PROCEDURES", procedures);
    },
  },
};

export default authModule;
