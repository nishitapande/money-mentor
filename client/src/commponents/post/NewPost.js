import React from "react";
import "./NewPost.css";
import img1 from "../../assets/hero-img-2.jpg";

function NewPost() {
  return (
    <div className="new-post">
      <div className="post-box">
        <div className="post">
          <div className="img-box-new-post">
            <img src={img1} className="post-img" alt="image" />
          </div>
          <div className="text-box">
            <h2 className="secondary-heading">This is a heading</h2>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;