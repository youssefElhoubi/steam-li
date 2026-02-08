import React from 'react';
import VideoCard from './VideoCard';
import useFilterStore from '../store/useFilterStore'; // Import filter store
import type { VideoFormData } from '../types/videoTypes';
type VideoGridProps = {
    children?: React.ReactNode; // Allow children to be passed in
    videos ?: VideoFormData[]; 
};

const VideoGrid: React.FC<VideoGridProps> = ({ children, videos } ) => {
    // 1. Get all videos
    

    // 2. Get active filters
    const selectedCategories = useFilterStore((state) => state.categories);
    const durationFilter = useFilterStore((state) => state.duration);
    const filteredVideos = videos?.filter((video) => {
        // Filter by Category
        if (selectedCategories.length > 0) {
            if (!selectedCategories.includes(video.category)) {
                return false; // Hide if category doesn't match
            }
        }

        // Filter by Duration (assuming video.duration is a string like "120")
        // You might need to parse your video.duration if it's a string like "2h 30m"
        // For this example, let's assume you handle the conversion
        if (parseInt(video.duration) > durationFilter) return false;
        

        return true; // Show video
    });

    return (
        <div className="p-6">
            {children}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredVideos?.map((video) => (
                    <VideoCard key={video.thumbnailUrl} video={video} />
                ))}

                {filteredVideos?.length === 0 && (
                    <p className="text-gray-400 col-span-full text-center py-10">
                        No videos match your filters.
                    </p>
                )}
            </div>
        </div>
    );
};

export default VideoGrid;