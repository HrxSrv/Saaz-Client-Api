import React from 'react';
import Confetti from 'react-confetti';
// import { X, PartyPopper } from 'lucide-react';
import { FiX, FiGift } from 'react-icons/fi';

const SuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
        recycle={false}
      />
      
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative animate-fade-in">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={24} />
          </button>
          
          {/* Header */}
          <div className="pt-6 px-6 pb-4">
            <div className="flex items-center justify-center mb-4">
              <FiGift size={32} className="text-green-500 mr-2" />
            </div>
            <h2 className="text-2xl font-bold text-center text-green-600">
              Congratulations! 🎉
            </h2>
          </div>
          
          {/* Content */}
          <div className="px-6 pb-6 text-center space-y-4">
            <p className="text-lg text-gray-800">
              Your merch order has been successfully placed!
            </p>
            <p className="text-gray-600">
              We'll reach out to you once your merch is ready.
            </p>
            
            {/* Button */}
            <button 
              onClick={onClose}
              className="mt-6 bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPopup;