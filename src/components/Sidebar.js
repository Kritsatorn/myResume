import React from "react";
import "./Sidebar.css";
import pic_me from "../assets/pic_me.jpg";
const Sidebar = () => {
  return (
    <>
      <img src={pic_me} alt="avatar" className="sidebar__avatar" />

      <div className="sidebar__name"> NAME</div>
      <div className="sidebar__item">DOWLOAD RESUME</div>

      <div className="sidebar__item">github</div>
      <div className="sidebar__item">kritsatorn.sw@gmail.com</div>
      <button> email me</button>
    </>
  );
};
export default Sidebar;
