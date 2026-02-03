import { create } from "zustand";
import type { VideoFormData } from "../types/videoTypes";

const VideoStore = create((set) => ({
    videos: JSON.parse(localStorage.getItem('Videos') || '[]'),
    addVideo: (newVideo: VideoFormData) => set((state: { videos: any[] }) => {
        const updatedVideos = [...state.videos, newVideo];
        localStorage.setItem('Videos', JSON.stringify(updatedVideos));
        set({ videos: updatedVideos });
    }),
    removeVideo: (videoId: string) => set((state: { videos: any[] }) => {
        const updatedVideos = state.videos.filter(video => video.id !== videoId);
        localStorage.setItem('Videos', JSON.stringify(updatedVideos));
        return { videos: updatedVideos };
    })
}));
export default VideoStore;