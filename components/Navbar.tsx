import React from 'react';
import { Theme } from '../types';

interface NavbarProps {
    activeTheme: Theme;
    onThemeChange: (theme: Theme) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTheme, onThemeChange }) => {

    const getContainerStyles = () => {
        switch (activeTheme) {
            case Theme.Collage:
                return "bg-white border-2 border-black shadow-[4px_4px_0px_#000] p-2 gap-2 font-sans";
            case Theme.Editorial:
                return "bg-[#fffdfa] border-y-2 border-black px-4 py-2 gap-6 font-serif shadow-lg";
            case Theme.Industrial:
                return "bg-[#1a1a1a] border-2 border-[#fbbf24] p-1 gap-2 font-mono shadow-[0_0_20px_rgba(251,191,36,0.3)]";
            case Theme.Retro95:
                return "bg-[#c0c0c0] p-1 gap-1 font-sans shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_grey,inset_2px_2px_#fff]";
            case Theme.Sketch:
                return "bg-white border-2 border-gray-800 rounded-sm p-2 gap-4 font-architect shadow-md";
            case Theme.WindowsXP:
                return "bg-[#245DDA] p-1.5 rounded-t-lg border-b-4 border-[#E68B2C] gap-1 font-tahoma shadow-md";
            default:
                return "bg-white p-2 rounded-lg";
        }
    };

    const getItemStyles = (theme: Theme) => {
        const isActive = activeTheme === theme;

        switch (activeTheme) {
            case Theme.Collage:
                return isActive
                    ? "bg-pink-600 text-white font-black border-2 border-black -rotate-2 scale-105 shadow-[2px_2px_0px_#000]"
                    : "text-black font-bold hover:bg-yellow-300 hover:border-black border-2 border-transparent hover:-rotate-1";
            case Theme.Editorial:
                return isActive
                    ? "bg-black text-white italic px-6 py-1"
                    : "text-black hover:italic relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:left-0 after:bottom-0 after:transition-all hover:after:w-full";
            case Theme.Industrial:
                return isActive
                    ? "bg-[#fbbf24] text-black font-bold px-4 py-2"
                    : "text-[#fbbf24] uppercase tracking-widest hover:bg-[#fbbf24]/10 border border-transparent hover:border-[#fbbf24]/30 px-4 py-2";
            case Theme.Retro95:
                return isActive
                    ? "font-bold bg-[#c0c0c0] shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] translate-y-px px-3 py-1"
                    : "bg-[#c0c0c0] hover:bg-[#d4d4d4] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_grey,inset_2px_2px_#fff] active:translate-y-px active:shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] px-3 py-1";
            case Theme.Sketch:
                return isActive
                    ? "text-blue-600 font-bold underline decoration-wavy decoration-2 scale-110"
                    : "text-gray-600 hover:text-black transition-colors";
            case Theme.WindowsXP:
                return isActive
                    ? "bg-white text-black font-bold shadow-sm rounded px-4 py-1"
                    : "text-white hover:bg-[#3D85F3] hover:shadow-inner rounded px-4 py-1";
            default:
                return "";
        }
    };

    return (
        <div className="relative">
            {/* Gradient indicators for scroll on mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10 md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10 md:hidden" />

            <div className={`flex items-center justify-start md:justify-center transition-all duration-500 max-w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide ${getContainerStyles()}`}>
                {Object.values(Theme).map((theme) => (
                    <button
                        key={theme}
                        onClick={() => onThemeChange(theme)}
                        className={`nav-label whitespace-nowrap text-xs md:text-sm cursor-pointer transition-all duration-300 outline-none snap-center px-2 py-1 md:px-3 md:py-1.5 min-w-max ${getItemStyles(theme)}`}
                    >
                        {theme === Theme.Retro95 ? 'Retro 95' :
                            theme === Theme.WindowsXP ? 'Windows XP' :
                                theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Navbar;