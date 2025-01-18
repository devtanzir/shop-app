import { createSlice } from "@reduxjs/toolkit";
import {
  create,
  find,
  // likeIncrement,
  remove,
  update,
} from "./productApiSlice";

// Create the slice
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    success: false,
    error: null,
    loading: false,
  },
  reducers: {
    activeLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(find.fulfilled, (state, action) => {
        state.products = action.payload;
        state.success = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.success = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (data) => data.id !== action.payload
        );
      })
      .addCase(update.fulfilled, (state, action) => {
        const productsIndex = state.products.findIndex(
          (products) => products.id === action.payload.id
        );
        if (productsIndex > -1) {
          state.products[productsIndex] = action.payload;
        }
        state.success = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(update.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update products";
        state.success = false;
      })
      .addCase(find.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(find.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
        state.success = false;
      })
      .addCase(create.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create products";
        state.success = false;
      });
    // .addCase(likeIncrement.fulfilled, (state, action) => {
    //   const productsIndex = state.products.findIndex(
    //     (products) => products.id === action.payload.id
    //   );
    //   if (productsIndex > -1) {
    //     state.products[productsIndex] = action.payload;
    //   }
    //   state.success = true;
    //   state.error = null;
    //   state.loading = false;
    // });
  },
});

export const { activeLoading } = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
