import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCircleIcon from '../icons/UserCircleIcon';
import CogIcon from '../icons/CogIcon';
import QuestionMarkCircleIcon from '../icons/QuestionMarkCircleIcon';
import ArrowLeftOnRectangleIcon from '../icons/ArrowLeftOnRectangleIcon';
import UserIcon from '../icons/UserIcon';

interface User {
  name: string;
  profilePictureUrl?: string;
}

interface ProfileDropdownProps {
  user: User;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // In a real app, you would also clear authentication tokens here.
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        {user.profilePictureUrl ? (
          <img className="w-10 h-10 rounded-full" src={user.profilePictureUrl} alt="User profile" />
        ) : (
          <UserCircleIcon className="w-8 h-8 text-gray-400" />
        )}
      </button>

      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-800 border border-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <div className="px-4 py-3 border-b border-gray-700">
              <p className="text-sm font-semibold text-white">{user.name}</p>
              <a href="/profile" className="flex items-center text-sm text-blue-400 hover:text-blue-300">
                <UserIcon className="w-4 h-4 mr-2" />
                Go to profile
              </a>
            </div>
            <a
              href="/settings"
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              role="menuitem"
            >
              <CogIcon className="w-5 h-5 mr-3 text-gray-400" />
              Settings
            </a>
            <a
              href="/help"
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              role="menuitem"
            >
              <QuestionMarkCircleIcon className="w-5 h-5 mr-3 text-gray-400" />
              Help
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-300 text-left hover:bg-gray-700 hover:text-white"
              role="menuitem"
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3 text-gray-400" />
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};