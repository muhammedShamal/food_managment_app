import express from "express";
import Posts from "../models/Post.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createPost = async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default router;
