import api from '@api';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const findAllProducts = createAsyncThunk(
    "findAllProducts",
    async () => {
        let res = await api.product.findAllProducts();
        return res.data
    }
)
const filterProductByType = createAsyncThunk(
    "filterProductByType",
    async (type) => {
        let res = await api.product.filterProductByType(type)
        return res.data
    }
)
const productSlice = createSlice(
    {
        name: "product",
        initialState: {
            listProducts: [],
            product: {}
        },
        reducers: {},
        extraReducers: (builder) => {
            // find all products
            builder.addCase(findAllProducts.fulfilled, (state, action) => {
                state.listProducts = [...action.payload]
            })
            // filter product by type
            builder.addCase(filterProductByType.fulfilled, (state, action) => {
                state.listProducts = [...action.payload]
            })
            // seacrh product by id
            // builder.addCase(searchProductById.fulfilled, (state, action) => {
            //     state.product = { ...action.payload }
            // })
            // search product by name
            // builder.addCase(searchProductByName.fulfilled, (state, action) => {
            //     console.log(action.payload);
            //     state.searchData = [...action.payload]
            // })
        }
    }
)

export const productActions = {
    ...productSlice.actions,
    findAllProducts,
    filterProductByType
}
export default productSlice.reducer;