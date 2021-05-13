import Comment from "../models/CommentModels.js";
import asyncHandler from "express-async-handler";
import Post from "../models/PostModel.js";




// @desc   Get all posts
//@route   GET /api/posts
//@Access  public
export const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({});
  res.json(comments);
});



export const createComment = asyncHandler(async (req, res) => {
  
  const { comment } = req.body;

  const post = await Post.findById(req.params.id);

  const newComment = new Comment({
      comment,
      postId: post._id,
  });
  const createdPost = await newComment.save();
  res.status(201).json(createdPost)
   
});


export const updateComment = asyncHandler(async (req, res) => {

  const { comment } = req.body;
  //id of the specific comment 
  const curComment = await Comment.findById(req.params.id); 
  if(curComment)
  {
    curComment.comment = comment;
    const updatedPost = await curComment.save();
    res.status(201).json(updatedPost)  
  }else {
  res.status(404);
  throw new Error("Comment Not Found");
}});



export const deleteComment = asyncHandler(async (req, res) => {
  //id of the specific comment 
  const curComment = await Comment.findById(req.params.id); 
  if(curComment)
  {
    await curComment.remove()
    res.json({message : "comment has Been deleted"})
  }else {
  res.status(404);
  throw new Error("Comment Not Found");
}});
