export interface Game {
  title: string;
  url: string;
  thumbnail: string;
}

// Added for internal usage
export interface GameWithId extends Game {
  id: string;
}
