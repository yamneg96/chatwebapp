import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 px-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="footer-section mb-4 md:mb-0">
          <h3 className="text-lg font-bold">NYDLC Chat</h3>
          <p>Professional communication platform</p>
        </div>
        
        <div className="footer-section mb-4 md:mb-0">
          <h4 className="text-md font-semibold">Quick Links</h4>
          <ul className="list-none">
            <li><a className="text-gray-400 hover:text-white" href="#privacy">Privacy Policy</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#terms">Terms of Service</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="text-md font-semibold">Follow Us</h4>
          <div className="social-links flex gap-4">
            <a className="text-gray-400 hover:text-white" href="#twitter"><Twitter size={20} /></a>
            <a className="text-gray-400 hover:text-white" href="#linkedin"><Linkedin size={20} /></a>
            <a className="text-gray-400 hover:text-white" href="#github"><Github size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center mt-4">
        <p className="text-sm">&copy; {currentYear} NYDLC Chat System. All rights reserved.</p>
      </div>
    </footer>
  );
}