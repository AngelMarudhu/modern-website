import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving End Distrusts Instantly",
    text: "The Future Is Now And You Just Need To Realize It, Step Into Futur Make It Happen",
  },
  {
    title: "Become The Tended Active",
    text: "The Future Is Now And You Just Need To Realize It, Step Into Futur Make It Happen",
  },
  {
    title: "Message Or Nothing",
    text: "The Future Is Now And You Just Need To Realize It, Step Into Futur Make It Happen",
  },
  {
    title: "Really Boy Law Country",
    text: "The Future Is Now And You Just Need To Realize It, Step Into Futur Make It Happen",
  },
];

const Features = () => {
  return (
    <div className="features sectionPadding" id="features">
      <div className="featuresHeading">
        <h1 className="gradientText">
          The Future Is Now And You Just Need To Realize It, Step Into Future
          Today & Make It Happen
        </h1>
        <p>Requests Early Access To Get Started</p>
      </div>
      <div className="featuresContainer">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
