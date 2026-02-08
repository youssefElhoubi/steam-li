import { create } from "zustand";
import type { VideoFormData } from "../types/videoTypes";

type VideoStoreType = {
    videos: VideoFormData[];
    addVideo: (newVideo: VideoFormData) => void;
    removeVideo: (videoId: string) => void;
}

const VideoStore = create<VideoStoreType>((set) => ({
    videos: JSON.parse(localStorage.getItem('Videos') || '[]'),
    addVideo: (newVideo: VideoFormData) => set((state: { videos: any[] }) => {
        const updatedVideos = [...state.videos, newVideo];
        localStorage.setItem('Videos', JSON.stringify(updatedVideos));
        return { videos: updatedVideos };
    }),
    removeVideo: (videoId: string) => set((state: { videos: VideoFormData[] }) => {
        const updatedVideos = state.videos.filter(video => video.thumbnailUrl !== videoId);
        VideoStore.setState({ videos: updatedVideos });
        return { videos: updatedVideos };
    })
}));
export default VideoStore;