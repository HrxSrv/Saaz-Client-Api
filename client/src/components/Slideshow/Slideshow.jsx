import React from "react";
import "./Slideshow.scss";
import Gallary from "./CloudinaryGallary/Gallary";
import arrow from "../../assets/arrow2x.png";
import ImageSlider from "./Carousel/Carousel"
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
        {/* <Gallary /> */}
        <ImageSlider/>
      </div>
    </div>
  );
}

export default Slideshow;
