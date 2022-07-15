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
    },
    quantity: {
      type: Number,
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

var Orders = mongoose.model("Orders", orderSchema);

export default Orders;
