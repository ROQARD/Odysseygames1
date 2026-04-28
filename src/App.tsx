/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import GamePlayer from './components/GamePlayer';
import gamesDataRaw from './data/games.json';
import { Game } from './types';
import { motion } from 'motion/react';

const gamesData = (gamesDataRaw as Game[]).map(game => ({
  ...game,
  id: game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}));

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<typeof gamesData[0] | null>(null);

  const filteredGames = useMemo(() => {
    return gamesData.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  const featuredGame = useMemo(() => {
    return gamesData[0];
  }, []);

  return (
    <div className="min-h-screen bg-odyssey-bg text-white pb-20">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto mt-8">
        {!searchQuery && (
          <Hero game={featuredGame} onPlay={setSelectedGame} />
        )}

        <div className="space-y-8 px-6">
          <div className="flex items-center justify-between">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-4xl font-display font-black tracking-tight"
            >
              MISSION <span className="text-odyssey-accent font-light">SELECTOR</span>
            </motion.h2>
            
            <div className="hidden md:block">
              <span className="text-[10px] text-gray-500 font-mono tracking-[0.3em] uppercase">
                {filteredGames.length} AVAILABLE EXPEDITIONS
              </span>
            </div>
          </div>

          <div className="-mx-6">
            <GameGrid games={filteredGames} onGameSelect={setSelectedGame} />
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-white/5 pt-12 pb-8 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-display font-black text-odyssey-accent tracking-[0.2em] uppercase">ODYSSEY GAMES</h3>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-sans leading-relaxed">
            Your destination for high-octane expeditions. Play the best web games on any device, anywhere. No installation required. Discover your next classic.
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <a href="#" className="font-mono text-[10px] text-gray-400 hover:text-odyssey-accent transition-colors tracking-widest uppercase">Privacy</a>
            <a href="#" className="font-mono text-[10px] text-gray-400 hover:text-odyssey-accent transition-colors tracking-widest uppercase">Terms</a>
            <a href="#" className="font-mono text-[10px] text-gray-400 hover:text-odyssey-accent transition-colors tracking-widest uppercase">Support</a>
          </div>
          <p className="text-[9px] text-gray-600 pt-8 uppercase tracking-[0.3em] font-mono">
            © 2026 ODYSSEY ARCADE SYSTEMS // ALL SYSTEMS NOMINAL.
          </p>
        </div>
      </footer>

      {/* Game Player Modal */}
      <GamePlayer game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}
