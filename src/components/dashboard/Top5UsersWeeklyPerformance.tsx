import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', 'User A': 400, 'User B': 240, 'User C': 300, 'User D': 220, 'User E': 450 },
  { week: 'Week 2', 'User A': 300, 'User B': 139, 'User C': 500, 'User D': 350, 'User E': 400 },
  { week: 'Week 3', 'User A': 200, 'User B': 980, 'User C': 600, 'User D': 280, 'User E': 550 },
  { week: 'Week 4', 'User A': 278, 'User B': 390, 'User C': 450, 'User D': 410, 'User E': 300 },
];

const userColors = {
  'User A': '#8884d8',
  'User B': '#82ca9d',
  'User C': '#ffc658',
  'User D': '#ff8042',
  'User E': '#00C49F',
};

export const Top5UsersWeeklyPerformance: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 mt-8">
      <CardHeader>
        <CardTitle className="text-white">Top 5 Users Weekly Performance (Current Month)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="week" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
            <Legend />
            {Object.keys(userColors).map((user) => (
              <Line key={user} type="monotone" dataKey={user} stroke={userColors[user]} strokeWidth={2} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};