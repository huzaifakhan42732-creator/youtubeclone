import React, { useState, useEffect } from 'react';
import CategoryBar from '../components/CategoryBar';
import VideoGrid from '../components/VideoGrid';
import { getVideosByCategory } from '../services/pixabayApi';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch videos whenever category changes
  const fetchVideos = async (category) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getVideosByCategory(category, { perPage: 16 });
      setVideos(result.videos || []);

      if (result.error && !result.videos?.length) {
        setError(result.error);
      }
    } catch (err) {
      console.error('Error fetching Pixabay videos:', err);
      setError(err.message || 'Failed to load videos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(activeCategory);
  }, [activeCategory]);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const handleRetry = () => {
    fetchVideos(activeCategory);
  };

  return (
    <div className="flex-1 min-w-0 bg-white">
      {/* Category Filter Bar */}
      <CategoryBar
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
      />

      <div className="px-3 py-3 sm:px-6 sm:py-6 max-w-7xl mx-auto w-full">
        {/* Video Grid */}
        <VideoGrid
          videos={videos}
          isLoading={isLoading}
          error={error}
          onRetry={handleRetry}
          emptyMessage={`No videos found for "${activeCategory}"`}
        />
      </div>
    </div>
  );
}
