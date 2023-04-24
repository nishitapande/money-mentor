import React from "react";
import Post from "../post/Post";
import "./BlogSection.css";
function BlogsSection() {
  return (
    <div className="home-blog-section">
      <div className="blog-section-heading">
        <h2 className="secondary-heading-blogs-section">Blogs</h2>
      </div>

      <Post />
    </div>
  );
}

export default BlogsSection;
