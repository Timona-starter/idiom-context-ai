import React from 'react';
import { FacebookIcon } from '../icons/FacebookIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';

export const ContactUs: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-sm font-semibold">Contact Us:</span>
          <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400">
            <TwitterIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400">
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-400">
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} IdomsIQ. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};