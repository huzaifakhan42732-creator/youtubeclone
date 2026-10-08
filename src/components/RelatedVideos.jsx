import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function RelatedVideos({ videos = [], isLoading = false }) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-2 animate-pulse">
            <div className="w-40 h-24 bg-gray-200 rounded-lg shrink-0" />
            <div className="flex-1 space-y-2 py-1">
              <div className="h-3.5 bg-gray-200 rounded w-11/12" />
              <div className="h-3.5 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mt-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return (
      <p className="text-sm text-gray-500 py-4">No recommended videos found.</p>
    );
  }

  return (
    <div className="space-y-3">
      {videos.map((video) => (
        <RelatedVideoItem key={video.id} video={video} />
      ))}
    </div>
  );
}

function RelatedVideoItem({ video }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      to={`/watch/${video.id}`}
      className="flex gap-3 group cursor-pointer hover:bg-gray-50 p-1.5 rounded-xl transition-colors"
    >
      {/* Thumbnail */}
      <div className="relative w-32 sm:w-40 aspect-video rounded-lg overflow-hidden bg-gray-100 shrink-0">
        {!imgError && video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            onError={() => setImgError(true)}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
            <Play className="w-6 h-6 text-white/60" />
          </div>
        )}

        {/* Duration */}
        {video.formattedDuration && (
          <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-semibold px-1 py-0.2 rounded shadow">
            {video.formattedDuration}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 min-w-0 pr-1">
        <h4 
          className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-black"
          title={video.title}
        >
          {video.title}
        </h4>
        <p className="text-xs text-gray-600 truncate mt-1">
          {video.channelName}
        </p>
        <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
          <span>{video.views}</span>
          <span>&bull;</span>
          <span>{video.uploadDate}</span>
        </div>
      </div>
    </Link>
  );
}
