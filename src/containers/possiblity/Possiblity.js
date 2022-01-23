import React from "react";
import "./possiblity.css";
import PossiblityImage from "../../images/possibility.png";

const Possiblity = () => {
  return (
    <div className="possiblity sectionPadding" id="possibility">
      <div className="possiblityImage">
        <img src={PossiblityImage} alt="Possibility" />
      </div>
      <div className="possiblityContent">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradientText">
          The Possibilities Are Beyound Your Imagination
        </h1>
        <p>
          The Future Is Now And You Just Need To Realize It, Step Into Futur
          Make It Happen
        </p>
        <h3>Request Early Access To Get Started</h3>
      </div>
    </div>
  );
};

export default Possiblity;
