import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDashboardStats, fetchUsers } from "./adminService";

export const getStats = createAsyncThunk("admin/stats", async () => {
  return await fetchDashboardStats();
});

export const getUsers = createAsyncThunk("admin/users", async () => {
  return await fetchUsers();
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    stats: {},
    users: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export default adminSlice.reducer;