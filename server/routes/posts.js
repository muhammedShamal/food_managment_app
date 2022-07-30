import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPostsOfDistrict,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/district", getPostsOfDistrict);
router.get("/", getPosts);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

router.post("/", createPost);

export default router;
