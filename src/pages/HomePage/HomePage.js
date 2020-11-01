import React from "react";
import pic from "../../assets/me1-fill.png";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import resume from "../../assets/kritsatorn_sw.pdf";
import { motion } from "framer-motion";
import "./HomePage.css";
const HomePage = () => {
  const home__variant = {
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
  return (
    <motion.div
      className="home__page"
      variants={home__variant}
      initial="hidden"
      animate="visible"
    >
      <div className="home__pic">
        <img src={pic} alt="picture" />
      </div>
      <div className="home__name">Kritsatorn Saegnweang</div>
      <div className="home__subname">Frontend & A.I. Student</div>
      <div className="home__icons">
        <a href="!#">
          <AiFillGithub size={"2.5rem"} />
        </a>
        <a href="!#">
          <AiFillFacebook size={"2.5rem"} />
        </a>
      </div>
      <a href={resume} download="kritsatorn_sw_resume">
        <div className="home_button">DOWLOAD RESUME</div>
      </a>
    </motion.div>
  );
};
export default HomePage;
