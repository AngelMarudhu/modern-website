import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gptFeaturesContainerFeature">
      <div className="gptFeaturesContainerFeatureTitle">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gptFeaturesContainerFeatureText">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
