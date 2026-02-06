import React from 'react';
import { Filter } from 'lucide-react';
import SideBarStore from '../store/SideBarStore';
import useFilterStore from '../store/useFilterStore';

// Import the separated components
import CategoryFilter from './CategoryFilter';
import DurationFilter from './DurationFilter';

const FilterSidebar: React.FC = () => {
    
    // Sidebar Visibility State
    const isOpen = SideBarStore((state: any) => state.isOpen);
    const toggleSidebar = SideBarStore((state: any) => state.toggleSidebar); 
    
    // Global Filter Actions
    const resetFilters = useFilterStore((state) => state.resetFilters);

    return (
        <>
            {/* OVERLAY */}
            {isOpen && (
                <div 
                    className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden' 
                    onClick={() => toggleSidebar()} 
                />
            )}

            {/* SIDEBAR CONTAINER */}
            <aside className={`
                fixed top-0 left-0 z-50 h-screen bg-slate-900 text-white p-6 
                transition-transform duration-300 ease-in-out border-r border-white/10
                w-72 flex flex-col
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 md:static md:block
            `}>

                <div className="flex items-center justify-between mb-8 flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <Filter size={20} className="text-indigo-400" />
                        <h2 className="text-xl font-bold">Filters</h2>
                    </div>
                </div>

                {/* SCROLLABLE FILTER AREA */}
                <div className="space-y-8 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                    
                    {/* 1. Category Component */}
                    <CategoryFilter />

                    <hr className="border-white/5" />

                    {/* 2. Duration Component */}
                    <DurationFilter />

                    {/* Add more separated components here (e.g. <RatingFilter />) */}
                </div>

                {/* FOOTER ACTIONS */}
                <div className="pt-4 mt-auto border-t border-white/10">
                    <button 
                        onClick={resetFilters}
                        className="w-full py-3 text-sm font-medium text-gray-400 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-all"
                    >
                        Clear All
                    </button>
                </div>
            </aside>
        </>
    );
};

export default FilterSidebar;