// MicDisplay.tsx
import React from 'react';
import Image from 'next/image';

const MicDisplay: React.FC = () => {
  return (
    <div className="mic-container">
      {/* Text above the icon */}
      <p className="text-sm uppercase mb-2 tracking-wide">In Conversation With</p>
      
      {/* Central logo */}
      <div className="mic-logo-container relative w-[150px] h-[150px]">
        <div className="absolute inset-0 clip-hexagon bg-gradient-to-br from-primary-green-500 to-primary-green-700 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[57.7%] bg-primary-green-600 transform -rotate-30"></div>
            <div className="w-full h-[57.7%] bg-primary-green-600 transform rotate-30"></div>
          </div>
          <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 relative z-10">
            <path d="M50 10 L90 30 V70 L50 90 L10 70 V30 Z" fill="none" stroke="white" strokeWidth="2" />
            <g transform="translate(50 50)">
              <path d="M-15 -25 L15 -25 L0 0 Z" fill="white" /> {/* Play icon */}
              <circle cx="0" cy="0" r="10" fill="white" /> {/* Call icon */}
              <path d="M0 25 L5 15 L-5 15 Z" fill="white" /> {/* Star icon (simplified) */}
            </g>
          </svg>
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 106.225 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.1 30 L53.1 3 L103.1 30 L103.1 90 L53.1 117 L3.1 90 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        </svg>
      </div>
      
      {/* Text below the icon */}
      <p className="text-xl font-bold mt-2">PLAY.AI</p>
    </div>
  );
};

export default MicDisplay;
