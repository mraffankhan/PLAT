import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Trophy, ShoppingBag, Users, BarChart2, Gamepad2 } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Tournaments', path: '/tournaments', icon: <Trophy size={18} /> },
    { name: 'Teams', path: '/teams', icon: <Users size={18} /> },
    { name: 'Shop', path: '/shop', icon: <ShoppingBag size={18} /> },
    { name: 'Leaderboard', path: '/leaderboard', icon: <BarChart2 size={18} /> },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
      isActive ? 'text-nexus-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'text-nexus-gray hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-nexus-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-nexus-blue rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Gamepad2 className="text-black" size={24} />
            </div>
            <span className="text-2xl font-display font-bold text-white tracking-widest">
              NEXUS<span className="text-nexus-blue">.GG</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={linkClass}>
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button size="sm" variant="outline">Login</Button>
            </div>
            <button 
              className="md:hidden text-white hover:text-nexus-blue transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-nexus-black border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-3 rounded-md text-base font-display font-bold uppercase ${
                    isActive ? 'bg-nexus-blue/10 text-nexus-blue' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span className="flex items-center gap-3">
                  {item.icon} {item.name}
                </span>
              </NavLink>
            ))}
            <div className="pt-4">
              <Button className="w-full" variant="outline">Login / Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
