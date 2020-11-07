import React from "react";
import "./ExpPage.css";
import { motion } from "framer-motion";
import techjam__pic from "../../assets/techjam.webp";
import aiat__pic from "../../assets/aiat.png";
import ExpData from "../../data/ExpData";
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
const ExpCard = ({ data, index }) => {
  return (
    <>
      <div key={index} className="col-md-5 offset-md-2 boxx">
        <div className="exp__box">
          <div className="exp__pic">
            <img src={techjam__pic} alt="techjam" />
            <div className="exp__data">
              <div className="exp__data-title">{data.title}</div>
              <div className="exp__data--des">{data.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ExpPage = () => {
  return (
    <>
      <div className="d-lg-none exp__navheader" />

      <motion.div
        className="exp__body"
        variants={page__variant}
        initial="hidden"
        animate="visible"
      >
        <div className="exp__title">EXPERIENCE & COMPETITION</div>

        <div className="exp__section container">
          <div className="exp__box-year">
            <span>My journey</span>
          </div>

          <div className="exp__boxs row">
            {ExpData.map((item, index) => {
              return <ExpCard data={item} index={index} />;
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ExpPage;
