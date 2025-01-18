import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware(),
  devTools: true,
});

export default store;
