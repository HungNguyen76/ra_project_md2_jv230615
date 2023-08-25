import axios from "axios";

export default {
  findAllUser: () => {
    return axios.get(import.meta.env.VITE_API_URL + "/users");
  },
  createUser: (newUser) => {
    return axios.post(import.meta.env.VITE_API_URL + "/users", newUser);
  },
};
