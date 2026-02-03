import React, { useState } from 'react'
import FilterSidebar from './../components/FilterSidebar';
import Header from '../layouts/Header';
import VideoGrid from '../components/VideoGrid';
import { CirclePlus } from 'lucide-react';
import AddVideoModal from '../components/videos/AddVideoModal/AddVideoModal';

const Home: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Header />
            <div className="flex h-screen overflow-hidden bg-slate-950">

                {/* Sidebar sits here. On Desktop it takes up space (static). On Mobile it floats (fixed). */}
                <FilterSidebar />

                {/* Main Content: flex-1 makes it fill the remaining space */}
                <main className="flex-1 overflow-y-auto relative w-full">
                    <VideoGrid />
                </main>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 " title='add video' onClick={()=> setIsOpen(!isOpen)}>
                    <CirclePlus size={40} strokeWidth={3} className="absolute bottom-2 right-2 text-green-400 "  />
                </div>
                {/* Add Video Modal */}
                <AddVideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

            </div>
        </div>
    )
}

export default Home