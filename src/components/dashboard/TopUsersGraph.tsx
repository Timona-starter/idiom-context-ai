import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', Abebe: 400, Bruk: 240, Chala: 190, Dawit: 300, Elias: 500 },
  { week: 'Week 2', Abebe: 300, Bruk: 456, Chala: 340, Dawit: 220, Elias: 480 },
  { week: 'Week 3', Abebe: 500, Bruk: 234, Chala: 450, Dawit: 380, Elias: 420 },
  { week: 'Week 4', Abebe: 478, Bruk: 600, Chala: 390, Dawit: 550, Elias: 510 },
];

const users = [
    { name: 'Abebe', color: '#8884d8' },
    { name: 'Bruk', color: '#82ca9d' },
    { name: 'Chala', color: '#ffc658' },
    { name: 'Dawit', color: '#ff8042' },
    { name: 'Elias', color: '#00C49F' },
];

export const TopUsersGraph: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Top Users Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="week" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
            <Legend />
            {users.map(user => (
              <Line 
                key={user.name}
                type="monotone" 
                dataKey={user.name} 
                stroke={user.color} 
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};