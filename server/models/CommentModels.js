import mongoose from "mongoose";

export const commentSchema = mongoose.Schema(
  {
    comment: { type: String, required: true },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
