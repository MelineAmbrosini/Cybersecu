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
    ADD_INGREDIENT(state, ingredient) {
      state.ingredients.push(ingredient);
    },
    SET_INGREDIENT: (state, ingredient) => {
      const index = state.ingredients.findIndex(
        (ing) => ing.id === ingredient.id
      );
      if (index !== -1) {
        state.ingredients[index].name = ingredient.name;
        state.ingredients[index].description = ingredient.description;
      }
    },
    SET_INGREDIENTS: (state, data) => {
      state.ingredients = data;
    },
    REMOVE_INGREDIENT: (state, id) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== id
      );
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    updateIngredient: async ({ commit }, ingredient) => {
      await ingredientService.updateIngredient(ingredient);
      commit("SET_INGREDIENT", ingredient);
    },
    createIngredient: async ({ commit }, ingredient) => {
      const response = await ingredientService.createIngredient(ingredient);
      commit("ADD_INGREDIENT", response.data);
    },
    deleteIngredient: async ({ commit }, id) => {
      await ingredientService.deleteIngredient(id);
      commit("REMOVE_INGREDIENT", id);
    },
    fetchIngredients: async ({ commit }) => {
      const response = await ingredientService.fetchIngredients();
      const ingredients = response.data;

      commit("SET_INGREDIENTS", ingredients);
    },
  },
};

export default authModule;
