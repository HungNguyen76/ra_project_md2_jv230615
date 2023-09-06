import axios from "axios";

export default {
  findAllProducts: () => {
    return axios.get(`${import.meta.env.VITE_API_URL}/products`);
  },
  filterProductByType: (type) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/products?type=${type}`);
  },
  filterProductByGender: (type) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/products?gender=${type}`);
  },
  searchProductByName: (name) => {
    return axios.get(
      `${import.meta.env.VITE_API_URL}/products?name_like=${name}`
    );
  },
  searchProductById: (id) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
  },
};
