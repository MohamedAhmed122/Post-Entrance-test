import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    comment: { type: String, required: true },
    // postId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "Post",
    // },
  },
  {
    timestamps: true,
  }
);

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    required: false,
    default: 0,
  },

  comments: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);
export default Post;
