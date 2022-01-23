import React from "react";
import "./brand.css";

import {
  google,
  slack,
  shopify,
  atlassian,
  dropbox,
} from "../../components/brand/import";

const Brand = () => {
  return (
    <div className="brand sectionPadding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
};

export default Brand;
