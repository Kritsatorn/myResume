import { Link } from "react-router-dom";
import React from "react";

const NavData = () => {
  return (
    <>
      <Link to="/">
        <div className="navbar__item">HOME</div>
      </Link>
      <Link to="/about">
        <div className="navbar__item">ABOUT</div>
      </Link>
      <Link to="/skill">
        <div className="navbar__item">SKILL</div>
      </Link>
      <Link to="/project">
        <div className="navbar__item">PROJECT</div>
      </Link>
      <Link to="/blog">
        <div className="navbar__item">BLOG</div>
      </Link>
    </>
  );
};
export default NavData;
