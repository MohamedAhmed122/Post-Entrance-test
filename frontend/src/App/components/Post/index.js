import { useState } from "react";
import { useHistory } from "react-router-dom";
import Row from "../Row";
import { CommentFrom, CommentList } from "../Comment/index";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ChatIcon from "@material-ui/icons/Chat";
import "./stylePost.css";

export default function Post({ post, handleDeletePost, setPostDeleted }) {
  const [displayComment, setDisplayComment] = useState(false);
  const history = useHistory();

  return (
    <div className="post">
      <h2 className="title">{post.title}</h2>
      <p>{post.description}</p>
      {post.image && <img src={post.image} alt="post" />}
      <div className="flex_between">
        <Row
          text={`${post.likes} likes`}
          Icon={() => <ThumbUpAltIcon style={{ color: "#4267B2" }} />}
        />
        <Row
          onClick={() => history.push(`/post/${post._id}`)}
          text="View"
          Icon={() => <VisibilityIcon style={{ color: "#e7c64f" }} />}
        />
        <Row
          onClick={() => setDisplayComment(true)}
          text="Comments"
          Icon={() => <ChatIcon style={{ color: "gray" }} />}
        />
        <ButtonGroup disableElevation variant="contained">
          <Button
            onClick={() => {
              handleDeletePost(post._id);
              setPostDeleted(true);
            }}
          >
            <DeleteIcon style={{ color: "red" }} />
          </Button>
          <Button onClick={() => history.push(`/edit/${post._id}`)}>
            <BorderColorIcon style={{ color: "green" }} />
          </Button>
        </ButtonGroup>
      </div>
      {displayComment && (
        <>
          {" "}
          <CommentFrom /> <CommentList />
          <CommentList />
          <CommentList />
          <IconButton onClick={() => setDisplayComment(false)}>
            <ExpandLessIcon style={{ color: "gray" }} />
          </IconButton>
        </>
      )}
    </div>
  );
}
