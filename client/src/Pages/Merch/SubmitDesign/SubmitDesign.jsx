import React from "react";
import carryBag from "../../../assets/Merch/Saaz-Bags.png"
import './SubmitDesign.scss'
function SubmitDesign ()  {
   return (
    <div className="SubmitDesgin">
        
        <div className="left">
        <div className="title">Submit Your Own Design Here!</div>
        <div className="subtitle">Design a your own saaz merch and win a hamper</div>
        <div className="submit-button">Submit</div>
        </div>
        <div className="carrybag-img">
            <img src={carryBag} alt="" />
        </div>
    </div>
   );
}
export default SubmitDesign;