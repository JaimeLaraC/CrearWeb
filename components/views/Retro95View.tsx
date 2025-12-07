import React, { useState, useEffect } from 'react';
import { ViewProps } from '../../types';
import { Monitor, Minus, Square, X, Globe, HardDrive, Trash2, Folder, Save, Hourglass, MousePointer } from 'lucide-react';

const Retro95View: React.FC<ViewProps> = ({ data, onAuditClick }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [progress, setProgress] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 0;
                return prev + 1;
            });
        }, 50);

        const clockTimer = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(timer);
            clearInterval(clockTimer);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Reduced sensitivity to prevent text blurring
        const x = (e.clientX / window.innerWidth - 0.5) * 4;
        const y = (e.clientY / window.innerHeight - 0.5) * 4;
        setMousePos({ x, y });
    };

    return (
        <div
            className="w-full min-h-screen bg-[#008080] font-tahoma overflow-hidden relative cursor-default select-none perspective-[2000px] pt-14 md:pt-0"
            onMouseMove={handleMouseMove}
        >
            {/* Desktop Icons (Parallax Background) - Hidden on mobile */}
            <div className="hidden md:grid absolute inset-0 p-4 grid-cols-1 gap-8 pointer-events-none content-start text-white text-center text-xs w-24 font-tahoma">
                <DesktopIcon label="Mi PC" icon={<HardDrive size={32} />} x={mousePos.x * -2} y={mousePos.y * -2} />
                <DesktopIcon label="Papelera" icon={<Trash2 size={32} />} x={mousePos.x * -1.5} y={mousePos.y * -1.5} />
                <DesktopIcon label="Mis Proyectos" icon={<Folder size={32} />} x={mousePos.x * -1} y={mousePos.y * -1} />
                <DesktopIcon label="Internet" icon={<Globe size={32} />} x={mousePos.x * -0.5} y={mousePos.y * -0.5} />
            </div>

            {/* "Clippy" Style Assistant */}
            <div
                className="absolute right-8 top-20 w-48 z-20 transition-transform duration-300 ease-out hidden md:block"
                style={{ transform: `translate(${mousePos.x * -3}px, ${mousePos.y * -3}px)` }}
            >
                <div className="bg-[#ffffe1] border border-black p-2 rounded shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mb-4 text-[11px] leading-tight font-serif relative text-black">
                    <p>Parece que intentas mejorar tu presencia digital. <br /><strong>¿Necesitas ayuda?</strong></p>
                    <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#ffffe1] border-b border-r border-black transform rotate-45"></div>
                </div>
                <div className="w-12 h-12 mx-auto animate-bounce text-yellow-400">
                    <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-black relative">
                        <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
                        <div className="absolute top-2 right-2 w-1 h-1 bg-black rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-2 border-b-2 border-black rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Main Window Container */}
            <div className="flex items-center justify-center w-full min-h-[calc(100vh-3.5rem)] md:min-h-screen pb-10">
                <div
                    className="bg-[#c0c0c0] p-1 shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_grey,inset_2px_2px_#fff] max-w-lg w-full relative transition-transform duration-75 ease-out will-change-transform"
                    style={{
                        transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                    }}
                >

                    {/* Title Bar */}
                    <div className="bg-[#000080] px-2 py-0.5 flex justify-between items-center mb-1">
                        <div className="text-white font-bold text-xs tracking-wide flex items-center gap-2 font-tahoma">
                            <Monitor size={14} />
                            Internet_Explorer.exe
                        </div>
                        <div className="flex gap-1">
                            <Button95><Minus size={10} /></Button95>
                            <Button95><Square size={8} /></Button95>
                            <Button95 isClose><X size={12} /></Button95>
                        </div>
                    </div>

                    {/* Menu Bar */}
                    <div className="flex px-1 pb-1 text-[11px] mb-1 border-b border-gray-400 shadow-sm text-black cursor-default font-tahoma">
                        <MenuItem firstLetter="A" label="rchivo" />
                        <MenuItem firstLetter="E" label="dición" />
                        <MenuItem firstLetter="V" label="er" />
                        <MenuItem firstLetter="F" label="avoritos" />
                        <MenuItem firstLetter="A" label="yuda" />
                    </div>

                    {/* Content */}
                    <div className="bg-white p-4 md:p-6 border border-gray-500 shadow-[inset_2px_2px_#0a0a0a] relative overflow-hidden h-auto md:h-[340px] flex flex-col">

                        {/* Marquee Effect */}
                        <div className="bg-black text-[#00ff00] font-mono text-sm py-1 px-2 mb-4 overflow-hidden whitespace-nowrap border-2 border-gray-400 border-inset shrink-0">
                            <div className="animate-marquee inline-block font-bold">
                                *** BIENVENIDO A LA WEB DEL FUTURO ***
                                OPTIMIZADO PARA NETSCAPE NAVIGATOR ***
                                SU SITIO WEB NECESITA UNA ACTUALIZACIÓN ***
                            </div>
                        </div>

                        <div className="flex gap-4 mb-4 font-serif text-black">
                            <div className="flex flex-col gap-2 items-center shrink-0">
                                <div className="w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center">
                                    <Globe size={40} className="text-blue-700" />
                                </div>
                                <span className="text-[10px] text-gray-500 font-sans">200x200.gif</span>
                            </div>

                            <div className="flex-1">
                                <h1 className="text-2xl font-bold mb-2 text-black leading-none">Hola,</h1>
                                <p className="text-[15px] leading-5 text-black mb-2">
                                    Soy <strong className="bg-blue-800 text-white px-1">{data.senderName}</strong>.
                                    He detectado que su sitio web necesita el plugin "Modernidad 2.0".
                                </p>
                                <ul className="list-disc pl-5 text-sm mb-2 font-sans text-gray-800">
                                    <li>HTML5 Compatible</li>
                                    <li>Carga Ultrarrápida</li>
                                    <li>Sin tablas anidadas</li>
                                </ul>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4 mt-auto">
                            <div className="flex justify-between text-xs mb-1 font-tahoma text-black">
                                <span>Instalando éxito...</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="w-full h-5 bg-white border border-gray-600 shadow-[inset_1px_1px_2px_#000] relative p-[2px]">
                                <div
                                    className="h-full bg-[#000080]"
                                    style={{ width: `${progress}%` }}
                                >
                                    {/* Blocks inside bar */}
                                    <div className="w-full h-full flex gap-[2px]">
                                        {Array.from({ length: 20 }).map((_, i) => (
                                            <div key={i} className="flex-1 bg-[#000080] border-r border-[#000080] opacity-50"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-t border-gray-400 mb-4" />

                        <div className="flex justify-center gap-4 flex-wrap font-tahoma">
                            <button
                                onClick={onAuditClick}
                                className="group bg-[#c0c0c0] text-black text-xs font-bold px-4 py-2 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:bg-gray-300 no-underline flex items-center gap-2 hover:bg-[#d4d4d4]"
                            >
                                <Save size={14} />
                                <span><span className="underline">A</span>cceptar Oferta</span>
                            </button>
                            <a
                                href={data.portfolioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#c0c0c0] text-black text-xs px-4 py-2 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:bg-gray-300 no-underline flex items-center gap-2 hover:bg-[#d4d4d4]"
                            >
                                <Hourglass size={14} className="group-hover:animate-spin" />
                                <span>Ver Portfolio</span>
                            </a>
                        </div>
                    </div>

                    {/* Status Bar */}
                    <div className="mt-1 px-2 py-0.5 text-[11px] text-gray-600 shadow-[inset_1px_1px_#0a0a0a] flex justify-between cursor-default bg-[#c0c0c0] font-tahoma">
                        <span className="flex items-center gap-1"><MousePointer size={10} /> Objeto(s): 1</span>
                        <span>{12 + Math.floor(progress / 10)}KB</span>
                    </div>
                </div>
            </div>

            {/* Taskbar */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-[#c0c0c0] border-t-2 border-white flex items-center px-1 gap-1 shadow-[0_-1px_0_#dfdfdf] font-tahoma">
                <button className="flex items-center gap-1 px-2 py-0.5 font-bold text-xs bg-[#c0c0c0] shadow-[inset_2px_2px_#fff,inset_-2px_-2px_#000] active:shadow-[inset_2px_2px_#000,inset_-2px_-2px_#fff] border border-gray-400 active:bg-gray-300 mr-2 text-black">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Windows_logo_and_wordmark_-_1995-2001.svg/1200px-Windows_logo_and_wordmark_-_1995-2001.svg.png" className="w-3 h-auto" alt="win" />
                    Inicio
                </button>
                <div className="h-5 w-[2px] border-l border-gray-400 border-r border-white mx-1"></div>
                <div className="flex-1 flex gap-1 h-6">
                    <div className="bg-[#d4d4d4] px-4 py-0.5 text-xs shadow-[inset_1px_1px_#000,inset_-1px_-1px_#fff] font-bold flex items-center gap-2 bg-gradient-to-r from-gray-300 to-gray-200 text-black w-40">
                        <Monitor size={12} />
                        <span className="truncate">Explorador de Internet</span>
                    </div>
                </div>
                <div className="bg-[#c0c0c0] shadow-[inset_1px_1px_#000,inset_-1px_-1px_#fff] px-2 py-0.5 text-xs border border-gray-400 text-black">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        </div>
    );
};

const MenuItem: React.FC<{ firstLetter: string, label: string }> = ({ firstLetter, label }) => (
    <div className="px-2 hover:bg-[#000080] hover:text-white cursor-pointer select-none">
        <span className="underline">{firstLetter}</span>{label}
    </div>
);

const Button95: React.FC<{ children: React.ReactNode, isClose?: boolean }> = ({ children, isClose }) => (
    <button className={`bg-[#c0c0c0] w-4 h-4 flex items-center justify-center shadow-[inset_1px_1px_#fff,inset_-1px_-1px_#000] active:shadow-[inset_1px_1px_#000,inset_-1px_-1px_#fff] border border-gray-400 p-[1px] ${isClose ? 'active:bg-red-700' : 'active:bg-gray-400'} text-black`}>
        {children}
    </button>
);

const DesktopIcon: React.FC<{ label: string, icon: React.ReactNode, x: number, y: number }> = ({ label, icon, x, y }) => (
    <div
        className="flex flex-col items-center gap-1 group cursor-pointer transition-transform duration-100 ease-out"
        style={{ transform: `translate(${x}px, ${y}px)` }}
    >
        <div className="group-hover:opacity-80 drop-shadow-lg">{icon}</div>
        <span className="bg-[#008080] group-hover:bg-[#000080] px-1 border border-dotted border-transparent group-hover:border-yellow-200 shadow-sm">{label}</span>
    </div>
);

export default Retro95View;