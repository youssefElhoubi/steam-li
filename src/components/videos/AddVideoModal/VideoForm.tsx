import { useForm } from "react-hook-form";
import { ImageIcon, Save, Youtube } from "lucide-react";
import { type VideoFormData } from "../../../types/videoTypes";

interface Props {
    onSubmit: (data: VideoFormData) => void;
    onCancel: () => void;
}

const VideoForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VideoFormData>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">

            {/* Row 1: Title & Type */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Title</label>
                    <input
                        {...register("title", { required: "Title is required" })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="e.g. Inception"
                    />
                    {errors.title && <p className="text-red-400 text-xs">{errors.title.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Type</label>
                    <select
                        {...register("type")}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none appearance-none"
                    >
                        <option value="FILM">Film</option>
                        <option value="SERIE">Serie</option>
                        <option value="DOCUMENTAIRE">Documentary</option>
                    </select>
                </div>
            </div>

            {/* Row 2: Description */}
            <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Description</label>
                <textarea
                    {...register("description", { required: "Description is required" })}
                    rows={3}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                    placeholder="Plot summary..."
                />
                {errors.description && <p className="text-red-400 text-xs">{errors.description.message}</p>}
            </div>

            {/* Row 3: URLs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase flex items-center gap-2">
                        <ImageIcon size={14} /> Thumbnail URL
                    </label>
                    <input
                        {...register("thumbnailUrl", { required: "Image URL required" })}
                        type="url"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="https://..."
                    />
                    <div>
                        {errors.thumbnailUrl && <p className="text-red-400 text-xs">{errors.thumbnailUrl.message}</p>}
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase flex items-center gap-2">
                        <Youtube size={14} /> Trailer URL
                    </label>
                    <input
                        {...register("trailerUrl", { required: "Trailer URL required" })}
                        type="url"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="https://youtube.com/..."
                    />
                    <div>
                        {errors.trailerUrl && <p className="text-red-400 text-xs">{errors.trailerUrl.message}</p>}
                    </div>
                </div>
            </div>

            {/* Row 4: Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Duration</label>
                    <input
                        {...register("duration", { required: true })}
                        placeholder="e.g. 1h 50m"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none"
                    />
                    <div>
                        {errors.duration && <p className="text-red-400 text-xs">Duration is required</p>}
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Year</label>
                    <input
                        type="number"
                        {...register("releaseYear", { required: true, min: 1900, max: new Date().getFullYear() })}
                        placeholder="2024"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none"
                    />
                    <div>
                        {errors.releaseYear && <p className="text-red-400 text-xs">Valid year is required</p>}
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Category</label>
                    <input
                        {...register("category", { required: true })}
                        placeholder="Action"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none"
                    />
                    <div>
                        {errors.category && <p className="text-red-400 text-xs">{errors.category.message}</p>}
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Rating (0-10)</label>
                    <input
                        type="number" step="0.1"
                        {...register("rating", { min: 0, max: 10 })}
                        placeholder="8.5"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none"
                    />
                </div>
            </div>

            {/* Row 5: People */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Director</label>
                    <input
                        {...register("director")}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none"
                        placeholder="Director Name"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Cast</label>
                    <input
                        {...register("cast")}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none"
                        placeholder="Actor 1, Actor 2..."
                    />
                </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-white/10 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all"
                >
                    <Save size={18} />
                    Save Video
                </button>
            </div>

        </form>
    );
};

export default VideoForm;
