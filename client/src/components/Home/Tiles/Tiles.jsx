import React from 'react'
import './Tiles.scss'
import arrow from "../../../assets/arrow3x.png"
import menAvatar from "../../../assets/menAvatar.png"
function Tiles() {
  return (
    <div className='tileLayout'>
        <div className="menAvatar">
            <img src={menAvatar} alt="" />
        </div>
    <div className='Tiles'>
      <div className="one">
        <div className="title">EVENTS</div>
        <div className="more">more</div>
        <div className="arrow"><img src={arrow} alt="arrowIcon" /></div>
      </div>
      <div className="two"></div>
      <div className="three"></div>
      <div className="four"></div>
      <div className="five"></div>
      <div className="six"></div>
      <div className="seven"></div>
      <div className="eight"></div>
      <div className="nine"></div>
      <div className="ten"></div>
    </div>
    </div>
  )
}

export default Tiles
