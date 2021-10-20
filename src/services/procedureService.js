import axios from "./api";

export default {
  async createProcedure(procedure) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}/ms-procedure/procedures`,
      procedure
    );
  },
  async updateProcedure(procedure) {
    return axios.put(
      `${process.env.VUE_APP_API_URL}/ms-procedure/procedures/${procedure.id}`,
      procedure
    );
  },
  async deleteProcedure(procedureId) {
    return await axios.delete(
      `${process.env.VUE_APP_API_URL}/ms-procedure/procedures/${procedureId}`
    );
  },
  async fetchProcedures() {
    return await axios.get(
      `${process.env.VUE_APP_API_URL}/ms-procedure/procedures`
    );
  },
};
