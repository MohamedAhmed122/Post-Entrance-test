import mongoose from "mongoose";
import {commentSchema} from "./CommentModels.js";
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
