import React from 'react';
import { Crown, TrendingUp, Medal } from 'lucide-react';
import { RANKINGS } from '../constants';

const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-nexus-black pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-white mb-4">GLOBAL RANKINGS</h1>
          <p className="text-gray-400">The best players in the world, ranked by performance.</p>
        </div>

        {/* Top 3 Podium */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-6 mb-16">
            {/* Rank 2 */}
            <div className="order-2 md:order-1 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-gray-400 p-1 mb-4 relative">
                    <img src={RANKINGS[1].avatar} className="w-full h-full rounded-full object-cover" alt="Rank 2" />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-400 text-black font-bold text-xs px-2 py-0.5 rounded-sm">#2</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{RANKINGS[1].name}</h3>
                <span className="text-nexus-blue font-mono text-sm">{RANKINGS[1].points} PTS</span>
                <div className="h-32 w-24 bg-gradient-to-t from-gray-900 to-gray-800 mt-4 rounded-t-lg border-t border-gray-700"></div>
            </div>

            {/* Rank 1 */}
            <div className="order-1 md:order-2 flex flex-col items-center">
                <Crown className="text-yellow-400 mb-2 animate-bounce" size={32} />
                <div className="w-24 h-24 rounded-full border-4 border-yellow-400 p-1 mb-4 relative shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                    <img src={RANKINGS[0].avatar} className="w-full h-full rounded-full object-cover" alt="Rank 1" />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-bold text-xs px-2 py-0.5 rounded-sm">#1</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{RANKINGS[0].name}</h3>
                <span className="text-nexus-blue font-mono text-lg font-bold">{RANKINGS[0].points} PTS</span>
                <div className="h-40 w-28 bg-gradient-to-t from-yellow-900/40 to-yellow-800/40 mt-4 rounded-t-lg border-t border-yellow-600/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-400/10 animate-pulse"></div>
                </div>
            </div>

            {/* Rank 3 */}
            <div className="order-3 md:order-3 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-orange-700 p-1 mb-4 relative">
                    <img src={RANKINGS[2].avatar} className="w-full h-full rounded-full object-cover" alt="Rank 3" />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-700 text-white font-bold text-xs px-2 py-0.5 rounded-sm">#3</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{RANKINGS[2].name}</h3>
                <span className="text-nexus-blue font-mono text-sm">{RANKINGS[2].points} PTS</span>
                <div className="h-24 w-24 bg-gradient-to-t from-orange-900/30 to-orange-800/30 mt-4 rounded-t-lg border-t border-orange-700/50"></div>
            </div>
        </div>

        {/* Ranking Table */}
        <div className="bg-nexus-card border border-white/5 rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-white/5 text-left">
                            <th className="p-4 text-gray-500 font-bold uppercase text-xs tracking-wider">Rank</th>
                            <th className="p-4 text-gray-500 font-bold uppercase text-xs tracking-wider">Player</th>
                            <th className="p-4 text-gray-500 font-bold uppercase text-xs tracking-wider">Team</th>
                            <th className="p-4 text-gray-500 font-bold uppercase text-xs tracking-wider text-right">Wins</th>
                            <th className="p-4 text-gray-500 font-bold uppercase text-xs tracking-wider text-right">Win Rate</th>
                            <th className="p-4 text-gray-500 font-bold uppercase text-xs tracking-wider text-right">Points</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {RANKINGS.map((player) => (
                            <tr key={player.rank} className="group hover:bg-white/5 transition-colors">
                                <td className="p-4">
                                    <div className={`w-8 h-8 flex items-center justify-center font-bold rounded-sm ${
                                        player.rank <= 3 ? 'bg-nexus-blue text-black' : 'text-gray-400 bg-white/5'
                                    }`}>
                                        {player.rank}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img src={player.avatar} alt={player.name} className="w-8 h-8 rounded-full" />
                                        <span className="font-bold text-white group-hover:text-nexus-blue transition-colors">{player.name}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className="text-gray-400">{player.team}</span>
                                </td>
                                <td className="p-4 text-right text-white font-mono">{player.wins}</td>
                                <td className="p-4 text-right">
                                    <div className="flex items-center justify-end gap-2 text-green-400">
                                        <TrendingUp size={14} />
                                        <span className="font-mono">{player.winRate}%</span>
                                    </div>
                                </td>
                                <td className="p-4 text-right font-bold text-nexus-blue font-mono text-lg">{player.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Leaderboard;
