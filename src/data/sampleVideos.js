// Sample video dataset matching Pixabay Video API structure
// Provides seamless preview mode if no Pixabay API key is set in .env
export const sampleVideos = [
  {
    id: 101,
    tags: "react, programming, coding, web development",
    duration: 32,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 45200,
    likes: 3120,
    comments: 142,
    user: "CodeCraft Academy",
    userImageURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    category: "Technology"
  },
  {
    id: 102,
    tags: "music, lofi, beats, relaxing",
    duration: 48,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 89400,
    likes: 8400,
    comments: 312,
    user: "Lofi Beats Station",
    userImageURL: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    category: "Music"
  },
  {
    id: 103,
    tags: "gaming, cyberpunk, futuristic, gameplay",
    duration: 25,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 124000,
    likes: 9200,
    comments: 94,
    user: "PixelGamers",
    userImageURL: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80",
    category: "Gaming"
  },
  {
    id: 104,
    tags: "travel, mountains, switzerland, landscape, nature",
    duration: 38,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 78500,
    likes: 6700,
    comments: 205,
    user: "Wanderlust Nomad",
    userImageURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    category: "Travel"
  },
  {
    id: 105,
    tags: "technology, quantum, microchips, futuristic, hardware",
    duration: 30,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 63200,
    likes: 4100,
    comments: 178,
    user: "TechVision Daily",
    userImageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    category: "Technology"
  },
  {
    id: 106,
    tags: "sports, soccer, football, athletic, stadium",
    duration: 22,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 195000,
    likes: 14200,
    comments: 520,
    user: "MatchDay Highlights",
    userImageURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    category: "Sports"
  },
  {
    id: 107,
    tags: "education, astronomy, cosmos, galaxy, space",
    duration: 40,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 52100,
    likes: 3890,
    comments: 165,
    user: "Cosmos & Science",
    userImageURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    category: "Education"
  },
  {
    id: 108,
    tags: "nature, ocean, waves, water, sea",
    duration: 28,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 84300,
    likes: 7100,
    comments: 289,
    user: "OceanLife Films",
    userImageURL: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
    category: "Nature"
  },
  {
    id: 109,
    tags: "food, cooking, delicious, gourmet, culinary",
    duration: 35,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 41200,
    likes: 3100,
    comments: 88,
    user: "Chef Delights",
    userImageURL: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    category: "Food"
  },
  {
    id: 110,
    tags: "programming, javascript, code, computer, software",
    duration: 34,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 71000,
    likes: 4900,
    comments: 198,
    user: "CodeCraft Academy",
    userImageURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    category: "Technology"
  },
  {
    id: 111,
    tags: "music, guitar, concert, stage, instrument",
    duration: 26,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 92400,
    likes: 8100,
    comments: 240,
    user: "Acoustic Live",
    userImageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    category: "Music"
  },
  {
    id: 112,
    tags: "nature, waterfall, forest, green, trees",
    duration: 20,
    videos: {
      medium: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
      },
      small: {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&auto=format&fit=crop&q=80"
      }
    },
    views: 65100,
    likes: 5400,
    comments: 160,
    user: "Nature Explorer",
    userImageURL: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80",
    category: "Nature"
  }
];
