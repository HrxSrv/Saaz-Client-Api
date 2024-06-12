import React from "react";
import "./Footer.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
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
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </div>
        </div>
        </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            Designed By Vishrut Sagar
          </span>
          <span className="text">
            Developed By Harshit Srivastava
          </span>
          {/* <img src={Payment} /> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
