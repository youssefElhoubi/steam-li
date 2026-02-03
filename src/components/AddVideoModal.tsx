import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { X, Save, Film, Youtube, Image as ImageIcon } from 'lucide-react';

// 1. Define the Data Shape
type VideoFormData = {
  title: string;
  description: string;
  thumbnailUrl: string;
  trailerUrl: string;
  duration: string;
  releaseYear: number;
  type: 'FILM' | 'SERIE' | 'DOCUMENTAIRE';
  category: string;
  rating: number;
  director: string;
  cast: string;
};

interface AddVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddVideoModal: React.FC<AddVideoModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<VideoFormData>();

  // Reset form when modal closes (optional)
  React.useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  const onSubmit: SubmitHandler<VideoFormData> = (data) => {
    console.log("New Video Data:", data);
    // TODO: Call your service here (e.g., videoService.add(data))
    onClose();
  };

  if (!isOpen) return null;

  return (
    // 1. OVERLAY (Backdrop)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      
      {/* 2. MODAL CONTAINER */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl animate-fadeIn my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Film className="text-indigo-500" />
            Add New Video
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Form Area */}
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
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Year</label>
              <input 
                type="number"
                {...register("releaseYear", { required: true, min: 1900, max: 2030 })}
                placeholder="2024"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Category</label>
              <input 
                {...register("category", { required: true })}
                placeholder="Action"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none"
              />
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
              onClick={onClose}
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
      </div>
    </div>
  );
};

export default AddVideoModal;