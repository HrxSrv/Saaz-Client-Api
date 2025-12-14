import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/Hand.jpg";
import saazBanner from "../../../assets/SaazIntext.png";

// positionX represents a percentage to center the SAAZ logo.
const Banner = ({ positionX = -1 }) => {
    return (
        <div className="hero-banner">
            <img src={BannerImg} alt="Banner" className="background"/>
            <div 
                className="content" 
                style={{ left: `${positionX}%` }}
            >
                <div className="img-cta"> 
                    <img className="banner-img" src={saazBanner} alt="Saaz content" />
                </div>
                <div className="text-content">
                    <p>THE MUSIC CLUB</p>
                </div> 
            </div>
        </div>
    );
};

export default Banner;