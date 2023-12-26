import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./shop/shopSlice";

const store = configureStore({
    reducer: {
        product: shopReducer,
    }
})

export default store;