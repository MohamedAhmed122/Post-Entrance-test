import axios from "axios";

const baseUrl = "http://localhost:5000";
// get all posts
export const getPost = async () => {
  const { data } = await axios.get(`${baseUrl}/api/posts`);
  return data;
};

// get  post by Id
export const getPostById = async (id) => {
  const { data } = axios.get(`${baseUrl}/api/posts/${id}`);
  return data;
};

// create new post
export const createPost = async () => {
  return await axios.post("/api/posts");
};
// update post
export const updatePost = async (id) => {
  return await axios.put(`/api/posts${id}`);
};

// delete post
export const deletePost = async (id) => {
  return await axios.delete(`/api/posts${id}`);
};
