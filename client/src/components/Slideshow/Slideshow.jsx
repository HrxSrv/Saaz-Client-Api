import React from "react";
import "./Slideshow.scss";
import Gallary from "./CloudinaryGallary/Gallary";
import arrow from "../../assets/arrow2x.png";
import ImageSlider from "./Carousel/Carousel";
import gayGuitar from "../../assets/gay-guitar.png"
function Slideshow() {
  return (
    <div className="layout">
      <div className="left">
        <div className="title">EVENTS</div>
        <div className="subtext">
          <div className="h1s">
            <h1>Discover </h1>
            <h1>All</h1>
            <h1>The</h1>
            <h1> Events</h1>
          </div>
          <img className="arrow" src={arrow} alt="" />
          <img className="gayGuitar" src={gayGuitar} alt=""/>
        </div> 
      </div>
      <div className="right">
        {/* <Gallary /> */}
        <ImageSlider />
      </div>
    </div>
  );
}

export default Slideshow;
