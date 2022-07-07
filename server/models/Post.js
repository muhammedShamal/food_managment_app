import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    // userId: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

var Posts = mongoose.model("Posts", postSchema);

export default Posts;
