import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  Mic, 
  Video, 
  Bell, 
  X,
  Play,
  ArrowLeft
} from 'lucide-react';

export default function Navbar({ onToggleSidebar, isSidebarOpen }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowMobileSearch(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 h-14 px-2 sm:px-4 flex items-center justify-between w-full">
      {/* If Mobile Search is open, show full-width search bar */}
      {showMobileSearch ? (
        <div className="flex items-center w-full gap-2 py-1">
          <button 
            onClick={() => setShowMobileSearch(false)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-700 shrink-0"
            title="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center min-w-0">
            <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden focus-within:border-blue-500 shadow-inner bg-white">
              <input
                type="text"
                placeholder="Search YouTube"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full px-3.5 py-1.5 text-sm outline-none bg-transparent min-w-0"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="p-1.5 text-gray-500 hover:text-black shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="bg-gray-50 hover:bg-gray-100 px-3.5 py-2 border-l border-gray-300 text-gray-600 shrink-0"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
          <button 
            type="button" 
            className="p-2 rounded-full hover:bg-gray-100 text-gray-700 shrink-0"
            title="Voice search"
            onClick={() => alert('Voice search simulation: Try typing your search!')}
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <>
          {/* Left: Hamburger Menu + YouTube Logo */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5 text-gray-800" />
            </button>

            <Link to="/" className="flex items-center gap-1 group" title="YouTube Home">
              <div className="bg-red-600 text-white p-1 rounded-lg flex items-center justify-center shrink-0">
                <Play className="w-4 h-4 fill-white" />
              </div>
              <span className="font-bold text-base sm:text-xl tracking-tighter text-black flex items-center">
                YouTube
                <span className="hidden sm:inline text-[10px] text-gray-500 font-normal ml-1 -mt-2">Clone</span>
              </span>
            </Link>
          </div>

          {/* Center: Search Bar (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center justify-center flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
              <div className="flex items-center w-full border border-gray-300 rounded-l-full overflow-hidden focus-within:border-blue-500 shadow-inner bg-white">
                <div className="pl-3.5 pr-1 text-gray-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-2 py-2 text-sm outline-none bg-transparent"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="p-1.5 mr-1 text-gray-500 hover:text-black rounded-full"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="bg-gray-100 hover:bg-gray-200 px-5 py-2.5 border border-l-0 border-gray-300 rounded-r-full text-gray-700 transition-colors shrink-0"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            <button
              type="button"
              onClick={() => alert('Voice search simulation: Please enter your search query in the search bar.')}
              className="ml-2 sm:ml-3 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors shrink-0"
              title="Search with your voice"
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Actions & Profile */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Mobile Search Button */}
            <button
              onClick={() => setShowMobileSearch(true)}
              className="sm:hidden p-2 rounded-full hover:bg-gray-100 text-gray-700"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Create button (tablet & desktop) */}
            <button
              onClick={() => alert('Create video: In this student project, videos are streamed from Pixabay API.')}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium text-gray-800 transition-colors"
              title="Create"
            >
              <Video className="w-4 h-4 text-gray-700" />
              <span>Create</span>
            </button>

            {/* Notification Bell */}
            <button
              className="relative p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Avatar */}
            <div className="ml-0.5 sm:ml-1 flex items-center">
              <button 
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 text-white font-semibold flex items-center justify-center text-sm shadow hover:ring-2 hover:ring-red-400 transition-all shrink-0"
                title="Your Profile"
              >
                S
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
