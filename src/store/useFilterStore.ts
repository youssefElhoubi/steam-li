import { create } from 'zustand';

interface FilterState {
    categories: string[];
    duration: number;

    // Actions
    toggleCategory: (category: string) => void;
    setDuration: (duration: number) => void;
    resetFilters: () => void;
}

const useFilterStore = create<FilterState>((set) => ({
    categories: [],
    duration: 120, // Default 120 minutes

    toggleCategory: (category) => set((state) => {
        const isSelected = state.categories.includes(category);
        return {
            categories: isSelected
                ? state.categories.filter((c) => c !== category) // Remove if exists
                : [...state.categories, category] // Add if not exists
        };
    }),

    setDuration: (duration) => set({ duration }),

    resetFilters: () => set({ categories: [], duration: 120 })
}));

export default useFilterStore;