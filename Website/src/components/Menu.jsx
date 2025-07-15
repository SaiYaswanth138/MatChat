import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ onClose }) {
  return (
    <div className="absolute top-16 right-4 bg-white border border-gray-200 shadow-lg rounded-md z-50 w-48">
      <div className="py-1">
        <Link 
          to="#" 
          onClick={onClose}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        >
          Experiments
        </Link>
        <Link 
          to="/chatbot" 
          onClick={onClose}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        >
          Chatbot
        </Link>
      </div>
    </div>
  );
}