import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://mongo-task.onrender.com/products"

export const GetAllData = createAsyncThunk("GetAllData", async () => {
    try {
      const response = await axios.get(BASE_URL);
      console.log("GetAllData",response.data)
      return response.data;
    } catch (error) {
      return error.message;
    }
});
export const GetById = createAsyncThunk("GetById", async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
});
export const AddNewProduct = createAsyncThunk("AddNewProduct", async (item) => {
    try {
      console.log("AddNewProduct>>>", item)
      const response = await axios.post(BASE_URL, item);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const DeleteProduct = createAsyncThunk("DeleteProduct", async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      console.log(response)
      return id;
    } catch (error) {
      console.log(error);
    }
  });