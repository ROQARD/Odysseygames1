import { motion } from 'motion/react';
import { Play, TrendingUp, Star } from 'lucide-react';
import { Game } from '../types';

interface HeroProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export default function Hero({ game, onPlay }: HeroProps) {
  return (
    <section className="relative h-[350px] md:h-[420px] mb-12 rounded-[2.5rem] overflow-hidden mx-6 max-w-7xl lg:mx-auto group">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0">
        <img 
          src={`/data/thumbs/${game.thumbnail}`} 
          alt={game.title} 
          className="w-full h-full object-cover scale-105 blur-sm opacity-40 transition-transform duration-[2s] group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-odyssey-bg via-odyssey-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-odyssey-bg via-transparent to-transparent " />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="px-3 py-1 bg-odyssey-gold text-black text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            VETERAN'S CHOICE
          </span>
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-odyssey-cyan text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-odyssey-cyan" />
            TOP RATED
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-black text-white mb-4 leading-tight tracking-tighter"
        >
          {game.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-gray-300 mb-6 md:mb-10 line-clamp-2 max-w-lg"
        >
          Embark on a pixel-perfect journey. Revisit the classics or find your new addiction. The odyssey begins with a single click.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={() => onPlay(game)}
            className="flex items-center gap-3 px-10 py-4 bg-odyssey-accent hover:bg-odyssey-gold text-black rounded-2xl font-black text-lg transition-all duration-300 neon-glow group/btn"
          >
            <Play className="fill-black w-5 h-5 transition-transform group-hover/btn:scale-110" />
            START ADVENTURE
          </button>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden hidden lg:block">
        <div className="w-full h-full border-[1px] border-odyssey-gold rotate-12 translate-x-20 grid grid-cols-4 grid-rows-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-odyssey-gold/30" />
          ))}
        </div>
      </div>
    </section>
  );
}
