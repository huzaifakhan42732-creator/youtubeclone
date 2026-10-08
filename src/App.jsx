import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Watch from './pages/Watch';
import PlaceholderPage from './pages/PlaceholderPage';
import { Flame, Tv2, History, ListVideo, Clock, ThumbsUp } from 'lucide-react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const isWatchPage = location.pathname.startsWith('/watch');

  // Adjust sidebar default behavior based on screen size and page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 || isWatchPage) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isWatchPage]);

  // When navigating to watch page, collapse sidebar
  useEffect(() => {
    if (isWatchPage) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isWatchPage]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    // If mobile or watch page, close the sidebar drawer
    if (window.innerWidth < 1024 || isWatchPage) {
      setIsSidebarOpen(false);
    }
  };

  // Determine main content margin depending on whether sidebar is expanded or collapsed
  const getMainMargin = () => {
    if (isWatchPage) {
      return 'ml-0';
    }
    if (isSidebarOpen) {
      return 'ml-0 lg:ml-60';
    }
    return 'ml-0 lg:ml-18';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans overflow-x-hidden w-full max-w-full">
      {/* Top Navbar */}
      <Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-1 relative w-full">
        {/* Left Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Main Content Area */}
        <main
          className={`flex-1 min-w-0 transition-all duration-200 ease-in-out ${getMainMargin()} ${
            isWatchPage ? 'pb-4' : 'pb-16 sm:pb-4'
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/shorts" element={<PlaceholderPage title="Shorts" icon={Flame} />} />
            <Route path="/subscriptions" element={<PlaceholderPage title="Subscriptions" icon={Tv2} />} />
            <Route path="/history" element={<PlaceholderPage title="Watch History" icon={History} />} />
            <Route path="/playlists" element={<PlaceholderPage title="Playlists" icon={ListVideo} />} />
            <Route path="/watch-later" element={<PlaceholderPage title="Watch Later" icon={Clock} />} />
            <Route path="/liked" element={<PlaceholderPage title="Liked Videos" icon={ThumbsUp} />} />
            <Route
              path="*"
              element={
                <PlaceholderPage
                  title="Page Not Found"
                  description="The page you were looking for doesn't exist. Click below to return to the video feed."
                />
              }
            />
          </Routes>
        </main>
      </div>

      {/* Mobile Bottom Navigation (Hidden on desktop & Watch page) */}
      {!isWatchPage && <BottomNav />}
    </div>
  );
}
