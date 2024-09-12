// page.tsx
import React from "react";
import dynamic from 'next/dynamic';
import Image from "next/image"; // Use Next.js Image component for optimization

// Lazy load the Footer component
const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <p>Loading...</p>
});

// Lazy load the Header component
const Header = dynamic(() => import('./components/Header'), {
  loading: () => <p>Loading...</p>
});

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">The Voice Interface of A.I.</h1>
        <h2 className="text-2xl mb-6">In Conversation with</h2>
        <div className="mb-4">
          <Image 
            src="/logo.png" 
            alt="Play.AI Logo" 
            width={150} 
            height={150} 
            loading="lazy"
          />
        </div>
        <p className="text-xl font-medium">PLAY.AI</p>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
