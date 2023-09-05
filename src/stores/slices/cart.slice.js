import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
    name: "cartLocal",
    initialState: JSON.parse(localStorage.getItem("carts")) || [],
    reducers: {
        updateItemInCart: (state, action) => {
            let updatedCarts = state.map((item) => {
                if (item.productId === action.payload.productId) {
                    return action.payload;
                }
                return item;
            })
            localStorage.setItem("carts", JSON.stringify(updatedCarts));
            return updatedCarts;

        },
        deleteItemInCart: (state, action) => {
            let updatedCarts = state.filter((item) => {
                return item.productId !== action.payload
            })
            localStorage.setItem("carts", JSON.stringify(updatedCarts));
            return updatedCarts;
        },
        addItemToCart: (state, action) => {
            let check = state.find((item) => item.productId === action.payload.productId);
            if (!check) {
                state.push(action.payload);
            } else {
                state.map((item) => {
                    if (item.productId === action.payload.productId) {
                        item.quantity += action.payload.quantity;
                    }
                    return item;
                });
            }
        },
        updateCartLocal: (state, action) => {
            console.log(action.payload)
            return action.payload;
        }
    },
});

export const cartsActions = {
    ...cartsSlice.actions,
};

export default cartsSlice.reducer;


