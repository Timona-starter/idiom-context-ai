import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{APP_NAME}</h3>
            <p className="text-gray-400">
              Master English communication through interactive, real-world scenarios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/#scenarios" className="text-gray-400 hover:text-white">Scenarios</a></li>
              <li><Link to="/feedback" className="text-gray-400 hover:text-white">Feedback</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: <a href="mailto:support@zuri.com" className="hover:text-white">support@zuri.com</a></li>
              <li>Phone: +1 (555) 000-1111</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};