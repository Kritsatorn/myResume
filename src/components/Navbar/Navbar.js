import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const mql = global.matchMedia(`(min-width: 768px)`);
  const [isMobile, setIsMobile] = useState(null);
  mql.addListener(() => {
    setIsMobile(!mql.matches);
  });

  useEffect(() => {
    console.log("HI : ", isMobile);
  }, []);
  return (
    <>
      {!isMobile ? (
        <div className="col-md-4 box1">
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
        </div>
      ) : (
        <div className="navbar__header">HeaderBar</div>
      )}
    </>
  );
};
export default Navbar;
