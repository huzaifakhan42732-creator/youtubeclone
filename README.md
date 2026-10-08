# YouTube Clone - Frontend Project

A simple, clean, and functional YouTube Clone frontend built with **React.js**, **Tailwind CSS**, and **React Router**, powered by the **Pixabay Video API**.

This project was built for a student frontend assignment, closely replicating the familiar layout, responsive navigation, and video streaming experience of YouTube without backend complexity.

---

## 🌟 Features

- **YouTube-Style Top Navbar**
  - Red YouTube logo and branding
  - Responsive search bar with instant search submission
  - Voice search simulation & clear search button
  - Action buttons: Create, Notifications, Profile avatar
  - Hamburger menu to toggle sidebar

- **Collapsible Sidebar**
  - Navigation links: Home, Shorts, Subscriptions, You (History, Playlists, Watch Later, Liked Videos)
  - Subscriptions list with creator avatars and live indicator badges
  - Explore categories: Trending, Music, Gaming, News, Sports
  - Responsive collapse: Full sidebar on desktop, icon-only mini sidebar when toggled, and slide-in drawer on mobile/tablet

- **Category Filter Chips**
  - Horizontal scrolling category bar: **All**, **Music**, **Gaming**, **Technology**, **Sports**, **Travel**, **Education**, **Nature**, **Food**
  - Uses direct Pixabay categories or targeted keyword search (`q=gaming`, `q=technology`)
  - Active category visual highlight

- **Responsive Video Grid**
  - Responsive grid layout (1 to 4 columns depending on screen size)
  - Video thumbnail with hover zoom animation
  - Duration timestamp badge
  - Creator channel avatar
  - Video title (derived from tags), creator name, views, and upload date
  - Skeleton loading states and "No videos found" empty states

- **Watch / Video Streaming Page**
  - HTML5 `<video>` player streaming high-quality MP4 videos (`videos.medium.url`)
  - Video details: title, view count, upload date, category tags
  - Channel info with subscriber count and interactive **Subscribe / Subscribed** toggle
  - Interactive **Like** (with counter) and **Dislike** buttons
  - **Share** button with instant URL copy toast notification
  - **Save** to playlist button
  - Expandable description box ("...more" / "Show less")
  - Interactive **Comments** section (add new comments, view existing comments, like comments)
  - **Related Videos** column on desktop (stacks neatly on mobile)

- **Search Functionality**
  - Search any keyword (e.g., `gaming`, `technology`, `nature`, `sports`)
  - Calls Pixabay video endpoint with `q=SEARCH_TERM` and displays results in the YouTube video grid
  - Error and empty search result handling

---

## 🛠️ Tech Stack

- **React.js** (Vite)
- **Tailwind CSS** (v3)
- **React Router** (`react-router-dom`)
- **Lucide React** (icons)
- **Pixabay Video API** (`https://pixabay.com/api/videos/`)

---

## 📁 Project Structure

```text
youtubeclone/
├── public/
│   └── favicon.svg           # YouTube-style SVG favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Top navigation header
│   │   ├── Sidebar.jsx       # Left collapsible navigation
│   │   ├── CategoryBar.jsx   # Horizontal category filters
│   │   ├── VideoCard.jsx     # Individual video card
│   │   ├── VideoGrid.jsx     # Video grid with skeletons & empty states
│   │   └── RelatedVideos.jsx # Recommended videos for watch page
│   ├── pages/
│   │   ├── Home.jsx          # Main feed page
│   │   ├── SearchResults.jsx # Search results page (?q=...)
│   │   ├── Watch.jsx         # Video player & details page
│   │   └── PlaceholderPage.jsx# Secondary routes (Shorts, Subscriptions, etc.)
│   ├── services/
│   │   └── pixabayApi.js     # Pixabay Video API service & normalizer
│   ├── data/
│   │   ├── sampleVideos.js   # Fallback sample dataset for immediate preview
│   │   └── videos.js         # Video data export
│   ├── App.jsx               # Application layout and routing
│   ├── main.jsx              # App entry point with BrowserRouter
│   └── index.css             # Tailwind base and scrollbar styles
├── .env                      # Environment variables (VITE_PIXABAY_API_KEY)
├── .env.example              # Example environment variables
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or newer recommended).

### 2. Installation
Open your terminal inside the project directory and install the dependencies:

```bash
npm install
```

### 3. Pixabay API Key Setup
To fetch live video data directly from Pixabay:

1. Sign up for a free account at [Pixabay](https://pixabay.com/api/docs/).
2. Copy your API key from the documentation page.
3. Open the `.env` file in the root directory and paste your API key:

```env
VITE_PIXABAY_API_KEY=your_actual_pixabay_api_key_here
```

> **Note**: If you run without an API key (or with `YOUR_API_KEY`), the app automatically runs in **Demo Mode** using a built-in set of sample streaming videos so you can test and grade the application immediately without setup friction!

### 4. Run the Development Server
Start the local development server:

```bash
npm run dev
```

Open your browser at the local URL (e.g. `http://localhost:5173` or `http://localhost:5174`).

### 5. Build for Production
To build the project for submission or deployment:

```bash
npm run build
```

---

## 🎓 Pixabay Data Mapping

- **Thumbnail** → `videos.medium.thumbnail`
- **Video URL** → `videos.medium.url`
- **Title** → Derived cleanly from `tags`
- **Channel Name** → `user`
- **Channel Avatar** → `userImageURL`
- **Views** → `views`
- **Likes** → `likes`
- **Duration** → `duration`
- **Comments** → `comments`
