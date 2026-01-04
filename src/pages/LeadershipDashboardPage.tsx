import React from 'react';
import { Top10UsersList } from '@/components/dashboard/Top10UsersList';
import { Top5UsersWeeklyPerformance } from '@/components/dashboard/Top5UsersWeeklyPerformance';

const LeadershipDashboardPage: React.FC = () => {
  return (
    <main className="flex-grow p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Leadership Dashboard</h1>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 gap-8">
        <Top5UsersWeeklyPerformance />
        <Top10UsersList />
      </div>
    </main>
  );
};

export default LeadershipDashboardPage;
