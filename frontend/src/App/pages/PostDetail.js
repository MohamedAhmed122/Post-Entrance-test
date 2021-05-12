import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import { getPostById } from "../requests/posts";
import "./stylePages.css";

export default function PostDetail({ match }) {
  const [post, setPost] = useState(null);
  const [postError, setPostError] = useState(null);
  const id = match.params.id;
  console.log(id);
  useEffect(() => {
    if (id) {
      getPostById(id)
        .then((res) => setPost(res))
        .catch((err) => setPostError(err));
    }
  }, [id]);

  if (!post) return <Loading size={100} />;
  return (
    <div className="flexCol">
      <div className="detail">
        <img src={post.image} alt="" />
        <div className="flex mr">
          <h2 className="title mr_right"> Id</h2>
          <p>{post._id}</p>
        </div>
        <div className="flex mr">
          <h2 className="title mr_right"> Title</h2>
          <p>{post.title}</p>
        </div>
        <div className="flex mr">
          <h2 className="title mr_right"> Header</h2>
          <p>{post.header}</p>
        </div>
        <div>
          <p style={{ textAlign: "center" }}>{post.description}</p>
        </div>
      </div>
    </div>
  );
}
