import React from "react";
import "./header.css";
import people from "../../images/people.png";
import ai from "../../images/ai.png";

const Header = () => {
  return (
    <div className="header sectionPadding" id="home">
      <div className="headerContent">
        <h1 className="gradientText focus-in-expand-fwd">
          Let's Build Something Amazing With GPT-3 OpenAI
        </h1>
        <p>
          GPT-3 produced eight different outputs, or essays. Each was unique,
          interesting and advanced a different argument. The Guardian, could
          have just run one of the essays in its entirety. However, we chose
          instead to pick the best parts of each, in order to capture the
          different styles and registers of the AI.
        </p>
        <div className="headerContentInput">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="headerContentPeople">
          <img src={people} />
          <p>1,600 People Requested Access A Visit In Last 24 Hrs</p>
        </div>

        <div className="headerImage">
          <img src={ai} alt="AI" />
        </div>
      </div>
    </div>
  );
};

export default Header;
