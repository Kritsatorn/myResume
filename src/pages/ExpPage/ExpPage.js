import React from "react";
import "./ExpPage.css";
import techjam__pic from "../../assets/techjam.webp";
import aiat__pic from "../../assets/aiat.png";
const ExpPage = () => {
  return (
    <>
      <div className="d-lg-none exp__navheader" />
      <div className="exp__body">
        <div className="exp__title">EXPERIENCE & COMPETITION</div>
      </div>
      <div className="exp__section container">
        <div className="exp__box-year">
          <span>My journey</span>
        </div>

        <div className="exp__boxs row">
          <div className="col-md-5 offset-md-2 boxx">
            <div className="exp__box  ">
              <div className="exp__pic">
                <img src={techjam__pic} alt="techjam" />
              </div>
              <div>Final round - Techjam 2019</div>
            </div>
          </div>
          <div className="col-md-5 offset-md-2 boxx">
            <div className="exp__box  ">
              <div className="exp__pic">
                <img src={aiat__pic} alt="techjam" />
              </div>
              <div>Final round - Techjam 2019</div>
            </div>
          </div>
          <div className="col-md-5 offset-md-2 boxx">
            <div className="exp__box  ">
              <div className="exp__pic">
                <img src={techjam__pic} alt="techjam" />
              </div>
              <div>Final round - Techjam 2019</div>
            </div>
          </div>
          <div className="col-md-5 offset-md-2 boxx">
            <div className="exp__box  ">
              <div className="exp__pic">
                <img src={techjam__pic} alt="techjam" />
              </div>
              <div>Final round - Techjam 2019</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpPage;
