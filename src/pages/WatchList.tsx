import React, { useEffect, useState } from 'react'
import FilterSidebar from './../components/FilterSidebar';
import Header from '../layouts/Header';
import VideoGrid from '../components/VideoGrid';
import { CirclePlus } from 'lucide-react';
import AddVideoModal from '../components/videos/AddVideoModal/AddVideoModal';
import VideoStore from '../store/vedioStore';



const WatchList: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);
    const [watchlistVideos, setWatchlistVideos] = useState<any[]>([]);

    const videos = VideoStore((state) => state.videos);

    useEffect(() => {
        if (!videos) return; // condition INSIDE effect, not outside

        const stored = localStorage.getItem('WatchList');
        const parsed = stored ? JSON.parse(stored) : [];

        const filtered = videos.filter((v) =>
            parsed.some((w) => w.videoId === v.id)
        );

        setWatchlistVideos(filtered);
    }, [videos]);
    return (
        <div>
            <Header Tab='Watchlist' />
            <div className="flex h-screen overflow-hidden bg-slate-950">

                {/* Sidebar sits here. On Desktop it takes up space (static). On Mobile it floats (fixed). */}
                <FilterSidebar />

                {/* Main Content: flex-1 makes it fill the remaining space */}
                <main className="flex-1 overflow-y-auto relative w-full">
                    <VideoGrid videos={watchlistVideos}>
                        <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-indigo-600">
                            Watchlist
                        </h2>
                    </VideoGrid>
                </main>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 " title='add video' onClick={() => setIsOpen(!isOpen)}>
                    <CirclePlus size={40} strokeWidth={3} className="absolute bottom-2 right-2 text-green-400 " />
                </div>
                {/* Add Video Modal */}
                <AddVideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

            </div>
        </div>
    )
}

export default WatchList