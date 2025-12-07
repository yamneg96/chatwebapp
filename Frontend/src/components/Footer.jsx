import React from 'react';
import { Twitter, Linkedin, Github, MessageSquare, BookOpen, Users, Instagram, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Updated Name to reflect course/student context
  const companyName = "NYDLC";

  return (
    // Style consistent with the modern, high-contrast theme
    <footer className="bg-base-300 py-10 px-4 border-t border-base-content/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b pb-8 border-base-content/10">
          
          {/* Company Info / Logo Section (Updated for Course Context) */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3 group w-fit">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                <MessageSquare className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-base-content transition-colors group-hover:text-primary">
                {companyName}
              </h3>
            </Link>
            <p className="text-sm text-base-content/70 max-w-sm">
              The dedicated student platform for the NYDev course. Connect with peers, ask questions, and collaborate on assignments. 🎓
            </p>
          </div>
          
          {/* Quick Links Section (Course Focus) */}
          <div className="col-span-1">
            <h4 className="text-md font-semibold text-base-content mb-3 flex items-center gap-2"><BookOpen size={18} /> Course Links</h4>
            <ul className="list-none space-y-2">
              <li><Link className="text-base-content/70 hover:text-primary transition-colors text-sm" to="/syllabus">Syllabus</Link></li>
              <li><Link className="text-base-content/70 hover:text-primary transition-colors text-sm" to="/assignments">Assignments</Link></li>
              <li><Link className="text-base-content/70 hover:text-primary transition-colors text-sm" to="/faq">Student FAQ</Link></li>
              <li><Link className="text-base-content/70 hover:text-primary transition-colors text-sm" to="/instructor">Instructor Contact</Link></li>
            </ul>
          </div>

          {/* Legal / Policies Section */}
          <div className="col-span-1">
            <h4 className="text-md font-semibold text-base-content mb-3 flex items-center gap-2"><Users size={18} /> Community</h4>
            <ul className="list-none space-y-2">
              <li><Link className="text-base-content/70 hover:text-primary transition-colors text-sm" to="/community-guidelines">Guidelines</Link></li>
              <li><Link className="text-base-content/70 hover:text-primary transition-colors text-sm" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-base-content/70 hover:text-primary transition-colors text-sm" to="/terms">Terms of Use</Link></li>
              <li><Link className="text-base-content/70 hover:text-primary transition-colors text-sm" to="/accessibility">Accessibility</Link></li>
            </ul>
          </div>

          {/* Social / Connect Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-md font-semibold text-base-content mb-3">Connect</h4>
            <div className="social-links flex gap-4">
              <a 
                className="p-2 rounded-full bg-base-content/10 text-base-content/70 hover:bg-primary hover:text-white transition-colors duration-200" 
                href="https://www.instagram.com/nydevofficial/" 
                aria-label="Course Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                className="p-2 rounded-full bg-base-content/10 text-base-content/70 hover:bg-primary hover:text-white transition-colors duration-200" 
                href="https://www.linkedin.com/in/nydev-company-43827a399/" 
                aria-label="Course LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                className="p-2 rounded-full bg-base-content/10 text-base-content/70 hover:bg-primary hover:text-white transition-colors duration-200" 
                href="https://t.me/nydevlearn" 
                aria-label="Course Telegram"
              >
                <Send size={20} />
              </a>
              <a 
                className="p-2 rounded-full bg-base-content/10 text-base-content/70 hover:bg-primary hover:text-white transition-colors duration-200" 
                href="https://github.com/NY-Development" 
                aria-label="Course GitHub Repo"
              >
                <Github size={20} />
              </a>
              <a 
                className="p-2 rounded-full bg-base-content/10 text-base-content/70 hover:bg-primary hover:text-white transition-colors duration-200" 
                href="https://www.youtube.com/@NYDev-t6p"
                aria-label="Course YouTube Video"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="footer-bottom text-center pt-6">
          <p className="text-sm text-base-content/60">
            &copy; {currentYear} {companyName}. Powered by NYDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}