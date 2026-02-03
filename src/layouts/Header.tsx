import React, { useState } from 'react';
import { Menu, Home, Heart, User, Film } from 'lucide-react';
import SideBarStore from '../store/SideBarStore';


const Header: React.FC= () => {
    // Simulating active route state
    const [activeTab, setActiveTab] = useState('Home');
    const toggleSidebar = SideBarStore((state:any) => state.toggleSidebar); 
    

    const navLinks = [
        { name: 'Home', icon: <Home size={18} /> },
        { name: 'Video Details', icon: <Film size={18} /> },
        { name: 'Watchlist', icon: <Heart size={18} /> },
        { name: 'Profile', icon: <User size={18} /> },
    ];

    return (
        <header className="sticky top-0 z-40 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 h-16">
            <div className="flex items-center justify-between px-4 h-full max-w-7xl mx-auto">

                {/* LEFT SECTION: Sidebar Button & Logo */}
                <div className="flex items-center gap-4">
                    {/* Sidebar Toggle (Visible on Mobile/Tablet) */}
                    <button
                        onClick={toggleSidebar}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors md:hidden"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
                            M
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hidden sm:block">
                            MovieApp
                        </span>
                    </div>
                </div>

                {/* CENTER SECTION: Navigation Links (Hidden on small mobile) */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => setActiveTab(link.name)}
                            className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeTab === link.name
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'}
              `}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </button>
                    ))}
                </nav>

                {/* RIGHT SECTION: Profile / Actions */}
                <div className="flex items-center gap-4">
                    {/* Mobile Nav Icon (Alternative for very small screens if needed) */}
                    <button className="md:hidden text-gray-400">
                        <User size={24} />
                    </button>

                    {/* User Avatar */}
                    <div className="hidden md:flex items-center gap-3 pl-4 border-l border-white/10">
                        <div className="text-right hidden lg:block">
                            <p className="text-sm font-medium text-white">John Doe</p>
                            <p className="text-xs text-indigo-400">Premium</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] cursor-pointer hover:scale-105 transition-transform">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Avatar"
                                className="rounded-full bg-slate-900"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;