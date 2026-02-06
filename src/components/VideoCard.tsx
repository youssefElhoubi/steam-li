import React from 'react';
import { Play, Star, Clock, Calendar } from 'lucide-react';

export interface Video {
    title: string;
    description: string;
    thumbnailUrl: string;
    duration: string; // e.g., "1h 45m"
    releaseYear: number;
    type: 'FILM' | 'SERIE' | 'DOCUMENTAIRE';
    category: string;
    rating: number;
}

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
    return (
        <div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-white/5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">

            {/* 1. THUMBNAIL AREA */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                {/* Badges (Type & Rating) */}
                <div className="absolute top-2 left-2 flex gap-2">
                    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded text-white ${video.type === 'FILM' ? 'bg-blue-600' :
                            video.type === 'SERIE' ? 'bg-purple-600' : 'bg-emerald-600'
                        }`}>
                        {video.type}
                    </span>
                </div>

                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-xs text-yellow-400 font-bold">
                    <Star size={12} fill="currentColor" />
                    <span>{video.rating}</span>
                </div>

                {/* Play Button Overlay (Visible on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-indigo-600 text-white p-3 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300 hover:bg-indigo-500">
                        <Play fill="currentColor" />
                    </button>
                </div>

                {/* Duration Badge (Bottom Right) */}
                <div className="absolute bottom-2 right-2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] text-white font-mono flex items-center gap-1">
                    <Clock size={10} />
                    {video.duration}
                </div>
            </div>

            {/* 2. CONTENT AREA */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-semibold line-clamp-1 group-hover:text-indigo-400 transition-colors">
                        {video.title}
                    </h3>
                    <span className="text-xs text-gray-500 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full">
                        <Calendar size={10} />
                        {video.releaseYear}
                    </span>
                </div>

                <p className="text-xs text-indigo-300 mb-2 font-medium">
                    {video.category}
                </p>

                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {video.description}
                </p>
            </div>
        </div>
    );
};

export default VideoCard;