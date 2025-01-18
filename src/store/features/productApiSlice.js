import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../helper/api";

export const create = createAsyncThunk("product/create", async (data) => {
  try {
    const res = await API.post("/products", data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message || "something went wrong");
  }
});

export const find = createAsyncThunk("product/find", async () => {
  try {
    const response = await API.get("/products");
    return response.data;
  } catch (error) {
    throw new Error(error.message || "something went wrong");
  }
});

export const remove = createAsyncThunk("product/remove", async (id) => {
  try {
    await API.delete(`/products/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.message || "something went wrong");
  }
});

export const update = createAsyncThunk("product/update", async (data) => {
  try {
    const res = await API.put(`/products/${data.id}`, data);
    return res.data;
  } catch (error) {
    throw new Error(error.message || "something went wrong");
  }
});

// export const likeIncrement = createAsyncThunk(
//   "post/likeIncrement",
//   async (data) => {
//     try {
//       const res = await API.put(`/post/${data.id}`, data);
//       return res.data;
//     } catch (error) {
//       throw new Error(error.message || "something went wrong");
//     }
//   }
// );
