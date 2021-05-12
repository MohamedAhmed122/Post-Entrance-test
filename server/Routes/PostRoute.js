import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../Controller/PostController.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").get(getPost).delete(deletePost).put(updatePost);

export default router;
