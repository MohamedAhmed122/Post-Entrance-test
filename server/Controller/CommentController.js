import Post from "../models/PostModel.js";
import asyncHandler from "express-async-handler";

// @desc    Create Review for product
// @route   POST /api/products/:id/reviews
// @access  Private
export const CreateComments = asyncHandler(async (req, res) => {
  const { comment } = req.body;

  const post = await Post.findById(req.params.id);

  if (post) {
    const newComment = {
      comment,
      postId: post._id,
    };

    post.comments.push(newComment);

    await post.save();
    res.status(201).json({ message: "Comment added" });
  } else {
    res.status(404);
    throw new Error("post not found");
  }
});
