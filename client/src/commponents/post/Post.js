import React from "react";
import NewPost from "./NewPost";
import "./Post.css";

function Post() {
  return (
    <div className="post-section">
      <NewPost />
      <NewPost />
      <NewPost />
    </div>
  );
}

export default Post;
