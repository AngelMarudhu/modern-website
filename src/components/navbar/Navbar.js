import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../images/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export const Menu = () => {
  return (
    <React.Fragment>
      <p>
        <a href="#Home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What Is GPT</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </React.Fragment>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  return (
    <div className="navbar">
      <div className="navbarLinks">
        <div className="navbarLinksLogo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbarLinksContainer">
          <Menu />
        </div>
      </div>
      <div className="navbarSign">
        <p>Sign In</p>
        <button type="button">SignUp</button>
      </div>

      <div className="navbarMenu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}

        {toggle && (
          <>
            <div className="navbarMenuContainer scale-up-center">
              <div className="navbarMenuContainerLinks">
                <Menu />
                <div className="navbarMenuContainerLinksSign">
                  <p>Sign In</p>
                  <button type="button">SignUp</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
