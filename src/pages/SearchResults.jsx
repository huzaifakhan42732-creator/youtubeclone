import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import VideoGrid from '../components/VideoGrid';
import { searchVideos } from '../services/pixabayApi';
import { Search, ArrowLeft } from 'lucide-react';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSearchResults = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setVideos([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await searchVideos(searchQuery, { perPage: 24 });
      setVideos(result.videos || []);
      if (result.error && !result.videos?.length) {
        setError(result.error);
      }
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message || 'Failed to search videos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults(query);
  }, [query]);

  return (
    <div className="flex-1 min-w-0 bg-white px-3 py-3 sm:px-6 sm:py-6 max-w-7xl mx-auto pb-16 w-full">
      {/* Search Header */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-gray-200">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link
            to="/"
            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors shrink-0"
            title="Back to Home"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold text-gray-900 flex items-center gap-2 flex-wrap truncate">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 shrink-0" />
              <span className="truncate">Results for: &ldquo;{query}&rdquo;</span>
            </h1>
            {!isLoading && (
              <p className="text-xs text-gray-500 mt-0.5">
                About {videos.length} videos found
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Results Video Grid */}
      <VideoGrid
        videos={videos}
        isLoading={isLoading}
        error={error}
        onRetry={() => fetchSearchResults(query)}
        emptyMessage="No videos found"
      />
    </div>
  );
}
