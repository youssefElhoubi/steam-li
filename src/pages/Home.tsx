import React from 'react'
import FilterSidebar from './../components/FilterSidebar';
import Header from '../layouts/Header';
import VideoGrid from '../components/VideoGrid';

const Home: React.FC = () => {
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

            </div>
        </div>
    )
}

export default Home