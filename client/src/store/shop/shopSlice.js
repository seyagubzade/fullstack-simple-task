import { createSlice } from "@reduxjs/toolkit";
import {
  AddNewProduct,
  DeleteProduct,
  GetAllData,
  GetById,
} from "./api_actions";

const initialState = {
  product: [],
  loading: false,
  error: null,
  currentProduct: null,
};
const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("GetAllData.fulfilled", action.payload)
        state.product = action.payload;
      })
      .addCase(GetAllData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(GetById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProduct = action.payload;
      })
      .addCase(GetById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Add new prod
      .addCase(AddNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = [...state.product, action.payload];
      })
      .addCase(AddNewProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddNewProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE Prod
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log("DeleteProduct.fulfilled>>", action.payload);
        const deletedProductId = action.payload;
        state.product = state.product.filter(
          (product) => product.id !== deletedProductId
        );
      })
      .addCase(DeleteProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteProduct.rejected, (state, action) => {
        console.log("DeleteProduct.rejected>>", action);

        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const shopReducer = shopSlice.reducer;