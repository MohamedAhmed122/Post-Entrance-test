import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import Post from "../components/Post";
import { deletePost, getPost } from "../requests/posts";

export default function PostPage() {
  const [posts, setPosts] = useState(null);
  const [postDeleted, setPostDeleted] = useState(false);

  useEffect(() => {
    getPost()
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
    if (postDeleted) {
      setTimeout(() => {
        setPostDeleted(false);
      }, 300);
    }
  }, [postDeleted]);

  const handleDeletePost = (id) => {
    deletePost(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  if (!posts) return <Loading size={100} />;
  return (
    <div className="flexCol" style={{ marginTop: 80 }}>
      {posts.map((post) => (
        <Post
          key={post._id}
          post={post}
          handleDeletePost={handleDeletePost}
          setPostDeleted={setPostDeleted}
        />
      ))}
    </div>
  );
}
