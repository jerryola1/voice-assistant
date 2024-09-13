import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MicDisplay from "./components/MicDisplay"; // Import the new MicDisplay component

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">The Voice Interface of A.I.</h1>
        
        {/* Mic Display Component */}
        <MicDisplay />  {/* This will render the mic image and surrounding design */}
        
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
