import { BookPlus } from 'lucide-react';

export function PhrasebookButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center space-x-2"
    >
      <BookPlus className="w-5 h-5" />
      <span>Save to Phrasebook</span>
    </button>
  );
}
