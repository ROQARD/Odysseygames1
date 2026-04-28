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
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-odyssey-card rounded-2xl overflow-hidden border border-white/5 hover:border-odyssey-accent/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-odyssey-accent/20"
      onClick={() => onClick(game)}
    >
      <div className="aspect-video relative overflow-hidden bg-odyssey-card">
        <img
          src={`/data/thumbs/${game.thumbnail}`}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-odyssey-card', 'to-odyssey-bg');
              const fallback = document.createElement('div');
              fallback.className = 'text-odyssey-accent font-display font-black text-2xl uppercase tracking-tighter text-center px-4';
              fallback.innerText = game.title;
              target.parentElement.appendChild(fallback);
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-odyssey-bg via-transparent to-transparent opacity-60" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-odyssey-accent p-4 rounded-full neon-glow">
            <Play className="text-black fill-black w-6 h-6 ml-1" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-display font-semibold text-white group-hover:text-odyssey-cyan transition-colors truncate">
          {game.title}
        </h3>
      </div>
    </motion.div>
  );
}
