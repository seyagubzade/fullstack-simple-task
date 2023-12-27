import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./shop/shopSlice";
import { cartReducer } from "./cart/cartSlice";

const store = configureStore({
    reducer: {
        product: shopReducer,
        cart: cartReducer
    }
})

export default store;