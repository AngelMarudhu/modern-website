import React from "react";
import "./footer.css";
import gpt3Logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <div className="footer sectionPadding">
      <div className="footerHeading">
        <h1 className="gradientText">
          Do You Want To Step In To the Future Before Others{" "}
        </h1>
      </div>

      <div className="footerBtn">
        <p>Request Early Access</p>
      </div>

      <div className="footerLinks">
        <div className="footerLinksLogo">
          <img src={gpt3Logo} alt="Logo" />
          <p>Crate By MARUDHUPANDIYAN All Rights Reserved.</p>
        </div>

        <div className="footerLinksDiv">
          <h4>Other Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>

        <div className="footerLinksDiv">
          <h4>Projects</h4>
          <p>TwitterClone</p>
          <p>LinkedinClone</p>
          <p>TinderClone</p>
          <p>ResponsiveBuilding</p>
        </div>

        <div className="footerLinksDiv">
          <h4>Get In Touch</h4>
          <p>MARUDHUPANDIYAN</p>
          <p>+91 950 080 4720</p>
          <p>Marudhupandiyanshanmugavel@gmail.com</p>
        </div>
      </div>

      <div className="footerCopyright">
        <h4 className="gradientText">@Marudhu Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
