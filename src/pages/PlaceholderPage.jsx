import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowLeft } from 'lucide-react';

export default function PlaceholderPage({ title, description, icon: Icon = Play }) {
  return (
    <div className="flex-1 min-w-0 bg-white flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-700">
        <Icon className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600 max-w-md text-sm mb-6">
        {description || 'This section is part of the YouTube UI navigation in this frontend student project. You can explore and stream live videos on the Home page.'}
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
