import React from "react";
import "./Alert_Banner.scss";
import Notification from "../../../assets/Home-tiles/Home-Nofification-Banner/Notification.jpg";
import NotificationQr from "../../../assets/Home-tiles/Home-Nofification-Banner/Qr.png";
import TilePopup from "../Drawer/Drawer";
import { useState,useEffect } from "react";
function AlertBanner() {
    const [clickedTiles, setClickedTiles] = useState({});

  const handleClick = (tile) => {
    setClickedTiles((prevState) => ({
      ...prevState,
      [tile]: !prevState[tile],
    }));
  };
  useEffect(() => {
    console.log(clickedTiles["notification"]);
  }, [clickedTiles]);
  return (
    <div className="Alert_banner" onClick={() => handleClick("notification")}>
      <div className="horizontal-bar">
        <div
          className="notification-details-square"
          style={{
            backgroundImage: `url(${Notification})`,
            backgroundSize: "320px",
            backgroundPosition: "top",
          }}
          
        >
        <div className="date" >
            <div className="day">21</div>
            <div className="month">October</div>
            <div className="year">2024</div>
        </div>    
        <img src={NotificationQr} alt="" className="Qr" />
        <div className="more">
           more
        </div>
        </div>
        <div className="pc-Qr">
          
        </div>
      </div>
      {clickedTiles["notification"] && (
           <TilePopup
           color="black"
           handleClick={() => handleClick("notification")}
           buttonId="notification"
           eventName={"Tarang '24"}
           image={Notification}
           date={"21 October 2024"}
           eventGallary={"Tarang '23"}
           clickedTiles={`${clickedTiles["notification"]}`}
         />
          )}
    </div>
  );
}

export default AlertBanner;
