import axios from "./api";

export default {
  async fetchIngredients() {
    return await axios.get(
      `${process.env.VUE_APP_API_URL}/ms-ingredient/ingredients`
    );
  },
};
