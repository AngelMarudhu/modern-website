import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const Blog = () => {
  return (
    <div className="blog sectionPadding" id="blog">
      <div className="blogHeading">
        <h1 className="gradientText">
          A Lot Is Happening We Are Blogging About It
        </h1>
      </div>

      <div className="blogContainer">
        <div className="blogContainerA">
          <Article
            imgUrl={blog01}
            date="02/FEB/1998"
            title="Open AI Is The Future.Let Us Explore How It Is?"
          />
        </div>
        <div className="blogContainerB">
          <Article
            imgUrl={blog02}
            date="02/FEB/1998"
            title="Open AI Is The Future.Let Us Explore How It Is?"
          />{" "}
          <Article
            imgUrl={blog03}
            date="02/FEB/1998"
            title="Open AI Is The Future.Let Us Explore How It Is?"
          />{" "}
          <Article
            imgUrl={blog04}
            date="02/FEB/1998"
            title="Open AI Is The Future.Let Us Explore How It Is?"
          />{" "}
          <Article
            imgUrl={blog05}
            date="02/FEB/1998"
            title="Open AI Is The Future.Let Us Explore How It Is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
