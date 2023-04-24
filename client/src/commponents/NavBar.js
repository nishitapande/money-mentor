import React, { useState } from "react";
import "./NavBar.css";
import img1 from "../assets/profile-img.png";
import LoginButton from "./login/LoginButton";
import LogoutButton from "./login/LogOutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const [openResouceDropdown, setOpenResouceDropdown] = useState(false);
  const { isAuthenticated } = useAuth0();
  return (
    <div className="nav-bar-section">
      <div className="nav-bar">
        <a href="#" className="logo">
          {" "}
          Logo
          {/* <limg src={img2} /> */}
        </a>
        <div className="links-box">
          <Link className="nav-bar-list-links" to="/">
            Home
          </Link>
          <Link className="nav-bar-list-links" to="/about">
            About
          </Link>
          <Link
            className="nav-bar-list-links"
            to="/resources"
            onClick={() => setOpenResouceDropdown((prev) => !prev)}
          >
            Resources
            {openResouceDropdown && <DropdownResources />}
          </Link>

          <Link className="nav-bar-list-links" to="/blogs">
            Blogs
          </Link>
          {/* <Link className="cta" to="/try-now">
        LOG IN
      </Link> */}
          {isAuthenticated ? <Profile /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
}

const DropdownResources = () => {
  return (
    <div className="drop-down-resource">
      <ul className="drop-down">
        <li className="drop-down-list">
          {" "}
          <a className="drop-down-link"> PDFS</a>{" "}
        </li>
        <li className="drop-down-list">
          {" "}
          <a className="drop-down-link">Video</a>{" "}
        </li>
        <li className="drop-down-list">
          {" "}
          <a className="drop-down-link">Class</a>{" "}
        </li>
      </ul>
    </div>
  );
};

const Profile = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="drop-down-profile">
      <img src={img1} onClick={() => setOpenProfile((prev) => !prev)} />
      {openProfile && <DropdownProfile />}
    </div>
  );
};

const DropdownProfile = () => {
  return (
    <div className="dropdown-profile">
      <ul className="drop-down">
        <li className="drop-down-list">
          {" "}
          <a className="drop-down-link" to="/editprofile">
            {" "}
            Edit Profile{" "}
          </a>{" "}
        </li>
        <li className="drop-down-list">
          {" "}
          <a className="drop-down-link">My Learning </a>{" "}
        </li>
        <li className="drop-down-list">
          {" "}
          <a className="drop-down-link" href="/writeblog">
            {" "}
            Write Blog
          </a>{" "}
        </li>
        <li className="drop-down-list">
          {" "}
          <a className="drop-down-link">Saved</a>{" "}
        </li>
        <LogoutButton />
      </ul>
    </div>
  );
};

export default NavBar;
