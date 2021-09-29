import axios from "./api";

export default {
  async login(credentials) {
    return await axios.post(
      `${process.env.VUE_APP_API_URL}/ms-auth/login`,
      credentials
    );
  },
};
