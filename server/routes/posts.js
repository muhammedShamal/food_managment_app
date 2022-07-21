import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  getPostsOfLocation,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/district", getPostsOfLocation);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", createPost);

export default router;
