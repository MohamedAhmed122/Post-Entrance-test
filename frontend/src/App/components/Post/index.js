import Row from "../Row";
import { CommentFrom, CommentList } from "../Comment/index";
import "./stylePost.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ChatIcon from "@material-ui/icons/Chat";
import { useState } from "react";
import { IconButton } from "@material-ui/core";

export default function Post({ image }) {
  const [displayComment, setDisplayComment] = useState(false);
  return (
    <div className="post">
      <h2 className="title">this my tile for this post</h2>
      <p>
        lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      {image && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiLOiEP-qSR6OgMrPELypnHToVToGPEc_qTkuLq5mMKwCCMoQ4x6Fsn19uvBoDO0qZaQ&usqp=CAU"
          alt="post"
        />
      )}
      <div className="flex_between">
        <Row
          text="120 likes"
          Icon={() => <ThumbUpAltIcon style={{ color: "#4267B2" }} />}
        />
        <Row
          text="View"
          Icon={() => <VisibilityIcon style={{ color: "#e7c64f" }} />}
        />
        <Row
          onClick={() => setDisplayComment(true)}
          text="Comments"
          Icon={() => <ChatIcon style={{ color: "gray" }} />}
        />
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
