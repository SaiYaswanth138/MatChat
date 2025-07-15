import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFilePdf
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-ksu-blue text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <div className="h-px w-16 bg-ksu-gold mb-4"></div>
          
          <div className="space-y-2">
            <div>
              <p className="font-bold">Kennesaw Campus</p>
              <p>1000 Chastain Road</p>
              <p>Kennesaw, GA 30144</p>
            </div>
            
            <div className="pt-4">
              <p className="font-bold">Marietta Campus</p>
              <p>1100 South Marietta Pkwy</p>
              <p>Marietta, GA 30060</p>
            </div>
            
            <div className="pt-4">
              <p className="font-bold">Phone</p>
              <p>470-KSU-INFO</p>
              <p>(470-578-4636)</p>
            </div>
            
            <div className="pt-4">
              <p className="font-bold">Campus Maps</p>
            </div>
            
            <div className="pt-4">
              <p className="font-bold">Media Resources</p>
            </div>
          </div>
        </div>
        
        {/* Resources Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Resources For</h3>
          <div className="h-px w-16 bg-ksu-gold mb-4"></div>
          <ul className="space-y-2">
            <li className="hover:text-ksu-gold cursor-pointer">Current Students</li>
            <li className="hover:text-ksu-gold cursor-pointer">Online Only Students</li>
            <li className="hover:text-ksu-gold cursor-pointer">Faculty & Staff</li>
            <li className="hover:text-ksu-gold cursor-pointer">Parents & Family</li>
            <li className="hover:text-ksu-gold cursor-pointer">Alumni & Friends</li>
            <li className="hover:text-ksu-gold cursor-pointer">Community & Business</li>
          </ul>
        </div>
        
        {/* Related Links Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Related Links</h3>
          <div className="h-px w-16 bg-ksu-gold mb-4"></div>
          <ul className="space-y-2">
            <li className="hover:text-ksu-gold cursor-pointer">Libraries</li>
            <li className="hover:text-ksu-gold cursor-pointer">Housing</li>
            <li className="hover:text-ksu-gold cursor-pointer">Financial Aid</li>
            <li className="hover:text-ksu-gold cursor-pointer">Degrees, Majors & Programs</li>
            <li className="hover:text-ksu-gold cursor-pointer">Registrar</li>
            <li className="hover:text-ksu-gold cursor-pointer">Job Opportunities</li>
            <li className="hover:text-ksu-gold cursor-pointer">Campus Security</li>
            <li className="hover:text-ksu-gold cursor-pointer">Global Education</li>
            <li className="hover:text-ksu-gold cursor-pointer">Sustainability</li>
            <li className="hover:text-ksu-gold cursor-pointer">Accessibility</li>
          </ul>
        </div>
      </div>
      
      {/* Social Media and Copyright */}
      <div className="border-t border-gray-600 py-6">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-3">
            <a href="#" className="bg-ksu-gold text-black rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-yellow-300">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="bg-ksu-gold text-black rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-yellow-300">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="bg-ksu-gold text-black rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-yellow-300">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="bg-ksu-gold text-black rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-yellow-300">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-ksu-gold text-black rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-yellow-300">
              <FaYoutube size={16} />
            </a>
            <a href="#" className="bg-ksu-gold text-black rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-yellow-300">
              <FaFilePdf size={16} />
            </a>
          </div>
          
          <div className="text-sm">
            &copy; 2025 Kennesaw State University. All Rights Reserved.
          </div>
        </div>
      </div>
      
      {/* Bottom Links */}
      <div className="bg-black py-4">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-ksu-gold">Privacy Statement</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-ksu-gold">Accreditation</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-ksu-gold">Emergency Information</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-ksu-gold">Report a Concern</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-ksu-gold">Feedback</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-ksu-gold">Open Records</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-ksu-gold">Human Trafficking Notice</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-ksu-gold">Text Only</a>
          </div>
        </div>
      </div>
    </footer>
  );
}