import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileDropdown } from './ProfileDropdown';
import ChartBarIcon from '../icons/ChartBarIcon';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

// Mock user data for demonstration
const mockUser = {
  name: 'Jina Doe',
  profilePictureUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
};

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 text-white shadow-md border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              {APP_NAME}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => navigate('/leadership')}
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 flex items-center"
            >
              <ChartBarIcon className="w-5 h-5 mr-2" />
              Leadership
            </Button>
            <ProfileDropdown user={mockUser} />
          </div>
        </div>
      </div>
    </header>
  );
};