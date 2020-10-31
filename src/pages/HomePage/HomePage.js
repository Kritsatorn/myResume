import React from "react";
import pic from "../../assets/me1-fill.png";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import resume from "../../assets/kritsatorn_sw.pdf";

import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home__page">
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
    </div>
  );
};
export default HomePage;
