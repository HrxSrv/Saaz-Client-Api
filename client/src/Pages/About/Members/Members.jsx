import './Members.scss'
import React from 'react'
import cordinator from "../../../assets/MemberImages/Cordinator.png"
import cocordinator1 from "../../../assets/MemberImages/Co-Cordinator 1.png"
import cocordinator2 from "../../../assets/MemberImages/Co-Cordinator 2.png"
function Members() {
  return (
    <div className='Members_page'>
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
    </div>
  )
}

export default Members
