import { GameWithId } from '../types';

const STORAGE_KEY = 'odyssey_recently_played';
const MAX_GAMES = 5;

export const getRecentlyPlayed = (): GameWithId[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const addRecentlyPlayed = (game: GameWithId) => {
  if (typeof window === 'undefined') return;
  const current = getRecentlyPlayed();
  const filtered = current.filter((g) => g.id !== game.id);
  const updated = [game, ...filtered].slice(0, MAX_GAMES);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
