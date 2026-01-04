import { useState } from 'react';
import { Idiom } from '@/lib/types';
import { Volume2 } from 'lucide-react';

type IdiomCardProps = {
  idiom: Idiom;
};

const IdiomCard = ({ idiom }: IdiomCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, you would play the audio of the idiom
    console.log('Playing sound for:', idiom.idiom);
    const utterance = new SpeechSynthesisUtterance(idiom.idiom);
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="w-full max-w-md h-64 perspective-[1000px] cursor-pointer group"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl bg-white/20 backdrop-blur-lg p-6 flex flex-col justify-center items-center text-center text-white shadow-lg border border-white/30">
          <h3 className="text-2xl md:text-3xl font-bold text-shadow-md">{idiom.idiom}</h3>
          <p className="mt-2 text-lg text-gray-100">{idiom.translation}</p>
          <button
            onClick={handleSound}
            className="absolute top-4 right-4 text-gray-200 hover:text-white transition-colors duration-200"
            aria-label="Play sound"
          >
            <Volume2 size={24} />
          </button>
           <div className="absolute bottom-4 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to see meaning</div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-white/20 backdrop-blur-lg p-6 flex flex-col justify-center items-start text-left text-white shadow-lg border border-white/30">
          <h4 className="text-xl font-semibold">Meaning</h4>
          <p className="mt-2 text-base text-gray-100">{idiom.meaning}</p>
          <div className="absolute bottom-4 right-4 text-xs text-gray-300">Click to flip back</div>
        </div>
      </div>
    </div>
  );
};

export default IdiomCard;
