import React, { useEffect } from 'react';
import VideoCard, { type Video } from './VideoCard';
import VideoStore from '../store/vedioStore';

const VideoGrid: React.FC = () => {
    const videos = VideoStore((state: any) => state.videos);
    useEffect(() => {
        return () => {
            
        }
    }, [])

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-indigo-600">
                Trending Now
            </h2>
            {videos === null || videos.length === 0 ? (
                <p className="text-gray-400 text-center py-12">No videos available yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {videos.map((video: Video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default VideoGrid;