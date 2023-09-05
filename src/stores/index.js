import { configureStore } from "@reduxjs/toolkit";

import userLoginReducer from "./slices/userLogin.slice";
import productReducer from "./slices/product.slice";
import cartsReducer from "./slices/cart.slice";

const store = configureStore({
  reducer: {
    userLoginStore: userLoginReducer,
    productStore: productReducer,
    cartsLocalStore: cartsReducer,
  },
});
export default store;
