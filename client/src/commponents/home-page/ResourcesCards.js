import React from "react";
import img1 from "../../assets/singleblog.jpg";
import "./ResourceCards.css";

function ResourcesCards() {
  return (
    <div className="resouce-card-section">
      <div className="resource">
        <div className="resource-text">
          <h2 className="heading-secondar-resources">Resources</h2>
        </div>
        <div className="resource-card">
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>
      </div>
    </div>
  );
}

function ResourceCard() {
  return (
    <div className="resorce-card">
      <div className="img-box-resources">
        <img src={img1} className="resource-img" />
      </div>
      <div className="text-box">
        <div className="text">
          <h3 className="tirtery-heading">Personal Finance</h3>
        </div>
      </div>
    </div>
  );
}

export default ResourcesCards;
