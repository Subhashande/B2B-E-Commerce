import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
  fetchDashboardStats, 
  fetchUsers, 
  fetchAdminProducts, 
  fetchAdminOrders,
  approveUserApi,
  rejectUserApi
} from "./adminService";

export const getStats = createAsyncThunk("admin/stats", async (_, { rejectWithValue }) => {
  try {
    return await fetchDashboardStats();
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

export const getUsers = createAsyncThunk("admin/users", async (_, { rejectWithValue }) => {
  try {
    return await fetchUsers();
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

export const getAdminProducts = createAsyncThunk("admin/products", async (_, { rejectWithValue }) => {
  try {
    return await fetchAdminProducts();
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

export const getAdminOrders = createAsyncThunk("admin/orders", async (_, { rejectWithValue }) => {
  try {
    return await fetchAdminOrders();
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

export const approveUser = createAsyncThunk("admin/approveUser", async (userId, { dispatch, rejectWithValue }) => {
  try {
    const response = await approveUserApi(userId);
    dispatch(getUsers());
    return response;
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

export const rejectUser = createAsyncThunk("admin/rejectUser", async (userId, { dispatch, rejectWithValue }) => {
  try {
    const response = await rejectUserApi(userId);
    dispatch(getUsers());
    return response;
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    stats: {},
    users: [],
    products: [],
    orders: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getAdminOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});

export default adminSlice.reducer;