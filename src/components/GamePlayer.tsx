import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCcw, ChevronLeft } from 'lucide-react';
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
        <div className="glass-panel flex items-center justify-between px-6 py-3 border-b border-gray-200/50">
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="p-2 -ml-2 text-gray-500 hover:text-gray-900 transition-colors"
              title="Back to Games"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img 
              src={`/data/thumbs/${game.thumbnail}`} 
              alt={game.title} 
              className="w-10 h-10 rounded-xl object-cover border border-gray-200/50 shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/100x100/EDF2F7/FF3D71?text=${game.title[0]}`;
              }}
            />
            <div>
              <h2 className="text-lg font-display font-black text-gray-900 tracking-tight">{game.title}</h2>
              <span className="text-[10px] text-odyssey-accent font-bold uppercase tracking-widest">LIVE SESSION</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => window.location.reload()}
              className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
              title="Reload Game"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
              title="Full Screen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-gray-200/80 mx-2" />
            <button 
              onClick={onClose}
              className="group p-2 bg-gray-200/50 hover:bg-odyssey-accent rounded-xl transition-all duration-300 shadow-sm"
            >
              <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Iframe Area */}
        <div className={`flex-1 relative bg-sky-100/50 ${isFullscreen ? 'p-0' : 'p-4 md:p-8'}`}>
          <div className="w-full h-full relative flex items-center justify-center">
            <iframe
              src={game.url}
              className={`w-full h-full rounded-3xl shadow-2xl border-none ${isFullscreen ? 'rounded-none' : ''}`}
              allow="autoplay; fullscreen; keyboard-lock; gamepad"
              allowFullScreen
              title={game.title}
            />
          </div>
        </div>
        
        {/* Footer info/controls */}
        {!isFullscreen && (
          <div className="glass-panel p-4 text-center border-t border-gray-200/50">
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
