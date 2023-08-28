import axios from "axios";

export default {
  findAllProducts: () => {
    return axios.get(import.meta.env.VITE_API_URL + "/products");
  }
};
