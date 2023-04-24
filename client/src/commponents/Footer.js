import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-des">
        <div className="footer-grid">
          <Link> MoneyMentor</Link>
          <QuickLinks />
          <MoreLinks />
          <Topics />
          <Contact />
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div>
      <h3 className="tertiary-heading-footer">Quick Links</h3>
      <div className="quick-links">
        <Link classname="links">Home</Link>
        <Link classname="links">Resources</Link>
        <Link classname="links">About</Link>
      </div>
    </div>
  );
}

function MoreLinks() {
  return (
    <div>
      <h3 className="tertiary-heading-footer">More Links</h3>
      <div className="quick-links">
        <Link className="linkss">Blog</Link>
        <Link className="linkss">Write a Blog</Link>
      </div>
    </div>
  );
}
function Topics() {
  return (
    <div>
      <h3 className="tertiary-heading-footer">Topics</h3>
      <div className="quick-links">
        <Link classname="links">Taxes</Link>
        <Link classname="links">Investment</Link>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h3>Contact Us</h3>
      <div className="quick-links">
        <Link classname="links"> moneymentor@gmail.com</Link>
        <Link classname="links">9711397xxx</Link>
      </div>
    </div>
  );
}


export default Footer