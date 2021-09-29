import ingredientService from "../../services/ingredientService";

const getDefaultState = () => {
  return {
    ingredients: [],
  };
};

const authModule = {
  state: getDefaultState(),
  getters: {
    getIngredients: (state) => {
      return state.ingredients;
    },
  },
  mutations: {
    SET_INGREDIENTS: (state, data) => {
      state.ingredients = data;
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    fetchIngredients: async ({ commit }) => {
      const response = await ingredientService.fetchIngredients();
      const ingredients = response.data;

      commit("SET_INGREDIENTS", ingredients);
    },
  },
};

export default authModule;
