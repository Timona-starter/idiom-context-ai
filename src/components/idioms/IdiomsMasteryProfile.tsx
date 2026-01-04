import { Trophy } from 'lucide-react';

export function IdiomsMasteryProfile() {
  const masteryScore = 75; // Mock score

  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-center space-x-4">
      <Trophy className="w-8 h-8 text-yellow-400" />
      <div>
        <h3 className="text-lg font-bold text-white">Idioms Mastery</h3>
        <p className="text-2xl font-bold text-white">{masteryScore}%</p>
      </div>
    </div>
  );
}
