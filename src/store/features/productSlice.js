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
    publishedProducts: [],
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
        state.publishedProducts = action.payload.filter(
          (item) => item.published
        );
        state.success = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.products.push(action.payload);
        if (action.payload.published) {
          state.publishedProducts.push(action.payload);
        }
        state.success = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (data) => data.id !== action.payload
        );
        state.publishedProducts = state.publishedProducts.filter(
          (data) => data.id !== action.payload
        );
      })
      .addCase(update.fulfilled, (state, action) => {
        const productsIndex = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        const publishedIndex = state.publishedProducts.findIndex(
          (product) => product.id === action.payload.id
        );

        // Update or add the product in products
        if (productsIndex > -1) {
          state.products[productsIndex] = action.payload;
        } else {
          state.products.push(action.payload);
        }

        // Update publishedProducts based on the published status
        if (action.payload.published) {
          if (publishedIndex > -1) {
            state.publishedProducts[publishedIndex] = action.payload;
          } else {
            state.publishedProducts.push(action.payload);
          }
        } else {
          if (publishedIndex > -1) {
            state.publishedProducts.splice(publishedIndex, 1);
          }
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
