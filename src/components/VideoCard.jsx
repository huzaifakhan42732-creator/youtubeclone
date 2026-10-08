import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Play } from 'lucide-react';

export default function VideoCard({ video }) {
  const [imgError, setImgError] = useState(false);

  if (!video) return null;

  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Thumbnail Container */}
      <Link 
        to={`/watch/${video.id}`} 
        className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm"
      >
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
          <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-700 flex flex-col items-center justify-center text-white">
            <Play className="w-10 h-10 text-white/70 mb-1" />
            <span className="text-xs text-gray-300 font-medium">{video.channelName}</span>
          </div>
        )}

        {/* Duration badge */}
        {video.formattedDuration && (
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-semibold px-1.5 py-0.5 rounded shadow">
            {video.formattedDuration}
          </span>
        )}
      </Link>

      {/* Video Details */}
      <div className="flex gap-3 mt-3 items-start">
        {/* Channel Avatar */}
        <Link 
          to={`/watch/${video.id}`} 
          className="shrink-0 mt-0.5" 
          title={video.channelName}
        >
          <img
            src={video.channelAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(video.channelName)}&background=random`}
            alt={video.channelName}
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(video.channelName)}&background=111827&color=fff`;
            }}
            className="w-9 h-9 rounded-full object-cover border border-gray-200"
          />
        </Link>

        {/* Text information */}
        <div className="flex flex-col flex-1 min-w-0 pr-1">
          {/* Title */}
          <Link to={`/watch/${video.id}`}>
            <h3 
              className="text-sm sm:text-[15px] font-semibold text-gray-900 line-clamp-2 leading-tight group-hover:text-black transition-colors"
              title={video.title}
            >
              {video.title}
            </h3>
          </Link>

          {/* Channel Name */}
          <div className="flex items-center gap-1 mt-1 text-[13px] text-gray-600 hover:text-black">
            <span className="truncate">{video.channelName}</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-gray-500 shrink-0" />
          </div>

          {/* Views & Upload date */}
          <div className="flex items-center gap-1.5 text-xs text-gray-600 mt-0.5">
            <span>{video.views}</span>
            <span>&bull;</span>
            <span>{video.uploadDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
