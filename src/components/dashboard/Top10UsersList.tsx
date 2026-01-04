import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserContribution } from './UserContribution';

const users = [
  { id: 6, name: 'Freweyni', score: 1700, contribution: 'Focused on advanced idioms.', profilePicUrl: 'https://i.pravatar.cc/40?u=Freweyni' },
  { id: 7, name: 'Gebre', score: 1650, contribution: 'Mastered business-related phrases.', profilePicUrl: 'https://i.pravatar.cc/40?u=Gebre' },
  { id: 8, name: 'Hana', score: 1500, contribution: 'Top contributor for social contexts.', profilePicUrl: 'https://i.pravatar.cc/40?u=Hana' },
  { id: 9, name: 'Imani', score: 1400, contribution: 'Excellent at daily conversation idioms.', profilePicUrl: 'https://i.pravatar.cc/40?u=Imani' },
  { id: 10, name: 'Jemal', score: 1350, contribution: 'Specializes in travel-related phrases.', profilePicUrl: 'https://i.pravatar.cc/40?u=Jemal' },
  { id: 11, name: 'Kalkidan', score: 1200, contribution: 'Frequent practice session participant.', profilePicUrl: 'https://i.pravatar.cc/40?u=Kalkidan' },
  { id: 12, name: 'Lia', score: 1100, contribution: 'Helped identify and correct errors.', profilePicUrl: 'https://i.pravatar.cc/40?u=Lia' },
  { id: 13, name: 'Mekdes', score: 1050, contribution: 'Active in community discussions.', profilePicUrl: 'https://i.pravatar.cc/40?u=Mekdes' },
  { id: 14, name: 'Nardos', score: 950, contribution: 'Consistent daily user.', profilePicUrl: 'https://i.pravatar.cc/40?u=Nardos' },
  { id: 15, name: 'Omar', score: 900, contribution: 'Beta tester for new features.', profilePicUrl: 'https://i.pravatar.cc/40?u=Omar' },
];

export const Top10UsersList: React.FC = () => {
  const [selectedUser, setSelectedUser] = React.useState<typeof users[0] | null>(null);

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Top 10 Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id}>
              <button 
                onClick={() => setSelectedUser(user)}
                className="text-lg text-blue-400 hover:underline w-full text-left flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <img src={user.profilePicUrl} alt={user.name} className="w-10 h-10 rounded-full" />
                <span>{user.name} - {user.score} points</span>
              </button>
            </div>
          ))}
        </div>
        {selectedUser && <UserContribution user={selectedUser} onClose={() => setSelectedUser(null)} />}
      </CardContent>
    </Card>
  );
};