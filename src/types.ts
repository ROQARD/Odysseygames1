export interface Game {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  category: string;
  description: string;
}

export type Category = 'All' | 'Puzzle' | 'Arcade' | 'IO Games' | 'Classic' | 'Platformer' | 'Idle';
