import React from "react";
import "./About.scss";
import saazBanner from "../../../assets/SaazIntext.png";
import arrow from "../../../assets/arrow.png"
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate =useNavigate();
  return (
    <div className="Home-About-section">
      <div className="Home-About-content">
        <div className="bannerImg">
          <img src={saazBanner} alt="saaz banner" />
        </div>
        {/* <div className="form"> 
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div> */}
        <span className="text">
          Saaz - The Music Club, of PDPM IIITDM- Jabalpur, is a platform that
          fosters a network among peers through the language of music. The club
          aims to discover and enhance the skills of students with diverse
          talents, providing opportunities to showcase and develop those
          talents. It organizes various events, competitions, and practice
          sessions to create a supportive environment for students to gain
          confidence and explore their musical abilities.
        </span>
        <span className="more" onClick={()=>{
          navigate("/about")
        }}>
        <img
        src={arrow}
        alt="Arrow"
        className="arrow"
      />
            <p>more</p>
        </span>
      </div>
    </div>
  );
};

export default About;
