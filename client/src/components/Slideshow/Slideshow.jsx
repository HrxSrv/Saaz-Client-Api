import React from "react";
import "./Slideshow.scss";
import Gallary from "./CloudinaryGallary/Gallary";
import arrow from "../../assets/arrow2x.png";
function Slideshow() {
  return (
    <div className="layout">
      <div className="left">
        <div className="title">EVENTS</div>
        <div className="subtext">
          <h1>
            Discover <br /> <br />
            All
            <br />
            <br /> The
            <br />
            <br /> Events
          </h1>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="right">
        <Gallary />
      </div>
    </div>
  );
}

export default Slideshow;
