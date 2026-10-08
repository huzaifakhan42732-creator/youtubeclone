import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Music',
  'Gaming',
  'Technology',
  'Sports',
  'Travel',
  'Education',
  'Nature',
  'Food'
];


export default function CategoryBar({ activeCategory = 'All', onSelectCategory }) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative sticky top-14 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 px-4">
      {/* Scroll Left Button */}
      <button
        onClick={() => handleScroll('left')}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Scroll categories left"
      >
        <ChevronLeft className="w-4 h-4 text-gray-700" />
      </button>

      {/* Categories container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth px-1 md:px-8"
      >
        {CATEGORIES.map((category) => {
          const isActive = activeCategory.toLowerCase() === category.toLowerCase();
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`shrink-0 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-black text-white hover:bg-neutral-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={() => handleScroll('right')}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Scroll categories right"
      >
        <ChevronRight className="w-4 h-4 text-gray-700" />
      </button>
    </div>
  );
}
