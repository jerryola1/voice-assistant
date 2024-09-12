'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center p-6 border-t border-gray-200">
      <p className="text-lg font-semibold">Listening...</p>
      <div className="mt-2">
        <p className="text-2xl font-mono">4:30</p>
      </div>
      <button
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        onClick={() => {
          // Handle end conversation action
        }}
      >
        End Conversation
      </button>
    </footer>
  );
};

export default Footer;
