import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export default function GameCard({ game, onClick }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      className="group relative bg-odyssey-card rounded-3xl overflow-hidden border border-gray-200/50 hover:border-odyssey-accent/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
      onClick={() => onClick(game)}
    >
      <div className="aspect-video relative overflow-hidden bg-sky-50">
        <img
          src={`https://roqard.github.io/icons/${game.thumbnail}`}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-sky-50', 'to-sky-100');
              const fallback = document.createElement('div');
              fallback.className = 'text-sky-300 font-display font-black text-2xl uppercase tracking-tighter text-center px-4';
              fallback.innerText = game.title;
              target.parentElement.appendChild(fallback);
            }
          }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[2px]">
          <div className="bg-odyssey-accent p-5 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="text-white fill-white w-7 h-7 ml-1" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-display font-black text-gray-900 group-hover:text-odyssey-accent transition-colors truncate">
          {game.title}
        </h3>
      </div>
    </motion.div>
  );
}
