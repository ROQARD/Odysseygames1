import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCcw } from 'lucide-react';
import { Game } from '../types';
import { useState } from 'react';

interface GamePlayerProps {
  game: Game | null;
  onClose: () => void;
}

export default function GamePlayer({ game, onClose }: GamePlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex flex-col bg-odyssey-bg"
      >
        {/* Header */}
        <div className="glass-panel flex items-center justify-between px-6 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <img 
              src={`/thumbs/${game.thumbnail}`} 
              alt={game.title} 
              className="w-10 h-10 rounded-lg object-cover border border-odyssey-accent/30"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/100x100/0D0D25/f59e0b?text=${game.title[0]}`;
              }}
            />
            <div>
              <h2 className="text-lg font-display font-bold text-white tracking-tight">{game.title}</h2>
              <span className="text-[10px] text-odyssey-cyan font-semibold uppercase tracking-wider">{game.category}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.location.reload()}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Reload Game"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Full Screen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-white/10 mx-2" />
            <button 
              onClick={onClose}
              className="group p-2 bg-odyssey-accent/20 hover:bg-odyssey-accent rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6 text-odyssey-accent group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Iframe Area */}
        <div className={`flex-1 relative bg-black ${isFullscreen ? 'p-0' : 'p-4 md:p-8'}`}>
          <div className="w-full h-full relative flex items-center justify-center">
            <iframe
              src={game.url}
              className={`w-full h-full rounded-2xl shadow-2xl border border-white/5 ${isFullscreen ? 'rounded-none border-none' : ''}`}
              allowFullScreen
              title={game.title}
            />
          </div>
        </div>
        
        {/* Footer info/controls */}
        {!isFullscreen && (
          <div className="glass-panel p-4 text-center border-t border-white/5">
            <p className="text-sm text-gray-400 uppercase tracking-widest font-mono">
              Exploring on <span className="text-odyssey-accent font-bold">ODYSSEY GAMES</span>
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
