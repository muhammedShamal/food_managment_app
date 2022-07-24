import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

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

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await api.getPosts();
    return data;
  } catch (error) {
    return error;
  }
});

export const getPost = createAsyncThunk("posts/getPost", async (id) => {
  try {
    const { data } = await api.getPost(id);
    return data;
  } catch (error) {
    return error;
  }
});

export const getPostOfLocation = createAsyncThunk(
  "posts/getPostOfLocation",
  async (loc) => {
    try {
      const { data } = await api.getPostOfLocation(loc);
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    error: "",
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
    [getPostOfLocation.pending]: (state) => {
      state.loading = true;
    },
    [getPostOfLocation.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPostOfLocation.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default postSlice.reducer;
