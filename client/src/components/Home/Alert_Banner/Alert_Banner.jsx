import React from "react";
import "./Alert_Banner.scss";
import Notification from "../../../assets/Home-tiles/SaazNight.png";
import NotificationQr from "../../../assets/Home-tiles/Home-Nofification-Banner/Qr.jpg";
import Ticket from "../../../assets/Home-tiles/Home-Nofification-Banner/ticket.jpg";
import SaazFabric from "../../../assets/Merch/Saaz-Fabric.png"
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
    title: "Saaz Night '25",
    date: "7",
    month: "April",
    year: "2025",
    fullDate: "7 April 2025",
    eventGallary: "Saaz Night '24",
    eventBulletins: [
     "Duet Competetion",
     "Sufi",
     "Qawwali",
     "Bollywood",
     "Rock",
     "Metal"
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe5_PcHI7wfTLpsxcUg8-7odOYk3yJj98tohs8dBxwWus_iDg/viewform?usp=sharing"
  };
  return (
    <div className="Alert_banner"> 
      <div className="horizontal-bar">
        <div className="pc-Qr">
          <img src={NotificationQr} alt="" />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5_PcHI7wfTLpsxcUg8-7odOYk3yJj98tohs8dBxwWus_iDg/viewform?usp=sharing" className="register">Register</a>
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
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
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
          image={Ticket}
          date={notification.fullDate}
          eventGallary={notification.eventGallary}
          clickedTiles={`${clickedTiles["notification"]}`}
        />
      )}
    </div>
  );
}

export default AlertBanner;
