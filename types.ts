export interface Tournament {
  id: string;
  game: string;
  title: string;
  entryFee: string;
  prizePool: string;
  date: string;
  status: 'Open' | 'Live' | 'Completed';
  format: 'Solo' | 'Squad' | 'Duo';
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Merch' | 'Hardware' | 'Digital';
  price: number;
  image: string;
  featured?: boolean;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  wins: number;
  matches: number;
  rank: number;
  members: number;
}

export interface PlayerRank {
  rank: number;
  name: string;
  team?: string;
  points: number;
  wins: number;
  winRate: number;
  avatar: string;
}
