import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/BannerImg.png";
import saazBanner from "../../../assets/SaazIntext.png"
const Banner = () => {
    return (
        <div className="hero-banner">
            <img src={BannerImg} alt="Banner" className="background"/>
            <div className="content">
                <div className="img-cta">
                <img className="banner-img" src={saazBanner} />
                {/* <div className="ctas">
                        <div className="banner-cta">YOUTUBE</div>
                        <div className="banner-cta v2">READ MORE</div>
                    </div> */}
                </div>
                <div className="text-content">
                     <p>THE MUSIC CLUB</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
