import { configureStore } from "@reduxjs/toolkit";

import userLoginReducer from './slices/userLogin.slice'
import productReducer from "./slices/product.slice";


const store = configureStore({
    reducer: {
        userLoginStore: userLoginReducer,
        productStore: productReducer
    }
})
export default store