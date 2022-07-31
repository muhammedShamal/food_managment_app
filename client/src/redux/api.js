import axios from "axios";

// this is our local backend url it connects front-end and backend
const API = axios.create({
  baseURL: "https://pure-harbor-77871.herokuapp.com/",
});
/*
  eg
  http:localhost:8000/posts   -   a get request to this url will return all the posts from database
*/

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
export const createPost = (formData) => API.post("/posts", formData); // a post request to this url will create a new post object in database
export const getPosts = () => API.get("/posts"); //http:localhost:8000/posts   -   a get request to this url will return all the posts from database
export const getPost = (id) => API.get(`/posts/${id}`); // will return a specific post with id = id
export const getPostOfLocation = (district) =>
  API.get(`/posts/district/`, district);
export const updatePost = (id, quantity) => API.put(`/posts/${id}`, quantity);
export const deletePost = (id) => API.delete(`/posts/${id}`); // this will delete post with id = id from database

// ORDER
export const createOrder = (order) => API.post("/orders", order);
export const getOrders = () => API.get("/orders");
