import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Chatbot() {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center bg-white text-black p-4">
        <div className="w-full max-w-2xl mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">KSU Chat Assistant</h1>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p>Hello! How can I help you today?</p>
          </div>
        </div>
        <div className="w-full max-w-2xl fixed bottom-8 bg-white p-4">
          <input
            type="text"
            placeholder="Send a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border border-gray-400 rounded-2xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && input.trim()) {
                // Handle send message
                setInput('');
              }
            }}
          />
          <button 
            className="mt-2 bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            disabled={!input.trim()}
          >
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}