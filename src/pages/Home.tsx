import { useMemo, useState, useEffect } from 'react';
import GameGrid from '../components/GameGrid';
import gamesDataRaw from '../data/games.json';
import { Game, GameWithId } from '../types';
import { getRecentlyPlayed } from '../lib/history';
import { Clock } from 'lucide-react';
import UpdateModal from '../components/UpdateModal';

const gamesData = (gamesDataRaw as Game[]).map(game => ({
  ...game,
  id: game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
})) as GameWithId[];

interface HomeProps {
  searchQuery: string;
  onPlay: (game: GameWithId) => void;
}

export default function Home({ searchQuery, onPlay }: HomeProps) {
  const [recentlyPlayed, setRecentlyPlayed] = useState<GameWithId[]>([]);
  const [showUpdate, setShowUpdate] = useState(true);

  useEffect(() => {
    setRecentlyPlayed(getRecentlyPlayed());
  }, []);

  const { displayRecentlyPlayed, libraryGames } = useMemo(() => {
    if (searchQuery.trim()) {
      return {
        displayRecentlyPlayed: [],
        libraryGames: gamesData.filter((game) =>
          game.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      };
    }

    const recentIds = new Set(recentlyPlayed.map((g) => g.id));
    return {
      displayRecentlyPlayed: recentlyPlayed,
      libraryGames: gamesData.filter((game) => !recentIds.has(game.id)),
    };
  }, [searchQuery, recentlyPlayed]);

  return (
    <div className="space-y-12 px-6 pb-12">
      {showUpdate && <UpdateModal onClose={() => setShowUpdate(false)} />}
      
      {displayRecentlyPlayed.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-odyssey-accent/10 rounded-lg">
              <Clock className="w-5 h-5 text-odyssey-accent" />
            </div>
            <h2 className="text-2xl font-display font-black tracking-tight text-gray-900">
              Recently <span className="text-odyssey-accent">Played</span>
            </h2>
          </div>
          
          <div className="-mx-6">
            <GameGrid games={displayRecentlyPlayed} onGameSelect={onPlay} />
          </div>
        </section>
      )}

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-display font-black tracking-tight text-gray-900">
            {searchQuery ? (
              <>Search <span className="text-odyssey-accent">Results</span></>
            ) : (
              <>Games <span className="text-odyssey-accent">Library</span></>
            )}
          </h2>
          <div className="hidden md:block">
            <span className="text-[10px] text-gray-400 font-mono tracking-[0.3em] uppercase">
              {libraryGames.length} {searchQuery ? 'Results' : 'Games Ready'}
            </span>
          </div>
        </div>

        <div className="-mx-6">
          <GameGrid games={libraryGames} onGameSelect={onPlay} />
        </div>
      </section>
    </div>
  );
}
