import React, { useEffect, useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import CustomInput from "../../common/CustomInput";
import { IconButton } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import "./styleComment.css";

export function CommentFrom({ editedComment }) {
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (editedComment) {
      setComment(editedComment.comment);
    }
  }, [editedComment]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    setComment("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex"
      style={{ margin: "10px 0" }}
    >
      <CustomInput
        icon
        placeholder="Write comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onIconClick={() => setComment("")}
      />
      <IconButton type="submit">
        <SendIcon style={{ color: "#e7c64f" }} />
      </IconButton>
    </form>
  );
}

export function CommentList({ comment, setEditedComment }) {
  // console.log(comment);
  return (
    <div>
      <p className="comment">{comment.comment}</p>
      <div className="date">
        <Chip label="today at 3:00" variant="outlined" className="chip" />
        <IconButton
          className="icon_button"
          onClick={() =>
            setEditedComment({
              comment: comment.comment,
              id: comment._id,
            })
          }
        >
          <BorderColorIcon style={{ color: "green" }} />
        </IconButton>
        <IconButton className="icon_button">
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      </div>
    </div>
  );
}
