import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Navbar.css";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );
  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };
  useEffect(() => {
    console.log("HI : ", isMobile);
  }, [isMobile]);
  return (
    <>
      {
        <motion.div
          className="navbar__menu"
          variants={navbar_variant}
          initial="hidden"
          animate="visible"
        >
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
        </motion.div>
        // <div className="navbar__header">HeaderBar</div>
      }
    </>
  );
};
export default Navbar;
