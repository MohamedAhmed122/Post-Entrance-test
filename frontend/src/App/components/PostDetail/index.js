import React from "react";

export default function PostDetail({ post }) {
  return (
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
  );
}
