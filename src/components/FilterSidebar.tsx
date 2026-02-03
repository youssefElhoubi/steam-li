import React from 'react';
import { useForm } from 'react-hook-form';
import { Filter } from 'lucide-react';
import SideBarStore from '../store/SideBarStore';

interface FilterInputs {
    categories: string[];
    types: string[];
    rating: string;
    releaseYear: string;
    duration: number;
}

const FilterSidebar: React.FC = () => {
    
    const isOpen = SideBarStore((state: any) => state.isOpen);
    const toggleSidebar = SideBarStore((state: any) => state.toggleSidebar); 

    const { register, watch, handleSubmit } = useForm<FilterInputs>({
        defaultValues: {
            categories: [],
            types: [],
            rating: "all",
            duration: 120
        }
    });

    const currentFilters = watch();
    const onSubmit = (data: FilterInputs) => console.log(data);

    return (
        <>
            {/* 1. OVERLAY (The Grey Background) 
               - Added 'fixed inset-0' to ensure it covers the whole window regardless of scroll.
               - Added 'md:hidden': This forces it to DISAPPEAR on desktop screens.
            */}
            {isOpen && (
                <div 
                    className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden' 
                    onClick={() => toggleSidebar()} 
                />
            )}

            {/* 2. THE SIDEBAR 
               - Mobile: 'fixed' (floats on top), 'z-50' (highest priority).
               - Desktop: 'md:static' (sits inside the layout flow), 'md:z-auto'.
            */}
            <aside className={`
                fixed top-0 left-0 z-50 h-screen bg-slate-900 text-white p-6 
                transition-transform duration-300 ease-in-out border-r border-white/10
                w-72 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 md:static md:block
            `}>

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <Filter size={20} className="text-indigo-400" />
                        <h2 className="text-xl font-bold">Filters</h2>
                    </div>
                </div>

                <form onChange={handleSubmit(onSubmit)} className="space-y-8 overflow-y-auto h-[calc(100vh-120px)] pr-2 custom-scrollbar">
                    {/* ... (Your form content remains the same) ... */}
                    
                    {/* CATEGORY */}
                    <section>
                        <h3 className="text-xs font-bold uppercase text-gray-500 mb-4 tracking-widest">Category</h3>
                        <div className="space-y-3">
                            {['Action', 'Comedy', 'Drama', 'Sci-Fi'].map((cat) => (
                                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        value={cat}
                                        {...register("categories")}
                                        className="w-5 h-5 rounded border-gray-700 bg-gray-800 text-indigo-500 focus:ring-offset-slate-900"
                                    />
                                    <span className="text-gray-400 group-hover:text-white transition-colors">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* DURATION SLIDER */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xs font-bold uppercase text-gray-500 tracking-widest">Duration</h3>
                            <span className="text-indigo-400 text-sm font-mono">{currentFilters.duration}m</span>
                        </div>
                        <input
                            type="range"
                            min="30"
                            max="240"
                            {...register("duration")}
                            className="w-full accent-indigo-500 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </section>

                    <button type="reset" className="w-full py-3 mt-4 text-sm font-medium text-gray-400 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-all">
                        Clear All
                    </button>
                </form>
            </aside>
        </>
    );
};

export default FilterSidebar;