import React, { useEffect, useState } from "react";
import { getPostById } from "../requests/posts";
import PostDetail from "../components/PostDetail";
import Alert from "@material-ui/lab/Alert";
import Loading from "../common/Loading";
import "./stylePages.css";
import { getComment } from "../requests/comment";
import { CommentFrom, CommentList } from "../components/Comment";

export default function PostDetailPage({ match }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [postError, setPostError] = useState(null);
  const [editedComment, setEditedComment] = useState(null);
  const [commentChanged, setCommentChanged] = useState(false);
  const id = match.params.id;

  // get post details
  useEffect(() => {
    if (id) {
      getPostById(id)
        .then((res) => setPost(res))
        .catch((err) => setPostError(err));
    }
  }, [id]);

  //get all comments
  useEffect(() => {
    getComment()
      .then((res) => setComments(res))
      .catch((err) => console.log(err));
    if (commentChanged) {
      setCommentChanged(false);
    }
  }, [commentChanged]);

  //filter the comments using the postId
  let filterComments = [];
  filterComments = comments?.filter((comment) => comment.postId === id);

  if (!post || !comments) return <Loading size={100} />;
  return (
    <div className="flexCol" style={{ marginTop: 90 }}>
      {!postError ? (
        <>
          <PostDetail post={post} />{" "}
          <CommentFrom
            setEditedComment={setEditedComment}
            id={id}
            editedComment={editedComment}
            setCommentChanged={setCommentChanged}
          />
          {filterComments?.map((comment) => (
            <CommentList
              id={id}
              comment={comment}
              setCommentChanged={setCommentChanged}
              setEditedComment={setEditedComment}
            />
          ))}
        </>
      ) : (
        <Alert severity="error">Error Fetching the post Details!</Alert>
      )}
    </div>
  );
}
