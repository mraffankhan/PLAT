import React, { useState } from 'react';
import { Filter, Calendar, Users, DollarSign, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import { TOURNAMENTS, GAMES } from '../constants';
import { Tournament } from '../types';

const Tournaments: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string>('All');
  const [filterType, setFilterType] = useState<'All' | 'Free' | 'Paid'>('All');

  const filteredTournaments = TOURNAMENTS.filter(t => {
    const gameMatch = selectedGame === 'All' || t.game === selectedGame;
    const typeMatch = filterType === 'All' 
      ? true 
      : filterType === 'Free' ? t.entryFee === 'Free' : t.entryFee !== 'Free';
    return gameMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-nexus-black pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-5xl font-display font-bold text-white mb-2">TOURNAMENTS</h1>
            <p className="text-gray-400">Find your next challenge and compete for glory.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-nexus-card p-2 rounded-lg border border-white/10">
            <Search className="text-gray-500 ml-2" size={20} />
            <input 
              type="text" 
              placeholder="Search tournaments..." 
              className="bg-transparent border-none outline-none text-white placeholder-gray-600 w-full md:w-64"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-nexus-card p-6 rounded-sm border border-white/5">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="text-nexus-blue" size={20} />
                <h3 className="font-display font-bold text-xl text-white">FILTERS</h3>
              </div>

              {/* Game Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Game Title</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="game" 
                      className="accent-nexus-blue" 
                      checked={selectedGame === 'All'}
                      onChange={() => setSelectedGame('All')}
                    />
                    <span className={`text-sm group-hover:text-white transition-colors ${selectedGame === 'All' ? 'text-white font-bold' : 'text-gray-400'}`}>All Games</span>
                  </label>
                  {GAMES.map(game => (
                    <label key={game} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="game" 
                        className="accent-nexus-blue"
                        checked={selectedGame === game}
                        onChange={() => setSelectedGame(game)}
                      />
                      <span className={`text-sm group-hover:text-white transition-colors ${selectedGame === game ? 'text-white font-bold' : 'text-gray-400'}`}>{game}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Entry Fee Filter */}
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Entry Fee</h4>
                <div className="flex gap-2">
                  {['All', 'Free', 'Paid'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilterType(type as any)}
                      className={`px-3 py-1 text-xs font-bold uppercase rounded-sm border transition-all ${
                        filterType === type 
                          ? 'bg-nexus-blue text-black border-nexus-blue' 
                          : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTournaments.map((tourney: Tournament) => (
                <div key={tourney.id} className="bg-nexus-card border border-white/5 hover:border-nexus-blue/50 transition-all duration-300 group rounded-sm overflow-hidden flex flex-col">
                  {/* Card Image */}
                  <div className="h-40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-nexus-card to-transparent z-10"></div>
                    <img 
                      src={tourney.image} 
                      alt={tourney.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 right-3 z-20 flex gap-2">
                      <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 uppercase border border-white/10">
                        {tourney.format}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-nexus-blue text-xs font-bold uppercase tracking-wider">{tourney.game}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-sm ${
                        tourney.status === 'Live' ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-800 text-gray-300'
                      }`}>
                        {tourney.status === 'Live' ? '● LIVE' : tourney.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-white mb-4 leading-tight group-hover:text-nexus-blue transition-colors">
                      {tourney.title}
                    </h3>

                    <div className="mt-auto space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-400 border-t border-white/5 pt-3">
                        <div className="flex items-center gap-2">
                          <DollarSign size={14} className="text-nexus-blue" />
                          <span>Prize: <span className="text-white font-bold">{tourney.prizePool}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-nexus-blue" />
                          <span>Entry: <span className="text-white font-bold">{tourney.entryFee}</span></span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-nexus-blue" />
                          <span>{tourney.date}</span>
                        </div>
                      </div>

                      <Button className="w-full mt-4" size="sm">Register Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tournaments;
