import React from 'react';
import VideoCard from './VideoCard';
import { Film, AlertCircle, RefreshCw } from 'lucide-react';

export default function VideoGrid({ 
  videos = [], 
  isLoading = false, 
  error = null, 
  onRetry = null,
  emptyMessage = "No videos found"
}) {
  // Skeleton loading cards
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 sm:gap-x-4 sm:gap-y-7 animate-pulse">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col">
            {/* Thumbnail skeleton */}
            <div className="aspect-video w-full bg-gray-200 rounded-xl mb-3" />
            <div className="flex gap-3">
              {/* Avatar skeleton */}
              <div className="w-9 h-9 rounded-full bg-gray-200 shrink-0" />
              <div className="flex-1 space-y-2">
                {/* Title skeleton */}
                <div className="h-4 bg-gray-200 rounded w-11/12" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                {/* Channel & views skeleton */}
                <div className="h-3 bg-gray-200 rounded w-1/2 mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Something went wrong
        </h3>
        <p className="text-sm text-gray-600 max-w-md mb-5">
          {error}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 text-sm font-medium transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        )}
      </div>
    );
  }

  // Empty state
  if (!videos || videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mb-4">
          <Film className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-sm text-gray-600 max-w-sm">
          Try different keywords, clear your search filter, or browse different categories above.
        </p>
      </div>
    );
  }

  // Main video grid
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 sm:gap-x-4 sm:gap-y-7">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
