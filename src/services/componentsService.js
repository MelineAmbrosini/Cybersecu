import axios from "./api";

export default {
  async createComponent(component) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}/ms-component/components`,
      component
    );
  },
  async updateComponent(component) {
    return axios.put(
      `${process.env.VUE_APP_API_URL}/ms-component/components/${component.id}`,
      component
    );
  },
  async deleteComponent(componentId) {
    return await axios.delete(
      `${process.env.VUE_APP_API_URL}/ms-component/components/${componentId}`
    );
  },
  async fetchComponents() {
    return await axios.get(
      `${process.env.VUE_APP_API_URL}/ms-component/components`
    );
  },
};
