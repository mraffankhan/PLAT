import { Tournament, Product, Team, PlayerRank } from './types';

export const GAMES = ['Valorant', 'League of Legends', 'CS:GO 2', 'Rocket League', 'Apex Legends'];

export const TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    game: 'Valorant',
    title: 'Neon Strike Championship',
    entryFee: 'Free',
    prizePool: '$10,000',
    date: 'Oct 24, 2024',
    status: 'Open',
    format: 'Squad',
    image: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    game: 'League of Legends',
    title: 'Summoner\'s Rift Showdown',
    entryFee: '$50',
    prizePool: '$25,000',
    date: 'Nov 02, 2024',
    status: 'Open',
    format: 'Squad',
    image: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    game: 'Rocket League',
    title: 'Aerial Ace Cup',
    entryFee: '$10',
    prizePool: '$5,000',
    date: 'Oct 28, 2024',
    status: 'Live',
    format: 'Duo',
    image: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: '4',
    game: 'Apex Legends',
    title: 'Predator Series',
    entryFee: 'Free',
    prizePool: '$15,000',
    date: 'Nov 10, 2024',
    status: 'Open',
    format: 'Squad',
    image: 'https://picsum.photos/800/400?random=4'
  },
  {
    id: '5',
    game: 'CS:GO 2',
    title: 'Tactical OPS Major',
    entryFee: '$100',
    prizePool: '$50,000',
    date: 'Dec 05, 2024',
    status: 'Open',
    format: 'Squad',
    image: 'https://picsum.photos/800/400?random=5'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nexus Pro Jersey 2024',
    category: 'Merch',
    price: 59.99,
    image: 'https://picsum.photos/400/400?random=10',
    featured: true
  },
  {
    id: '2',
    name: 'Mechanical KB-X1',
    category: 'Hardware',
    price: 129.99,
    image: 'https://picsum.photos/400/400?random=11'
  },
  {
    id: '3',
    name: 'Season Pass: Vol 3',
    category: 'Digital',
    price: 19.99,
    image: 'https://picsum.photos/400/400?random=12'
  },
  {
    id: '4',
    name: 'Nexus Hoodie Black',
    category: 'Merch',
    price: 79.99,
    image: 'https://picsum.photos/400/400?random=13'
  }
];

export const TEAMS: Team[] = [
  { id: '1', name: 'Cloud Nine', logo: 'https://picsum.photos/100/100?random=20', wins: 45, matches: 50, rank: 1, members: 5 },
  { id: '2', name: 'Liquid Fire', logo: 'https://picsum.photos/100/100?random=21', wins: 42, matches: 52, rank: 2, members: 5 },
  { id: '3', name: 'Sentinels', logo: 'https://picsum.photos/100/100?random=22', wins: 38, matches: 45, rank: 3, members: 6 },
  { id: '4', name: 'G2 Esports', logo: 'https://picsum.photos/100/100?random=23', wins: 35, matches: 48, rank: 4, members: 5 },
];

export const RANKINGS: PlayerRank[] = [
  { rank: 1, name: 'Faker', team: 'T1', points: 2500, wins: 120, winRate: 68, avatar: 'https://picsum.photos/60/60?random=50' },
  { rank: 2, name: 'S1mple', team: 'NaVi', points: 2450, wins: 115, winRate: 65, avatar: 'https://picsum.photos/60/60?random=51' },
  { rank: 3, name: 'TenZ', team: 'Sentinels', points: 2300, wins: 108, winRate: 62, avatar: 'https://picsum.photos/60/60?random=52' },
  { rank: 4, name: 'ZywOo', team: 'Vitality', points: 2250, wins: 105, winRate: 61, avatar: 'https://picsum.photos/60/60?random=53' },
  { rank: 5, name: 'Caps', team: 'G2', points: 2100, wins: 98, winRate: 59, avatar: 'https://picsum.photos/60/60?random=54' },
];
