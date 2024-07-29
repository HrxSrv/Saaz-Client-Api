import React from "react";
import "./Footer.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";
// import Payment from "../../assets/payments.png";
const Footer = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const currLocation = location.pathname === '/';
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Indian Institute of Information Technology Design &
              Manufacturing Jabalpur Dumna Airport Road, Dumna - 482005
              saaz@iiitdmj.ac.in +91 7466917708
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 6260595371</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: saaz@iiitdmj.ac.in</div>
          </div>
      </div>
      <div className="col">
        <div className="social-icons">
                    <a className="icon" href="https://www.youtube.com/@saaziiitdmj8882" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={14} />
                    </a>
                    <a className="icon" href="https://www.facebook.com/saazIIITDMJ" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={14} />
                    </a>
                    {/* <a className="icon" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={14} />
                    </a> */}
                    <a className="icon" href="https://www.instagram.com/saaz_iiitdmj/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={14} />
                    </a>
                </div>
        </div>
        </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          {!currLocation && <span className="text">
            Designed By Vishrut Sagar
          </span>}
          {!currLocation && <span className="text">
            Developed By Harshit Srivastava
          </span>}
          {/* <img src={Payment} /> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
