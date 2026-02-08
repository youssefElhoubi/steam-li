import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Star } from 'lucide-react';
import VideoStore from '../store/vedioStore';
import Header from '../layouts/Header';
import type { Video } from '../components/VideoCard';

const WatchPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const video = VideoStore((state: any) =>
        state.videos?.find((v: Video) => v.id === id)
    );

    if (!video) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-white">
                <h2 className="text-2xl font-bold mb-4">Video not found</h2>
                <button onClick={() => navigate('/')} className="text-indigo-400 hover:underline">
                    Go back home
                </button>
            </div>
        );
    }

    return (
        <>
        <Header Tab='home' />
            <div className="min-h-screen bg-slate-950 p-6">

                {/* 1. BACK BUTTON */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Browse</span>
                </button>

                <div className="max-w-6xl mx-auto">

                    {/* 2. THE VIDEO PLAYER (Responsive Wrapper) */}
                    <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-8">
                        <iframe
                            src={video.trailerUrl}
                            title={video.title}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>

                    {/* 3. VIDEO DETAILS */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column: Title & Desc */}
                        <div className="lg:col-span-2 space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold text-white">{video.title}</h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                <span className="bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded border border-indigo-600/30">
                                    {video.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={14} /> {video.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} /> {video.releaseYear}
                                </span>
                            </div>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                {video.description}
                            </p>
                        </div>

                        {/* Right Column: Meta Info */}
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 h-fit">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-gray-400 font-medium">Rating</span>
                                <div className="flex items-center gap-1 text-yellow-400 font-bold text-lg">
                                    <Star fill="currentColor" size={20} />
                                    {video.rating}/10
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Director</p>
                                    <p className="text-white">{video.director || 'Unknown'}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Cast</p>
                                    <p className="text-white">{video.cast || 'Unknown'}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default WatchPage;