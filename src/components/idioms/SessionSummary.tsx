import { Idiom } from '@/lib/types';
import { PhrasebookButton } from './PhrasebookButton';
import { Award } from 'lucide-react';

interface SessionSummaryProps {
  learnedIdioms: Idiom[];
  onRestart: () => void;
  onSave: () => void;
}

export function SessionSummary({ learnedIdioms, onRestart, onSave }: SessionSummaryProps) {
  return (
    <div className="w-full max-w-md text-center text-white bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
      <Award className="w-16 h-16 mx-auto text-yellow-400" />
      <h2 className="text-3xl font-bold mt-4">Session Complete!</h2>
      <p className="mt-2">You've reviewed {learnedIdioms.length} idioms. Great job!</p>
      <ul className="mt-6 text-left space-y-2">
        {learnedIdioms.map(idiom => (
          <li key={idiom.id} className="bg-black/20 p-2 rounded-md">
            <span className="font-semibold">{idiom.phrase}</span>: {idiom.meaning}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <PhrasebookButton onClick={onSave} />
        <button
          onClick={onRestart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Practice Again
        </button>
      </div>
    </div>
  );
}
