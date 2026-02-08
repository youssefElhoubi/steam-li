import React from 'react';
import useFilterStore from '../store/useFilterStore';

const AVAILABLE_CATEGORIES = ['Action', 'Comedy', 'Drama', 'Sci-Fi'];

const CategoryFilter: React.FC = () => {
    // We only need the Filter Store here
    const selectedCategories = useFilterStore((state) => state.categories);
    const toggleCategory = useFilterStore((state) => state.toggleCategory);

    return (
        <section>
            <h3 className="text-xs font-bold uppercase text-gray-500 mb-4 tracking-widest">Category</h3>
            <div className="space-y-3">
                {AVAILABLE_CATEGORIES.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            value={cat}
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="w-5 h-5 rounded border-gray-700 bg-gray-800 text-indigo-500 focus:ring-offset-slate-900 focus:ring-indigo-500"
                        />
                        <span className={`transition-colors ${selectedCategories.includes(cat) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                            {cat}
                        </span>
                    </label>
                ))}
            </div>
        </section>
    );
};

export default CategoryFilter;