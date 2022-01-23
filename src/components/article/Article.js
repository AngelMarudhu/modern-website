import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="blogContainerArticle">
      <div className="blogContainerArticleImage">
        <img src={imgUrl} alt="Image" />
      </div>
      <div className="blogContainerArticleContent">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
        </div>
        <h3>Read Full Article</h3>
      </div>
    </div>
  );
};

export default Article;
