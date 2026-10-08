import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Flame, Tv2, User } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Shorts', icon: Flame, path: '/shorts' },
    { name: 'Subscriptions', icon: Tv2, path: '/subscriptions' },
    { name: 'You', icon: User, path: '/history' },
  ];

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur-md border-t border-gray-200 z-30 flex items-center justify-around px-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-1 text-[10px] font-medium transition-colors ${
                isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
              }`
            }
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span className="truncate">{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
