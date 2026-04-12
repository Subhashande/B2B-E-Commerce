import { configureStore } from "@reduxjs/toolkit";

// AUTH
import authReducer from "../modules/auth/authSlice";

// PRODUCT
import productReducer from "../modules/product/productSlice";

// ADMIN  ✅ (THIS IS WHAT YOU NEED TO ADD)
import adminReducer from "../modules/admin/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    admin: adminReducer, // ✅ IMPORTANT
  },
});