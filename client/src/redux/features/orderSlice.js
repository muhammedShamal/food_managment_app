import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async ({ formValue, navigate }) => {
    try {
      const { data } = await api.createOrder(formValue);
      navigate("/");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOrders = createAsyncThunk("order/getOrders", async () => {
  try {
    const { data } = await api.getOrders();
    return data;
  } catch (error) {
    return error;
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.order = [...state.order, action.payload];
    },
    [createOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getOrders.pending]: (state) => {
      state.loading = true;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    [getOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default postSlice.reducer;
