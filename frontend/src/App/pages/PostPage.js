import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../requests/posts";
import { useSnackbar } from "notistack";
import Post from "../components/Post";
import Loading from "../common/Loading";
import Alert from "@material-ui/lab/Alert";

export default function PostPage() {
  const [posts, setPosts] = useState(null);
  const [postError, setPostError] = useState(null);
  const [postDeleted, setPostDeleted] = useState(false);
  const [editedComment, setEditedComment] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getPost()
      .then((res) => setPosts(res))
      .catch((err) => setPostError(err));
    if (postDeleted) {
      setTimeout(() => {
        setPostDeleted(false);
      }, 300);
    }
  }, [postDeleted]);

  const handleDeletePost = (id) => {
    deletePost(id)
      .then((res) =>  setPostDeleted(true))
      .catch((err) => enqueueSnackbar(`Oops, ${err}`, { variant: "error" }));
  };
  console.log(posts);
  if (!posts) return <Loading size={100} />;
  return (
    <div className="flexCol" style={{ marginTop: 180 }}>
      {!postError ? (
        posts.map((post) => (
          <Post
            key={post._id}
            post={post}
            handleDeletePost={handleDeletePost}
            setPostDeleted={setPostDeleted}
            editedComment={editedComment}
            setEditedComment={setEditedComment}
          />
        ))
      ) : (
        <Alert severity="error">Error Fetching the posts </Alert>
      )}
    </div>
  );
}
