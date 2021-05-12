import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import CustomInput from "../../common/CustomInput";
import { IconButton } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

import "./styleComment.css";

export function CommentFrom() {
  const [comment, setComment] = useState("");

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

export function CommentList() {
  return (
    <div>
      <p className="comment">
        lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>
      <div className="date">
        <Chip
          label="today at 3:00"
          variant="outlined"
          style={{
            backgroundColor: "#f7c71a",
            color: "white",
            border: "1px solid white",
          }}
        />
      </div>
    </div>
  );
}
