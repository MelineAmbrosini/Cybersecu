import store from "../store/index";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_URL_API;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    if (store.getters.isLoggedIn)
      config.headers.Authorization = `Bearer ` + store.getters.getToken;
    return config;
  },
  (err) => console.log(err)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function(err) {
    console.log(err);
    return Promise.reject(err);
  }
);

export default axios;
