import axios from "./api";

export default {
  async createModel(model) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}/ms-model/models`,
      model
    );
  },
  async updateModel(model) {
    return axios.put(
      `${process.env.VUE_APP_API_URL}/ms-model/models/${model.id}`,
      model
    );
  },
  async deleteModel(modelId) {
    return await axios.delete(
      `${process.env.VUE_APP_API_URL}/ms-model/models/${modelId}`
    );
  },
  async fetchModels() {
    return await axios.get(
      `${process.env.VUE_APP_API_URL}/ms-model/models`
    );
  },
};
