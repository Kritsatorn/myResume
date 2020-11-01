import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";
import { IoMdPerson } from "react-icons/io";
import { FaUniversity, FaBrain } from "react-icons/fa";
import { MdComputer, MdSchool } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
const page__variant = {
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
const AboutPage = () => {
  return (
    <>
      <div className="d-lg-none about__navheader" />
      <motion.div
        className="about__body"
        variants={page__variant}
        initial="hidden"
        animate="visible"
      >
        <div className="about__header">
          <p className="about__header-intro">My intro</p>
          <div className="about__header-title">About Me </div>
        </div>
        <div className="about__content row">
          <div className="about__content-left  col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="about__content-right  col-md-6">
            <div className="about__infomations">
              <div className="about__infomation-title">Infomation</div>
              <div className="about__infomation-item">
                <IoMdPerson />
                <span>Kritsatorn Saengweang</span>
              </div>
              <div className="about__infomation-item">
                <AiOutlinePhone />
                <span>083-001-2870</span>
              </div>
              <div className="about__infomation-item">
                <AiOutlineMail />
                <span>kritsatorn.sw@gmail.com</span>
              </div>
            </div>

            <div className="about__infomations second">
              <div className="about__infomation-title">Education</div>
              <div className="about__infomation-item">
                <MdComputer />
                <span>Computer Engineering</span> <br />
                <FaUniversity />
                <span>Kasetsart Unversity</span>
              </div>
              <div className="about__infomation-item">
                <FaBrain />
                <span>POSN Computer </span>
              </div>
              <div className="about__infomation-item">
                <MdSchool />
                <span>Sawananan wittaya</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
