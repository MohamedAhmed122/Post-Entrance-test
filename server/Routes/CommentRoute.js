import express from "express";
import {
  createComment,
  updateComment,
  deleteComment,
  getComments,
} from "../Controller/CommentController.js";

const router = express.Router();
router.route("/").get(getComments);
router.route("/:id").post(createComment);
router.route("/:id").put(updateComment);
router.route("/:id").delete(deleteComment);

export default router;
