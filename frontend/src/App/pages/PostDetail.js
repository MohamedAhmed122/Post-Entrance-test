import React, { useEffect, useState } from "react";
import { getPostById } from "../requests/posts";
import Alert from "@material-ui/lab/Alert";
import Loading from "../common/Loading";
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
    <div className="flexCol" style={{ marginTop: 90 }}>
      {!postError ? (
        <div className="detail">
          {post.image && <img src={post.image} alt="" />}
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
      ) : (
        <Alert severity="error">Error Fetching the post Details!</Alert>
      )}
    </div>
  );
}
