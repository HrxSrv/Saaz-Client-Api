import React from "react";
import Cart from "../../../assets/Merch/Saaz-Cart.png"
import "./Merch_Banner.scss";
import BannerImg from "../../../assets/BannerImg.png";
import saazBanner from "../../../assets/SaazIntext.png"
const MerchBanner = () => {
    return (
        <div className="merch-hero-banner">
            <div className="cart">
            <img src={Cart} alt="" />
            </div>
            <div className="content">
                <div className="img-cta">
                <img className="banner-img" src={saazBanner} />
                </div>
                <div className="text-content">
                     <p>All NEW MERCH...</p>
                </div> 
            </div>
        </div>
    );
};

export default MerchBanner;
