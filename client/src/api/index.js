import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

// POSTS
export const fetchPosts = () => API.get(`/posts`);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post(`/posts`, newPost);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
export const updateUser = (formData, id) => API.post(`/user/${id}`, formData);
