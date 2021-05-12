import axios from "axios";

const baseUrl = "http://localhost:5000";
// get all posts
export const getPost = async () => {
  const { data } = await axios.get(`${baseUrl}/api/posts`);
  return data;
};

// get  post by Id
export const getPostById = async (id) => {
  const { data } = await axios.get(`${baseUrl}/api/posts/${id}`);
  return data;
};

// create new post
export const createPost = async (values) => {
  const { data } = await axios.post(`${baseUrl}/api/posts`, values);
  return data;
};
// update post
export const updatePost = async (id, values) => {
  return await axios.put(`${baseUrl}/api/posts/${id}`, values);
};

// delete post
export const deletePost = async (id) => {
  return await axios.delete(`${baseUrl}/api/posts/${id}`);
};
