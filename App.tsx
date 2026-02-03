import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import Shop from './pages/Shop';
import Teams from './pages/Teams';
import Leaderboard from './pages/Leaderboard';

const Footer: React.FC = () => (
  <footer className="bg-nexus-black border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-2 mb-6">
        <span className="text-2xl font-display font-bold text-white tracking-widest">
            NEXUS<span className="text-nexus-blue">.GG</span>
        </span>
      </div>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        The world's leading esports platform for competitive gaming, tournaments, and team management.
      </p>
      <div className="flex justify-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-wider mb-8">
        <a href="#" className="hover:text-nexus-blue transition-colors">Privacy</a>
        <a href="#" className="hover:text-nexus-blue transition-colors">Terms</a>
        <a href="#" className="hover:text-nexus-blue transition-colors">Support</a>
        <a href="#" className="hover:text-nexus-blue transition-colors">Careers</a>
      </div>
      <div className="text-gray-600 text-xs">
        &copy; 2024 Nexus Esports Inc. All rights reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-nexus-black min-h-screen text-white font-sans selection:bg-nexus-blue selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
