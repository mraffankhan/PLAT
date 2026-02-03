import React from 'react';
import { ArrowRight, Trophy, Users, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { TOURNAMENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-nexus-black">
          <div className="absolute inset-0 bg-hero-glow animate-pulse opacity-40"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-nexus-blue/10 via-transparent to-purple-900/20 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-block mb-4 px-4 py-1 border border-nexus-blue/30 rounded-full bg-nexus-blue/5 backdrop-blur-sm">
            <span className="text-nexus-blue font-display tracking-widest text-sm uppercase">The Future of Competitive Gaming</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
            DOMINATE THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-blue to-white">ARENA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Join the ultimate esports ecosystem. Compete in daily tournaments, build your team, and rise to the top of the global leaderboards.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/tournaments">
              <Button size="lg" icon={<Zap size={20} />}>Join Tournament</Button>
            </Link>
            <Link to="/teams">
              <Button variant="secondary" size="lg" icon={<Users size={20} />}>Create Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-nexus-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-2">Featured Tournaments</h2>
              <p className="text-gray-400">Compete for the biggest prize pools this season</p>
            </div>
            <Link to="/tournaments" className="hidden md:flex items-center gap-2 text-nexus-blue font-bold uppercase hover:text-white transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURNAMENTS.slice(0, 3).map((tourney) => (
              <div key={tourney.id} className="group relative bg-nexus-card border border-white/5 rounded-sm overflow-hidden hover:border-nexus-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-nexus-blue text-black font-bold px-3 py-1 text-sm uppercase skew-x-[-10deg] inline-block">
                    {tourney.status}
                  </span>
                </div>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={tourney.image} 
                    alt={tourney.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Gamepad2 size={16} className="text-nexus-blue" />
                    <span className="text-sm text-gray-400 uppercase tracking-wider">{tourney.game}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-nexus-blue transition-colors">
                    {tourney.title}
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="text-xs text-gray-500 uppercase block">Prize Pool</span>
                      <span className="text-xl font-bold text-nexus-blue">{tourney.prizePool}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase block">Entry</span>
                      <span className="text-white font-bold">{tourney.entryFee}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-nexus-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-display font-bold text-black mb-2">READY TO GO PRO?</h2>
            <p className="text-black/80 font-medium text-lg">Create your team profile and start climbing the ranks today.</p>
          </div>
          <Button variant="secondary" className="bg-black text-white hover:bg-gray-900 border-none">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

function Gamepad2(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <line x1="6" x2="10" y1="12" y2="12" />
        <line x1="8" x2="8" y1="10" y2="14" />
        <line x1="15" x2="15.01" y1="13" y2="13" />
        <line x1="18" x2="18.01" y1="11" y2="11" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
        </svg>
    )
}

export default Home;
