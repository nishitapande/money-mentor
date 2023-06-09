import React from "react";
import "./Hero.css";
import img1 from "../../assets/hero-img-1.png";
// import img2 from "../../assets/hero-img-2.jpg";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="text-box">
          <div className="hero-text-box">
            <h1 className="primary-heading-hero">
              Investing in Your Financial Literacy
            </h1>
            <p className="heading-para">
              Accessible and Engaging Resources for All Levels of Expertise
            </p>
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
              <Link className="hero-link">Search Resources</Link>
              <Link className="hero-link know-more-link">Know More</Link>
            </div>
          </div>
        </div>
        <div className="img-box-hero">
          <img src={img1} className="img-hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
