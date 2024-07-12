import React from "react";
import "./About.scss";
import saazBanner from "../../assets/Group28.png";
import Members from "./Members/Members";
import bandImage from "../../assets/Music Band.png"
const About_page = () => {
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
      </div>
      <Members/>
       <div className="bandImage">
        <img src={bandImage} alt="" />
       </div>
    </div>
  );
};

export default About_page;
