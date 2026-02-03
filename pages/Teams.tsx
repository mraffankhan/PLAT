import React from 'react';
import { Plus, Users, Trophy, Target } from 'lucide-react';
import Button from '../components/ui/Button';
import { TEAMS } from '../constants';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Teams: React.FC = () => {
  // Mock data for the chart
  const performanceData = [
    { name: 'Cloud Nine', winRate: 90 },
    { name: 'Liquid', winRate: 85 },
    { name: 'Sentinels', winRate: 82 },
    { name: 'G2', winRate: 75 },
    { name: 'Fnatic', winRate: 70 },
  ];

  return (
    <div className="min-h-screen bg-nexus-black pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-display font-bold text-white mb-2">PRO TEAMS</h1>
            <p className="text-gray-400">Join an organization or create your own legacy.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button icon={<Plus size={18} />}>Create Team</Button>
          </div>
        </div>

        {/* Stats Section with Recharts */}
        <div className="mb-16 bg-nexus-card p-8 rounded-sm border border-white/5">
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Target className="text-nexus-blue" />
                TOP TEAM PERFORMANCE (WIN RATE %)
            </h2>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" tick={{fill: '#999'}} />
                        <YAxis stroke="#666" tick={{fill: '#999'}} />
                        <Tooltip 
                            contentStyle={{backgroundColor: '#121212', borderColor: '#333', color: '#fff'}}
                            itemStyle={{color: '#00f0ff'}}
                        />
                        <Bar dataKey="winRate" fill="#00f0ff" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAMS.map((team) => (
            <div key={team.id} className="bg-nexus-dark border border-white/5 p-6 rounded-sm hover:border-nexus-blue/30 transition-all duration-300 group relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-nexus-blue/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-nexus-blue/10 transition-colors"></div>

              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="w-20 h-20 bg-black rounded-full border-2 border-white/10 p-1 flex items-center justify-center shrink-0">
                    <img src={team.logo} alt={team.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-nexus-blue transition-colors">{team.name}</h3>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-gray-400">Rank <span className="text-white font-bold">#{team.rank}</span></span>
                    <span className="text-gray-400">Members <span className="text-white font-bold">{team.members}</span></span>
                  </div>
                </div>
                <div className="ml-auto">
                    <Button variant="outline" size="sm">View</Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-black/50 p-4 rounded-sm border border-white/5">
                <div className="text-center border-r border-white/5">
                    <span className="block text-gray-500 text-xs uppercase font-bold mb-1">Total Wins</span>
                    <span className="text-xl font-bold text-nexus-blue">{team.wins}</span>
                </div>
                <div className="text-center">
                    <span className="block text-gray-500 text-xs uppercase font-bold mb-1">Matches Played</span>
                    <span className="text-xl font-bold text-white">{team.matches}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Create Team Card */}
          <div className="border-2 border-dashed border-white/10 rounded-sm p-6 flex flex-col items-center justify-center text-center hover:border-nexus-blue/50 hover:bg-white/5 transition-all cursor-pointer min-h-[240px] group">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-nexus-blue group-hover:text-black transition-colors text-white">
                <Plus size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Start a New Team</h3>
            <p className="text-gray-400 text-sm max-w-xs">Register your organization, recruit players, and join official tournaments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
