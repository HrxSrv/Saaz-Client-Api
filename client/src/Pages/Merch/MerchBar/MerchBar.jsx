import React from "react";
import "./MerchBar.scss";
import SaazFabric from "../../../assets/Merch/Saaz-Fabric.png";
import Notification from "../../../assets/Home-tiles/Home-Nofification-Banner/Notification.jpg";
import NotificationQr from "../../../assets/Home-tiles/Home-Nofification-Banner/Qr.jpg";
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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MaterialPopup from "../../../components/MaterialPopup";
const TickingClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-18 right-17 md:top-4 md:right-8 z-10 bg-black/50 backdrop-blur-sm rounded-lg p-2 md:p-3 flex items-center gap-2 text-white shadow-lg">
      <AccessTimeIcon style={{ fontSize: '20px' }} />
      <span className="font-mono text-lg">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    </div>
  );
};
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-05T19:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-overlay">
      <div className="countdown-content">
        <h2 className="countdown-title">MERCH DROPS IN</h2>
        <div className="countdown-blocks">
          <div className="countdown-block">
            <div className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-block">
            <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-block">
            <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-block">
            <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

function MerchBar({ name }) {
  const lightGallery = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Merch-banner">
      <div className="Merch-horizontal-bar">
        <div className="pc-Qr">
          {/* <TickingClock/> */}
          <LightGallery
            plugins={[lgZoom, lgShare, lgHash]}
            selector=".slick__slide"
            speed={500}
            onInit={(detail) => {
              lightGallery.current = detail.instance;
            }}
          >
            <Slider {...settings}>
              {[one, two, three, four, five].map((img, index) => (
                <a
                  key={index}
                  className="slick__slide"
                  data-lg-size="1600-1067"
                  data-src={img}
                >
                  <div className="image-container">
                    <img
                      className="img-responsive "
                      src={img}
                      alt={`Merch ${index + 1}`}
                    />
                  </div>
                </a>
              ))}
            </Slider>
          </LightGallery>
          <div className="register">
            <a href="https://forms.gle/yD9dPZWgm8qUz94E6" target="_blank" rel="noopener noreferrer">
              Pre-Register
            </a>
          </div>
        </div>
        <div className="merch-title">
          <div className="left">
            <div className="title">MERCH</div>
            <div className="subtext">
              <div className="h1s">
                <h1>Discover</h1>
                <h1>All</h1>
                <h1>New</h1>
                <h1>Merch</h1>
              </div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="notification-details-square">
          <div 
            className="banner-background"
            style={{
              backgroundImage: `url(${SaazFabric})`,
              backgroundSize: "430px",
              backgroundPosition: "center",
            }}
          />
          
        </div>
      </div>
    </div>
  );
}

export default MerchBar;