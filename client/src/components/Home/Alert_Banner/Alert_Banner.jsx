import React from "react";
import "./Alert_Banner.scss";
import Notification from "../../../assets/Home-tiles/Home-Nofification-Banner/Notification.jpg";
import NotificationQr from "../../../assets/Home-tiles/Home-Nofification-Banner/Qr.png";
import TilePopup from "../Drawer/Drawer";
import { useState, useEffect } from "react";
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
  const notification = {
    title: "Tarang '24",
    date: "21",
    month: "October",
    year: "2024",
    fullDate: "21 October 2024",
    eventGallary: "Tarang '23",
    eventBulletins: [
      "Clash of Melodies",
      "Sa Re Ga Ma",
      "Bonfire",
      "Dard-e-Disco",
      "Band Wars",
    ],
    registerLink: "#",
  };
  return (
    <div className="Alert_banner">
      <div className="horizontal-bar">
        <div className="pc-Qr">
          <img src={NotificationQr} alt="" />
          <div className="register">Register</div>
        </div>
        <div className="Bulletin">
          <div className="title">Prospects</div>
          <div className="bulletins">
            {notification.eventBulletins.map((x) => (
              <div> {"•" + " " + x} </div>
            ))}
          </div>
        </div>
        <div
          className="notification-details-square"
          style={{
            backgroundImage: `url(${Notification})`,
            backgroundSize: "320px",
            backgroundPosition: "top",
          }}
        >
          <div className="date">
            <div className="day">{notification.date}</div>
            <div className="month">{notification.month}</div>
            <div className="year">{notification.year}</div>
          </div>
          <img src={NotificationQr} alt="" className="Qr" />
          <div className="more" onClick={() => handleClick("notification")}>
            more
          </div>
        </div>
      </div>
      {clickedTiles["notification"] && (
        <TilePopup
          color="black"
          handleClick={() => handleClick("notification")}
          buttonId="notification"
          eventName={notification.title}
          image={Notification}
          date={notification.fullDate}
          eventGallary={notification.eventGallary}
          clickedTiles={`${clickedTiles["notification"]}`}
        />
      )}
    </div>
  );
}

export default AlertBanner;
