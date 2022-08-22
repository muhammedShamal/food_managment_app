import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

// create a new post object in database
export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ post, navigate, toast }) => {
    try {
      const { data } = await api.createPost(post);
      toast("Food added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// return all posts from data base
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await api.getPosts();
    return data;
  } catch (error) {
    return error;
  }
});

// return post with a specific id
export const getPost = createAsyncThunk("posts/getPost", async (id) => {
  try {
    const { data } = await api.getPost(id);
    return data;
  } catch (error) {
    return error;
  }
});

// update post
export const updatedPost = createAsyncThunk(
  "posts/updatePOst",
  async ({ id, quantity }) => {
    try {
      const { data } = await api.updatePost(id, { quantity: quantity });
      return data;
    } catch (error) {
      return error;
    }
  }
);

// delete post from database
export const removePost = createAsyncThunk("posts/deletePost", async (id) => {
  try {
    const { data } = await api.deletePost(id);
    return data;
  } catch (error) {
    return error;
  }
});

export const getPostOfDistrict = createAsyncThunk(
  "posts/getPostOfLocation",
  async (district) => {
    try {
      const { data } = await api.getPostOfLocation(district);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    error: "",
    districtPosts: [],
    loading: false,
  },
  extraReducers: {
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, action.payload];
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPost.pending]: (state) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPostOfDistrict.pending]: (state) => {
      state.loading = true;
    },
    [getPostOfDistrict.fulfilled]: (state, action) => {
      state.loading = false;
      state.districtPosts = action.payload;
    },
    [getPostOfDistrict.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updatedPost.pending]: (state) => {
      state.loading = true;
    },
    [updatedPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [updatedPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [removePost.pending]: (state) => {
      state.loading = true;
    },
    [removePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [...posts.filter((post) => post._id !== action.payload)];
    },
    [removePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default postSlice.reducer;
