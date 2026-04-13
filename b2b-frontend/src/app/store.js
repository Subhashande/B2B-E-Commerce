import { configureStore } from "@reduxjs/toolkit";

// AUTH
import authReducer from "../modules/auth/authSlice";

// PRODUCT
import productReducer from "../modules/product/productSlice";

// CART
import cartReducer from "../modules/cart/cartSlice";

// ADMIN  ✅ (THIS IS WHAT YOU NEED TO ADD)
import adminReducer from "../modules/admin/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    admin: adminReducer, // ✅ IMPORTANT
  },
});