import { create } from "zustand";


const SideBarStore = create((set) => ({
    isOpen: false,
    toggleSidebar: () => set((state: { isOpen: boolean }) => ({ isOpen: !state.isOpen })),
}));

export default SideBarStore;