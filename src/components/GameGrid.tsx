import { motion } from 'motion/react';
import { GameWithId } from '../types';
import GameCard from './GameCard';

interface GameGridProps {
  games: GameWithId[];
  onGameSelect: (game: GameWithId) => void;
}

export default function GameGrid({ games, onGameSelect }: GameGridProps) {
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-odyssey-card rounded-full flex items-center justify-center border border-odyssey-accent/20 mb-4">
          <span className="text-4xl text-odyssey-accent">👾</span>
        </div>
        <h3 className="text-xl font-display font-semibold text-white">No expeditions found</h3>
        <p className="text-gray-400 mt-2">Try searching for a different destination or explore a new category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-6">
      {games.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <GameCard game={game} onClick={onGameSelect} />
        </motion.div>
      ))}
    </div>
  );
}
