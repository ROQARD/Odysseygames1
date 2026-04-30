import { useMemo } from 'react';
import GameGrid from '../components/GameGrid';
import gamesDataRaw from '../data/games.json';
import { Game } from '../types';

const gamesData = (gamesDataRaw as Game[]).map(game => ({
  ...game,
  id: game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}));

interface HomeProps {
  searchQuery: string;
  onPlay: (game: typeof gamesData[0]) => void;
}

export default function Home({ searchQuery, onPlay }: HomeProps) {
  const filteredGames = useMemo(() => {
    return gamesData.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="space-y-8 px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-display font-black tracking-tight text-gray-900">
          Games <span className="text-odyssey-accent">Library</span>
        </h2>
        <div className="hidden md:block">
          <span className="text-[10px] text-gray-400 font-mono tracking-[0.3em] uppercase">
            {filteredGames.length} Games Ready
          </span>
        </div>
      </div>

      <div className="-mx-6">
        <GameGrid games={filteredGames} onGameSelect={onPlay} />
      </div>
    </div>
  );
}
