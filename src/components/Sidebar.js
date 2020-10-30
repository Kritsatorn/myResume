import React from "react";
import "./Sidebar.css";
import pic_me from "../assets/pic_me.jpg";
import resume from "../assets/kritsatorn_sw.pdf";
import { AiOutlineDownload, AiFillGithub } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      <img src={pic_me} alt="avatar" className="sidebar__avatar" />

      <div className="sidebar__name"> NAME</div>
      <a href={resume} download="kritsatorn_sw_resume.pdf">
        <div className="sidebar__item">
          <AiOutlineDownload /> DOWLOAD RESUME
        </div>
      </a>

      <div className="sidebar__item">
        <AiFillGithub /> github
      </div>
      <div className="sidebar__item">kritsatorn.sw@gmail.com</div>
      <button> email me</button>
    </>
  );
};
export default Sidebar;
