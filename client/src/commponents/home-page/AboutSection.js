import React from "react";
import img1 from "../../assets/hero-img-1.png";
// import img2 from "../../assets/hero-img-2.jpg";
import "./AboutSection.css";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about">
        <div className="text-box-about">
          <div className="about-text-box">
            <p className="heading-para-about">About Us</p>
            <h2 className="secondary-heading-about">
              Your One-Stop Resource for Finance
            </h2>
            <p className="hero-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="button-box">
              <Link className="hero-link">About Us</Link>
              <Link className="hero-link know-more-link">Search Resource </Link>
            </div>
          </div>
        </div>
        <div className="img-box-about">
          <img src={img1} className="img-hero" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
