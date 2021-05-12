import React, { useEffect, useState } from "react";
import CreatePost from "../components/PostForm";
import { getPostById } from "../requests/posts";

export default function CreatePostPage({ match }) {
  const [post, setPost] = useState(null);
  const id = match.params.id;
  useEffect(() => {
    if (id) {
      getPostById(id)
        .then((res) => setPost(res))
        .catch((err) => console.log(err));
    }
  }, [id]);
  
  return (
    <div>
      <CreatePost post={post} />
    </div>
  );
}
