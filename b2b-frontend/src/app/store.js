import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/authSlice";
import productReducer from "../modules/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer, 
  },
});