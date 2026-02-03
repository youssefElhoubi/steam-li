import React from 'react';
import VideoCard, { type Video } from './VideoCard';

// Mock Data (You would fetch this from your API/Service)
const DUMMY_VIDEOS: Video[] = [
    {
        id: '1',
        title: 'Inception',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        thumbnail: 'https://image.tmdb.org/t/p/w500/9gk7admal4zl67Yrxio2DIdpMYx.jpg', // Replace with real image
        duration: '2h 28m',
        releaseYear: 2010,
        type: 'FILM',
        category: 'Sci-Fi',
        rating: 8.8
    },
    {
        id: '2',
        title: 'Breaking Bad',
        description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
        thumbnail: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
        duration: '5 Seasons',
        releaseYear: 2008,
        type: 'SERIE',
        category: 'Drama',
        rating: 9.5
    },
    {
        id: '3',
        title: 'Planet Earth II',
        description: 'David Attenborough returns with a new wildlife documentary that showcases life on Planet Earth.',
        thumbnail: 'https://image.tmdb.org/t/p/w500/f376d8TfO8kYf7vO9qf5T7c7j9.jpg', // Placeholder
        duration: '50m',
        releaseYear: 2016,
        type: 'DOCUMENTAIRE',
        category: 'Nature',
        rating: 9.5
    },
    // Add more items here to test the grid...
];

const VideoGrid: React.FC = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-indigo-600">
                Trending Now
            </h2>

            {/* GRID LAYOUT EXPLAINED:
         - grid-cols-1: 1 column on mobile
         - sm:grid-cols-2: 2 columns on small tablets
         - lg:grid-cols-3: 3 columns on laptops
         - xl:grid-cols-4: 4 columns on large desktops
      */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {DUMMY_VIDEOS.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default VideoGrid;