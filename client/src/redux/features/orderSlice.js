import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async ({ order, toast, navigate }) => {
    try {
      const { data } = await api.createOrder(order);
      navigate("/");
      toast("Order Placed Successfully 🥳", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    orders: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = [...state.orders, action.payload];
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
      state.orders = action.payload;
    },
    [getOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default orderSlice.reducer;
