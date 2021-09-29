import axios from "./api";

export default {
  async createIngredient(ingredient) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}/ms-ingredient/ingredients`,
      ingredient
    );
  },
  async updateIngredient(ingredient) {
    return axios.put(
      `${process.env.VUE_APP_API_URL}/ms-ingredient/ingredients/${ingredient.id}`,
      ingredient
    );
  },
  async deleteIngredient(ingredientId) {
    return await axios.delete(
      `${process.env.VUE_APP_API_URL}/ms-ingredient/ingredients/${ingredientId}`
    );
  },
  async fetchIngredients() {
    return await axios.get(
      `${process.env.VUE_APP_API_URL}/ms-ingredient/ingredients`
    );
  },
};
