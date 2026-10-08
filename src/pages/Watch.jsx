import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVideoById, getRelatedVideos } from '../services/pixabayApi';
import RelatedVideos from '../components/RelatedVideos';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Bell, 
  Check, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';

export default function Watch() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRelatedLoading, setIsRelatedLoading] = useState(true);
  const [error, setError] = useState(null);

  // Interactive user actions
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Comment section state
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
      text: 'Great quality video! Really helpful and nicely explained.',
      timeAgo: '1 day ago',
      likes: 34
    },
    {
      id: 2,
      user: 'DevMaster99',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80',
      text: 'The video streaming runs very smoothly. Thanks for sharing this.',
      timeAgo: '3 days ago',
      likes: 18
    },
    {
      id: 3,
      user: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop&q=80',
      text: 'Clean UI and excellent camera work. Subscribed!',
      timeAgo: '5 days ago',
      likes: 9
    }
  ]);

  // Load video details and related videos whenever ID changes
  useEffect(() => {
    // Reset page view state
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLiked(false);
    setIsDisliked(false);
    setIsSaved(false);

    const loadVideoData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const videoData = await getVideoById(id);
        if (!videoData) {
          setError('Video not found or could not be loaded.');
          setIsLoading(false);
          return;
        }

        setVideo(videoData);
        setIsLoading(false);

        // Fetch related videos
        setIsRelatedLoading(true);
        const related = await getRelatedVideos(id, videoData.category, videoData.tags);
        setRelatedVideos(related);
        setIsRelatedLoading(false);
      } catch (err) {
        console.error('Error loading video:', err);
        setError(err.message || 'Failed to load video player.');
        setIsLoading(false);
      }
    };

    loadVideoData();
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowCopiedToast(true);
      setTimeout(() => setShowCopiedToast(false), 3000);
    } else {
      alert('Video link: ' + window.location.href);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const newComment = {
      id: Date.now(),
      user: 'Student User',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
      text: commentInput.trim(),
      timeAgo: 'Just now',
      likes: 0
    };

    setComments([newComment, ...comments]);
    setCommentInput('');
  };

  if (isLoading) {
    return (
      <div className="flex-1 min-w-0 bg-white p-3 sm:p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
          <div className="lg:col-span-2 space-y-4">
            <div className="aspect-video w-full bg-gray-200 rounded-none sm:rounded-2xl" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-3 sm:mx-0" />
            <div className="h-10 bg-gray-200 rounded mx-3 sm:mx-0" />
            <div className="h-28 bg-gray-200 rounded-xl mx-3 sm:mx-0" />
          </div>
          <div className="space-y-4 p-3 sm:p-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-2">
                <div className="w-32 sm:w-40 h-20 sm:h-24 bg-gray-200 rounded-lg shrink-0" />
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-3.5 bg-gray-200 rounded" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-white">
        <AlertCircle className="w-12 h-12 text-red-500 mb-3" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Video Unavailable</h2>
        <p className="text-sm text-gray-600 mb-6">{error || 'Could not locate video stream.'}</p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 text-sm font-medium transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0 bg-white pb-16 w-full">
      {/* Toast Notification */}
      {showCopiedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-sm">
          <Check className="w-4 h-4 text-green-400" />
          <span>Link copied to clipboard!</span>
        </div>
      )}

      <div className="max-w-[1720px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 sm:gap-6">
          {/* Main Left Section: Video Player, Title, Channel, Description, Comments */}
          <div className="lg:col-span-2">
            {/* Video Player - Full edge-to-edge width on mobile */}
            <div className="relative aspect-video w-full rounded-none sm:rounded-2xl overflow-hidden bg-black shadow-md">
              {video.videoUrl ? (
                <video
                  key={video.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  poster={video.thumbnail}
                  className="w-full h-full object-contain"
                >
                  <source src={video.fastVideoUrl || video.videoUrl} type="video/mp4" />
                  {video.hdVideoUrl && video.hdVideoUrl !== video.fastVideoUrl && (
                    <source src={video.hdVideoUrl} type="video/mp4" />
                  )}
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 text-center">
                  <p className="text-lg font-semibold">Video stream preview</p>
                  <p className="text-sm text-gray-400 mt-1">
                    No direct MP4 URL found for this clip.
                  </p>
                </div>
              )}
            </div>

            {/* Video Content Container with padding */}
            <div className="px-3 sm:px-0 mt-3 sm:mt-4">
              {/* Title */}
              <h1 className="text-base sm:text-xl font-bold text-gray-900 leading-snug">
                {video.title}
              </h1>

              {/* Channel Info & Actions Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-3 pb-3 border-b border-gray-100">
                {/* Channel Left */}
                <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={video.channelAvatar}
                      alt={video.channelName}
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(video.channelName)}&background=111827&color=fff`;
                      }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 font-semibold text-sm sm:text-base text-gray-900 truncate">
                        <span className="truncate">{video.channelName}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                      </div>
                      <p className="text-xs text-gray-500">{video.subscribers}</p>
                    </div>
                  </div>

                  {/* Subscribe Button */}
                  <button
                    onClick={() => setIsSubscribed(!isSubscribed)}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 shrink-0 ml-2 ${
                      isSubscribed
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                        : 'bg-black hover:bg-neutral-800 text-white'
                    }`}
                  >
                    {isSubscribed ? (
                      <>
                        <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Subscribed</span>
                      </>
                    ) : (
                      <span>Subscribe</span>
                    )}
                  </button>
                </div>

                {/* Action Buttons Right (Horizontally scrollable on mobile) */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto touch-pan-x">
                  {/* Like / Dislike Pill */}
                  <div className="flex items-center bg-gray-100 rounded-full shrink-0">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-l-full hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors shrink-0 ${
                        isLiked ? 'text-blue-600' : 'text-gray-800'
                      }`}
                      title="I like this"
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLiked ? 'fill-blue-600' : ''}`} />
                      <span>{video.likes}</span>
                    </button>
                    <div className="w-[1px] h-4 sm:h-5 bg-gray-300" />
                    <button
                      onClick={handleDislike}
                      className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-r-full hover:bg-gray-200 text-xs sm:text-sm transition-colors shrink-0 ${
                        isDisliked ? 'text-blue-600' : 'text-gray-800'
                      }`}
                      title="I dislike this"
                    >
                      <ThumbsDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isDisliked ? 'fill-blue-600' : ''}`} />
                    </button>
                  </div>

                  {/* Share */}
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xs sm:text-sm font-medium text-gray-800 transition-colors shrink-0"
                    title="Share"
                  >
                    <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Share</span>
                  </button>

                  {/* Save */}
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors shrink-0 ${
                      isSaved ? 'text-blue-600 font-semibold' : 'text-gray-800'
                    }`}
                    title="Save to playlist"
                  >
                    <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSaved ? 'fill-blue-600' : ''}`} />
                    <span>{isSaved ? 'Saved' : 'Save'}</span>
                  </button>
                </div>
              </div>

              {/* Description Box */}
              <div 
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="mt-3 sm:mt-4 p-3 sm:p-3.5 rounded-xl bg-gray-100/90 hover:bg-gray-100 transition-colors cursor-pointer text-xs sm:text-sm text-gray-800"
              >
                <div className="font-semibold text-xs text-gray-900 flex items-center gap-2 mb-1 flex-wrap">
                  <span>{video.views}</span>
                  <span>&bull;</span>
                  <span>{video.uploadDate}</span>
                  {video.category && (
                    <span className="bg-white px-2 py-0.5 rounded text-[11px] text-gray-600 border border-gray-200">
                      #{video.category}
                    </span>
                  )}
                </div>
                <p className={`whitespace-pre-line leading-relaxed ${isDescriptionExpanded ? '' : 'line-clamp-2'}`}>
                  {video.description}
                </p>
                <button className="font-semibold text-xs mt-1 text-gray-900">
                  {isDescriptionExpanded ? 'Show less' : '...more'}
                </button>
              </div>

              {/* Comments Section */}
              <div className="mt-5 sm:mt-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{comments.length} Comments</span>
                  </h3>
                </div>

                {/* Add Comment Input */}
                <form onSubmit={handleAddComment} className="flex gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 text-white font-semibold flex items-center justify-center text-xs sm:text-sm shrink-0">
                    S
                  </div>
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      className="w-full border-b border-gray-300 pb-1 text-xs sm:text-sm outline-none focus:border-black transition-colors bg-transparent min-w-0"
                    />
                    {commentInput && (
                      <div className="flex justify-end gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => setCommentInput('')}
                          className="px-3 py-1 rounded-full hover:bg-gray-100 text-xs font-medium text-gray-700"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-3.5 py-1 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800"
                        >
                          Comment
                        </button>
                      </div>
                    )}
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-3.5 sm:space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-2.5 sm:gap-3">
                      <img
                        src={comment.avatar}
                        alt={comment.user}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
                      />
                      <div className="flex-1 text-xs sm:text-sm min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs text-gray-900 truncate">
                            {comment.user}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-gray-500 shrink-0">
                            {comment.timeAgo}
                          </span>
                        </div>
                        <p className="text-gray-800 text-xs sm:text-sm mt-0.5 leading-snug break-words">
                          {comment.text}
                        </p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                          <button className="flex items-center gap-1 hover:text-black">
                            <ThumbsUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>{comment.likes || ''}</span>
                          </button>
                          <button className="hover:text-black">
                            <ThumbsDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </button>
                          <button className="font-semibold text-[11px] hover:text-black">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Related / Recommended Videos */}
          <div className="lg:col-span-1 px-3 sm:px-0 mt-4 lg:mt-0">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-2.5 sm:mb-3">
              Related Videos
            </h2>
            <RelatedVideos
              videos={relatedVideos}
              isLoading={isRelatedLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
