import "./Members.scss";
import React from "react";
import cordinator from "../../../assets/MemberImages/Cordinator.png";
import cocordinator1 from "../../../assets/MemberImages/Co-Cordinator 1.png";
import cocordinator2 from "../../../assets/MemberImages/Co-Cordinator 2.png";
import arrow from "../../../assets/arrow2x.png";
import { Grid } from "@mui/material";
import { useState } from "react";
function Members() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const testMembers = [
    {
      name: "Harshit Srivastava",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Kaustubh Upadhyay",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
    {
      name: "Random log",
      path: "../../../assets/Dummy Images/bg (1).png",
    },
  ];
  return (
    <div className="Members_page">
      <div className="members-title">
        <div className="one"></div>
        <div className="two">Members</div>
        <div className="three"></div>
      </div>
      <div className="members-details">
        <div className="cordinator">
          <img src={cordinator} alt="" />
          <div className="position">Cordinator</div>
          <div className="Name">Kaustubh Upadhyay</div>
        </div>
        <div className="cocs">
          <div className="co-cordinator1">
            <img src={cocordinator1} alt="" />
            <div className="position">Co-Cordinator</div>
            <div className="Name">Utkarsh Raj</div>
          </div>
          <div className="co-cordinator2">
            <img src={cocordinator2} alt="" />
            <div className="position">Co-Cordinator</div>
            <div className="Name">Prateek Pandey</div>
          </div>
        </div>
      </div>
      <div className="bottom-half">
        <div className="working-committe-title">Committee Members</div>
        <div className={`working-committe ${isExpanded ? "expanded" : ""}`}>
          <Grid container spacing={2}>
            {testMembers.map((member, index) => (
              <Grid item key={index} xs={6} sm={6} md={4}>
                <div className="committee-member-tile">
                  <img
                    src={require("../../../assets/Dummy Images/bg (1).png")}
                    alt=""
                  />
                  <div className="Name">{member.name}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
          <div className={`toggle-button ${isExpanded ? "up":""}`} onClick={toggleExpand}>
            <img src={arrow} alt="" />
            <div className="more">
                more
            </div>
          </div>
    </div>
  );
}

export default Members;
