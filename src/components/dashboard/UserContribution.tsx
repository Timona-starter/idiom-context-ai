import React from 'react';

interface User {
    id: number;
    name: string;
    score: number;
    contribution: string;
}

interface UserContributionProps {
    user: User;
    onClose: () => void;
}

export const UserContribution: React.FC<UserContributionProps> = ({ user, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 max-w-sm w-full border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-white">{user.name}'s Contributions</h3>
                <p className="text-gray-300 mb-4">{user.contribution}</p>
                <button 
                    onClick={onClose} 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};