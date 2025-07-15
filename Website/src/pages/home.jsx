import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative">
          <img
            src="/HomeImage.png"
            alt="KSU Campus"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 text-black text-center py-4">
            <h1 className="text-3xl font-bold">Discover Your Passion and Purpose at KSU</h1>
          </div>
        </div>
        
        {/* Main content sections would go here */}
        <div className="container mx-auto px-4 py-8">
          {/* Content sections would be added here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}