import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

// https://pure-harbor-77871.herokuapp.com/

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// user authentication
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);

// crud posts
export const createPost = (formData) => API.post("/posts", formData);
export const getPosts = () => API.get("/posts");
export const getPost = (id) => API.get(`/posts/${id}`);
export const getPostOfLocation = (loc) => API.get(`/posts/district`, loc);
export const updatePost = (id, quantity) => API.put(`/posts/${id}`, quantity);

// ORDER
export const createOrder = (order) => API.post("/orders", order);
export const getOrders = () => API.get("/orders");
