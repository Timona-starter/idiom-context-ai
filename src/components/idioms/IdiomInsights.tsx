import { Idiom } from '@/lib/types';
import { BookOpen, Users, GitBranch } from 'lucide-react';

interface IdiomInsightsProps {
  idiom: Idiom;
}

export function IdiomInsights({ idiom }: IdiomInsightsProps) {
  return (
    <div className="w-full max-w-md mt-6 space-y-4 text-white">
      <div className="bg-black/20 p-4 rounded-lg">
        <h3 className="font-bold text-lg flex items-center"><BookOpen className="mr-2 h-5 w-5" /> Origin & Context</h3>
        <p className="mt-2 text-sm">{idiom.origin}</p>
      </div>
      <div className="bg-black/20 p-4 rounded-lg">
        <h3 className="font-bold text-lg flex items-center"><Users className="mr-2 h-5 w-5" /> Typical Usage</h3>
        <p className="mt-2 text-sm">{idiom.usage}</p>
      </div>
      <div className="bg-black/20 p-4 rounded-lg">
        <h3 className="font-bold text-lg flex items-center"><GitBranch className="mr-2 h-5 w-5" /> Alternatives</h3>
        <ul className="mt-2 space-y-2">
          {idiom.alternatives.map((alt, index) => (
            <li key={index} className="text-sm">
              <strong className="font-semibold">{alt.phrase}:</strong> {alt.nuance}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
