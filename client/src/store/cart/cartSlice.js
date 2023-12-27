import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const { _id, title, price, desc, image, isOnSale } = action.payload;
      const existingItem = state.cart.find((item) => item._id === _id);

      if (existingItem) {
        toast.error("Already exist!");
      } else {
        const newItem = {
          ...action.payload,
          count: 1,
          totalPrice: price,
        };

        state.cart = [...state.cart, newItem];
        localStorage.setItem("cart", JSON.stringify([...state.cart]));
        toast.success("Added to cart!");
      }
    },
    decreaseQuantity: (state, action) => {
      const { _id } = action.payload;
      let target = state.cart.find((item) => item._id == _id);
      const indexOfTarget = state.cart.indexOf(target);
      console.log(target, indexOfTarget)
      if(target.count>1){
        target = {
            ...target,
            count: target.count - 1,
            totalPrice: target.price * (target.count - 1),
          };
          state.cart = [
            ...state.cart.slice(0, indexOfTarget),
            target,
            ...state.cart.slice(indexOfTarget + 1),
          ];
          localStorage.setItem("cart", JSON.stringify([...state.cart]));
          toast.success(`Count increased to ${target.count}}!`);
      }else{
        state.cart = [
            ...state.cart.slice(0, indexOfTarget),
            ...state.cart.slice(indexOfTarget + 1),
          ];
      }
      
     
    },
    increaseQuantity: (state, action) => {
      const { _id } = action.payload;
      let target = state.cart.find((item) => item._id == _id);
      const indexOfTarget = state.cart.indexOf(target);
      console.log("indexOfTarget", indexOfTarget);
      target = {
        ...target,
        count: target.count + 1,
        totalPrice: target.price * (target.count + 1),
      };
      console.log("target>>>", target);
      state.cart = [
        ...state.cart.slice(0, indexOfTarget),
        target,
        ...state.cart.slice(indexOfTarget + 1),
      ];
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
      toast.success(`Count increased to ${target.count}}!`);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
