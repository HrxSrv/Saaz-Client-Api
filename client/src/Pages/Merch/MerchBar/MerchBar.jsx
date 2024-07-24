import React from "react";
import "./MerchBar.scss";
import SaazFabric from "../../../assets/Merch/Saaz-Fabric.png";
import Notification from "../../../assets/Home-tiles/Home-Nofification-Banner/Notification.jpg";
import NotificationQr from "../../../assets/Home-tiles/Home-Nofification-Banner/Qr.png";
import TilePopup from "../../../components/Home/Drawer/Drawer";
import { useState, useEffect } from "react";
import { useRef } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import Slider from 'react-slick';
import one from '../../../assets/Merch/MerchShoot/1.jpg'
import two from '../../../assets/Merch/MerchShoot/2.jpg'
import three from '../../../assets/Merch/MerchShoot/3.jpg'
import four from '../../../assets/Merch/MerchShoot/4.jpg'
import five from '../../../assets/Merch/MerchShoot/5.jpg'
import arrow from "../../../assets/arrow2x.png";
function MerchBar( { name }) {
    const lightGallery = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const merchShootImages=[];
  return (
    <div className="Merch-banner">
       
      <div className="Merch-horizontal-bar">
        <div className="pc-Qr">
        <LightGallery
        plugins={[lgZoom, lgShare, lgHash]}
        selector={'.slick__slide'}
        speed={500}
        onInit={(detail) => {
          lightGallery.current = detail.instance;
        }}
      >
        <Slider {...settings}>
          <a
            className={'slick__slide'}
            data-lg-size="1600-1144"
            data-src={one}
          >
            <img
              className="img-responsive"
              src={one}
            />
          </a>
          <a
            data-lg-size="1600-1067"
            className="slick__slide"
            data-src={two}
          >
            <img
              className="img-responsive"
              src={two}
            />
          </a>
          <a
            data-lg-size="1600-1067"
            className="slick__slide"
            data-src={three}
          >
            <img
              className="img-responsive"
              src={three}
            />
          </a>
          <a
            data-lg-size="1600-1067"
            className="slick__slide"
            data-src={four}
          >
            <img
              className="img-responsive"
              src={four}
            />
          </a>
          <a
            data-lg-size="1600-1067"
            className="slick__slide"
            data-src={five}
          >
            <img
              className="img-responsive"
              src={five}
            />
          </a>
        </Slider>
      </LightGallery>

          <div className="register">Register</div>
        </div>
        <div className="merch-title">
        <div className="left">
        <div className="title">MERCH</div>
        <div className="subtext">
          <h1>
            Discover <br /> 
            All
            <br /> The

            <br /> MERCH
          </h1>
          <img src={arrow} alt="" />
        </div>
      </div>
        </div>
        <div
          className="notification-details-square"
          style={{
            backgroundImage: `url(${SaazFabric})`,
            backgroundSize: "430px",
            backgroundPosition: "center",
          }}
        >
        </div>
      </div>
    </div>
  );
}

export default MerchBar;

