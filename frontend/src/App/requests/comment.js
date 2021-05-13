import axios from "axios";

const baseUrl = "http://localhost:5000";
// get all comments
export const getComment = async () => {
  const { data } = await axios.get(`${baseUrl}/api/comment`);
  return data;
};

// create new comment
export const createComment = async (id,values) => {
  const { data } = await axios.post(`${baseUrl}/api/comment/${id}`, values);
  return data;
};
// update comment
export const updateComment = async (id, values) => {
  return await axios.put(`${baseUrl}/api/comment/${id}`, values);
};

// delete comment
export const deleteComment = async (id) => {
  return await axios.delete(`${baseUrl}/api/comment/${id}`);
};
