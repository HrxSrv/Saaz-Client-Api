import React from 'react'
import './Audition.scss'
import drums from '../../../assets/drums.png'
import tape from '../../../assets/Tape.png'
function Audition() {
  return (
    <div className='audition-layout'>
      <div className="drums">
        <img src={drums} alt="" />
      </div>
      <div className="horizontal-bar">
        <div className="h1">
            Wanna join working commitee ?
        </div>
        <div className="tape">
            <img src={tape} alt="" />
        </div>
        <div className="apply-button">
            apply
        </div>
      </div>
    </div>
  )
}

export default Audition
