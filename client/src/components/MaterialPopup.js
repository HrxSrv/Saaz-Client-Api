import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const MaterialPopup = ({ 
  isOpen = false, 
  onClose,
  data = {
    title: "",
    description: "",
    primaryButton: {
      text: "",
      action: () => {},
    },
    secondaryButton: {
      text: "",
      action: () => {},
    }
  }
}) => {
  // Disable body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='tailwind-scope'>
      <div 
      className="fixed inset-0 z-50" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-70 animate-fadeIn"
        onClick={onClose}
        style={{ position: 'fixed' }}
      />
      
      {/* Popup content */}
      <div 
        className="relative z-50 transform transition-all max-w-lg w-full mx-4 animate-slideUp"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-black rounded-lg shadow-xl border border-black">
          {/* Header */}
          <div className="relative px-6 pt-6 pb-4">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <CloseIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" />
            </button>
            
            <div className="pr-8">
              <h2 className="text-2xl font-medium text-white">
                {data.title}
              </h2>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#1E969F] bg-opacity-30"></div>
          </div>

          {/* Content */}
          <div className="px-6 py-4">
            <p className="text-gray-300 text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Actions */}
          <div className="px-6 py-4 bg-[#181818] rounded-b-lg flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
            {data.secondaryButton && (
              <button
                onClick={data.secondaryButton.action}
                className="px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2 border border-black"
              >
                <CloseIcon className="h-4 w-4" />
                {data.secondaryButton.text}
              </button>
            )}
            
            {data.primaryButton && (
              <button
                onClick={data.primaryButton.action}
                className="px-4 py-2 rounded-md bg-[#1E969F] text-white hover:bg-[#177379] transition-colors duration-200 font-medium text-sm shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <MailOutlineIcon className="h-4 w-4" />
                {data.primaryButton.text}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MaterialPopup;