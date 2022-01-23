import React from "react";
import "./whatgpt.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="whatGpt3 sectionMargin" id="wgpt3">
      <div className="whatGpt3Feature">
        <div>
          <Feature
            title="What GPT3"
            text="The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own"
          />
        </div>
      </div>
      <div className="whatGpt3Heading">
        <h1 className="gradientText">
          The Possibilities Are Beyond Your Imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3Container">
        <Feature
          title="ChatBots"
          text="The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own"
        />

        <Feature
          title="KnowledgeBase"
          text="The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own"
        />

        <Feature
          title="Education"
          text="The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
