import { useParams, useNavigate } from 'react-router-dom';
import { Game, GameWithId } from '../types';
import GamePlayer from '../components/GamePlayer';
import gamesDataRaw from '../data/games.json';
import { useMemo } from 'react';

const gamesData = (gamesDataRaw as Game[]).map(game => ({
  ...game,
  id: game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
})) as GameWithId[];

export default function GameDetails() {
  const { gameId } = useParams();
  const navigate = useNavigate();

  const game = useMemo(() => 
    gamesData.find(g => g.id === gameId),
  [gameId]);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-vh-80 px-6 py-20 text-center">
        <h2 className="text-2xl font-display font-black text-gray-900 mb-4">Game Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-odyssey-accent text-white rounded-xl font-bold"
        >
          Back to Arcade
        </button>
      </div>
    );
  }

  return <GamePlayer game={game} onClose={() => navigate('/')} />;
}
