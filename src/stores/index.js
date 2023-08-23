import { configureStore } from "@reduxjs/toolkit";

import userLoginReducer from './slices/userLogin.slice'


const store = configureStore({
    reducer: {
        userLoginStore: userLoginReducer
    }
})
export default store