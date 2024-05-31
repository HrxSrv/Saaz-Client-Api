import React from "react";
import "./About.scss";
import saazBanner from "../../../assets/Group28.png";
import arrow from "../../../assets/arrow.png"
import { useState } from "react";
const About = () => {
    const [rotation, setRotation] = useState(0);

  const handleMouseMove = (event) => {
    const arrow = event.target;
    const rect = arrow.getBoundingClientRect();
    const arrowCenterX = rect.left + rect.width / 2;
    const arrowCenterY = rect.top + rect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - arrowCenterY, mouseX - arrowCenterX) * (180 / Math.PI);
    setRotation(angle + 90); 
  };

  const handleMouseLeave = () => {
    setRotation(0); 
  };
  return (
    <div className="About-section">
      <div className="About-content">
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
        <span className="more">
        <img
        src={arrow}
        alt="Arrow"
        className="arrow"
        style={{ transform: `rotate(${rotation}deg)` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
            <p>more</p>
        </span>
      </div>
    </div>
  );
};

export default About;
