import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    foodId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", orderSchema);

export default Orders;
