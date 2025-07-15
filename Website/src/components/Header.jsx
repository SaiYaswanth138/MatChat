import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img 
          src="/ksu_logo.png" 
          alt="KSU Logo" 
          className="h-12"
        />
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="text-black hover:text-gray-600 focus:outline-none"
        >
          <span className="text-2xl">☰</span>
          <span className="ml-2 text-lg font-semibold">MENU</span>
        </button>
      </div>
      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
    </header>
  );
}