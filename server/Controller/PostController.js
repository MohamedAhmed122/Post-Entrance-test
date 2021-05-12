import Post from "../models/PostModel.js";
import asyncHandler from "express-async-handler";

// @desc   Get all posts
//@route   GET /api/posts
//@Access  public
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

// @desc   Get post by id
//@route   GET /api/posts/postId
//@Access  public
export const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("post not found");
  }
});

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  public
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "post has Been deleted" });
  } else {
    res.status(404);
    res.json({ message: "post Not Found" });
  }
});

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Public
export const updatePost = asyncHandler(async (req, res) => {
  const { title, image, description, header } = req.body;

  const post = await Post.findById(req.params.id);
  if (post) {
    post.title = title;
    post.image = image;
    post.description = description;
    post.header = header;

    const updatedPost = await post.save();

    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post Not Found");
  }
});

// @desc    create post
// @route   POST /api/posts
// @access  public
export const createPost = asyncHandler(async (req, res) => {
  const { title, image, description, header } = req.body;
  const newPost = new Post({
    title,
    image,
    description,
    header,
  });

  const createdPost = await newPost.save();
  res.status(201).json(createdPost);
});
