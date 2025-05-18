import React from 'react';
import './Audition.scss';
import drums from '../../../assets/drums.png';
import tape from '../../../assets/Tape.png';
import { useState } from 'react';
import MaterialPopup from '../../MaterialPopup';

function Audition() {
  const [isOpen, setIsOpen] = useState(false);  // Changed initial state to false
  
  const popupData = {
    title: "Sorry we are not inducting right now",  // Updated text to match context
    description: "For now we have paused our commitee induction process, we will let you know if any openings are available.",
    primaryButton: {
      text: "Reach Us",
      action: () => window.location.href = 'mailto:saaz@iiitdmj.ac.in',
    },
    secondaryButton: {
      text: "Close",
      action: () => setIsOpen(false),
    }
  };

  const handleApplyClick = () => {
    setIsOpen(true);  // Open popup when apply button is clicked
  };

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
        <div 
          className="apply-button"
          onClick={handleApplyClick}  // Added click handler
          role="button"
          tabIndex={0}
        >
          apply
        </div>
        <MaterialPopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          data={popupData}
        />
      </div>
    </div>
  );
}

export default Audition;