'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AnimatedLogo: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className={`relative mx-auto aspect-square transition-all duration-300 h-[16vh] opacity-${opacity}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="relative size-full">
            <Image src="/speaker-bg.svg" alt="Speaker" layout="fill" className="size-full" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[16vh]">
          <div className="w-full animate-pulse-grow-shrink">
            <div className="absolute inset-0 -z-10 flex animate-slow-ping items-center justify-center">
              <div className="w-[92%] aspect-[0.885208333] relative text-[#B4FD83] flex items-center justify-center p-[3.5%]">
                <div className="relative w-full h-full clip-hexagon">
                  <div className="size-full bg-primary-green-600"></div>
                </div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 106.225 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.1 30 L53.1 3 L103.1 30 L103.1 90 L53.1 117 L3.1 90 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="w-full">
              <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-70 transition-all duration-150 group-hover:scale-[1.125]">
                <div className="w-full aspect-[0.885208333] relative text-[#D6FFBA] flex items-center justify-center p-[3.5%]">
                  <div className="relative w-full h-full clip-hexagon">
                    <div className="size-full bg-primary-green-600/0"></div>
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 106.225 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.1 30 L53.1 3 L103.1 30 L103.1 90 L53.1 117 L3.1 90 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="w-full aspect-[0.885208333] relative text-[#B4FD83] flex items-center justify-center p-[3.5%]">
                <div className="relative w-full h-full clip-hexagon">
                  <div className="size-full bg-white dark:bg-black">
                    <div className="w-full h-full relative text-black flex items-center justify-center">
                      <div className="relative w-full h-full clip-hexagon">
                        <Image src="/img/characters/playai.jpg" alt="Play.ai" layout="fill" objectFit="cover" className="size-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 106.225 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.1 30 L53.1 3 L103.1 30 L103.1 90 L53.1 117 L3.1 90 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
