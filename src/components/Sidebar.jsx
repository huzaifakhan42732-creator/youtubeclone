import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Flame, 
  Tv2, 
  User, 
  History, 
  ListVideo, 
  Clock, 
  ThumbsUp, 
  Compass,
  Music2,
  Gamepad2,
  Newspaper,
  Trophy,
  ChevronRight
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const mainNavItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Shorts', icon: Flame, path: '/shorts' },
    { name: 'Subscriptions', icon: Tv2, path: '/subscriptions' },
  ];

  const libraryItems = [
    { name: 'History', icon: History, path: '/history' },
    { name: 'Playlists', icon: ListVideo, path: '/playlists' },
    { name: 'Watch Later', icon: Clock, path: '/watch-later' },
    { name: 'Liked Videos', icon: ThumbsUp, path: '/liked' },
  ];

  const exploreItems = [
    { name: 'Trending', icon: Compass, path: '/explore/trending' },
    { name: 'Music', icon: Music2, path: '/explore/music' },
    { name: 'Gaming', icon: Gamepad2, path: '/explore/gaming' },
    { name: 'News', icon: Newspaper, path: '/explore/news' },
    { name: 'Sports', icon: Trophy, path: '/explore/sports' },
  ];

  const subscriptions = [
    { name: 'CodeCraft Academy', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80', isLive: true },
    { name: 'Lofi Beats Station', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=60&auto=format&fit=crop&q=80', isLive: false },
    { name: 'PixelGamers', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=60&auto=format&fit=crop&q=80', isLive: false },
    { name: 'Wanderlust Nomad', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80', isLive: true },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`fixed top-14 bottom-0 left-0 bg-white z-40 overflow-y-auto custom-scrollbar border-r border-gray-200 transition-all duration-200 ease-in-out ${
          isOpen
            ? 'w-60 translate-x-0'
            : '-translate-x-full lg:translate-x-0 lg:w-18'
        }`}
      >
        {/* Full Expanded Sidebar Content */}
        {isOpen ? (
          <div className="py-2 px-3 text-sm">
            {/* Main Links */}
            <div className="space-y-0.5">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-5 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                        isActive
                          ? 'bg-gray-100 font-semibold text-black'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </NavLink>
                );
              })}
            </div>

            <hr className="my-3 border-gray-200" />

            {/* You / Library Section */}
            <div>
              <div className="flex items-center justify-between px-3 py-1 font-semibold text-gray-900 group cursor-pointer hover:bg-gray-100 rounded-xl">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>You</span>
                </span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </div>
              <div className="mt-1 space-y-0.5">
                {libraryItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center gap-5 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                          isActive
                            ? 'bg-gray-100 font-semibold text-black'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <hr className="my-3 border-gray-200" />

            {/* Subscriptions section */}
            <div>
              <h3 className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Subscriptions
              </h3>
              <div className="mt-1 space-y-0.5">
                {subscriptions.map((sub) => (
                  <div
                    key={sub.name}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={sub.avatar}
                        alt={sub.name}
                        className="w-6 h-6 rounded-full object-cover shrink-0"
                      />
                      <span className="text-sm truncate">{sub.name}</span>
                    </div>
                    {sub.isLive && (
                      <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" title="Live stream" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-3 border-gray-200" />

            {/* Explore Section */}
            <div>
              <h3 className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Explore
              </h3>
              <div className="mt-1 space-y-0.5">
                {exploreItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={onClose}
                      className="flex items-center gap-5 px-3 py-2.5 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <hr className="my-3 border-gray-200" />

            {/* Footer */}
            <div className="px-3 py-2 text-[11px] text-gray-500 space-y-2">
              <p className="leading-relaxed">
                About &bull; Press &bull; Copyright &bull; Contact us &bull; Creators &bull; Terms
              </p>
              <p>&copy; 2026 YouTube Clone Student Project</p>
              <p className="text-gray-400">Powered by Pexels Video API &amp; React.js</p>
            </div>
          </div>
        ) : (
          /* Mini Collapsed Sidebar (desktop only) */
          <div className="hidden lg:flex flex-col items-center py-2 space-y-4 text-[10px]">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center w-16 py-3 rounded-xl transition-colors ${
                      isActive
                        ? 'text-black font-semibold bg-gray-100'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="truncate text-center w-full px-1">{item.name}</span>
                </NavLink>
              );
            })}

            <NavLink
              to="/history"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-16 py-3 rounded-xl transition-colors ${
                  isActive
                    ? 'text-black font-semibold bg-gray-100'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <User className="w-5 h-5 mb-1" />
              <span className="truncate text-center w-full px-1">You</span>
            </NavLink>
          </div>
        )}
      </aside>
    </>
  );
}
