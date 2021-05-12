import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import Post from "../components/Post";
import { getPost } from "../requests/posts";

export default function PostPage() {
  const [posts, setPosts] = useState(null);
  const [postError, setPostError] = useState(null);

  useEffect(() => {
    getPost()
      .then((res) => setPosts(res))
      .catch((err) => setPostError(err));
  }, []);
  if (!posts) return <Loading size={100} />;
  return (
    <div className="flexCol" style={{ marginTop: 80 }}>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
