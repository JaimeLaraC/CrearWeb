import React, { useState, useEffect } from 'react';
import { ArrowRight, Grid, Maximize } from 'lucide-react';
import { ViewProps } from '../../types';

const SwissView: React.FC<ViewProps> = ({ data, onAuditClick }) => {
    // Target position (where mouse is)
    const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
    // Current position (for smooth animation/lerp)
    const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

    // Smooth animation loop
    useEffect(() => {
        let animationFrameId: number;

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const animate = () => {
            setCurrentPos(prev => ({
                x: lerp(prev.x, targetPos.x, 0.08), // 0.08 = Smoothness factor
                y: lerp(prev.y, targetPos.y, 0.08)
            }));
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [targetPos]);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Normalized coordinates (-1 to 1)
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setTargetPos({ x, y });
    };

    return (
        <div
            className="w-full min-h-screen bg-[#EAEAEA] text-[#111] font-sans relative flex flex-col items-center justify-center py-24 px-4 perspective-2000 cursor-none overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* --- GLOBAL CROSSHAIR CURSOR (Architect Style) --- */}
            <CrosshairCursor />

            {/* Background Pattern - Fixed to viewport */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        transform: `translate(${currentPos.x * -15}px, ${currentPos.y * -15}px)` // Subtle parallax
                    }}
                />
            </div>

            {/* --- MAIN FLOATING CARD --- */}
            <div
                className="relative z-20 w-full max-w-[650px] h-auto min-h-[600px] md:min-h-[800px] bg-[#F4F4F4] shadow-[0_30px_60px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden group border border-white/50"
                style={{
                    transform: `rotateY(${currentPos.x * 8}deg) rotateX(${currentPos.y * -8}deg) translateZ(0px)`,
                }}
            >
                {/* Dynamic Lighting/Gradient Orb inside card */}
                <div
                    className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#ff3b30] to-transparent rounded-full blur-[80px] opacity-10 mix-blend-multiply pointer-events-none transition-transform duration-75"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(calc(-50% + ${currentPos.x * 200}px), calc(-50% + ${currentPos.y * 200}px))`
                    }}
                />

                {/* Decorative Side Strip with measurements */}
                <div className="absolute top-0 left-0 w-6 md:w-8 h-full bg-[#111] z-30 flex flex-col items-center py-4 gap-8 md:gap-12 text-[#444] text-[8px] md:text-[9px] font-mono border-r border-gray-600">
                    <div className="rotate-90 origin-center whitespace-nowrap tracking-widest text-white text-[7px] md:text-[9px]">FIG. 2025-A</div>
                    <div className="flex-1 w-px bg-gray-700/50 relative">
                        <div className="absolute top-[20%] w-2 h-px bg-white left-1/2 -translate-x-1/2" />
                        <div className="absolute top-[50%] w-2 h-px bg-white left-1/2 -translate-x-1/2" />
                        <div className="absolute top-[80%] w-2 h-px bg-white left-1/2 -translate-x-1/2" />
                    </div>
                    <div className="text-white">CH</div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-4 pl-10 md:p-8 md:pl-16 flex flex-col relative h-full">

                    {/* Header: Kinetic Typography */}
                    <div className="relative z-10 mb-4 md:mb-8 border-b-4 border-black pb-4 md:pb-8 pt-2 md:pt-4">
                        <div className="absolute top-0 right-0 font-mono text-[10px] md:text-xs tracking-widest bg-black text-white px-2 py-0.5">
                            GRID SYSTEM V2.0
                        </div>

                        {/* Kinetic Layers: Text moves in opposite directions */}
                        <h1 className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mix-blend-darken">
                            <span
                                className="block"
                                style={{ transform: `translateX(${currentPos.x * -20}px)` }}
                            >
                                SWISS
                            </span>
                            <span
                                className="block text-transparent stroke-text"
                                style={{ transform: `translateX(${currentPos.x * 20}px)` }}
                            >
                                STYLE
                            </span>
                            <span
                                className="block text-[#FF3B30]"
                                style={{ transform: `translateX(${currentPos.x * -10}px)` }}
                            >
                                DESIGN
                            </span>
                        </h1>
                    </div>

                    {/* Middle: Content Grid */}
                    <div className="grid grid-cols-12 gap-4 flex-1 relative">
                        {/* Red visual anchor */}
                        <div className="col-span-1 h-full w-2 bg-[#FF3B30] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full bg-black h-1/3 animate-[slideDown_3s_ease-in-out_infinite]" />
                        </div>

                        <div className="col-span-11 flex flex-col justify-between">
                            <div className="space-y-2 md:space-y-4">
                                <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest flex items-center gap-2">
                                    <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                                    Objetivo del Proyecto
                                </h3>
                                <p className="text-base sm:text-lg md:text-2xl font-medium leading-tight text-justify pr-2 md:pr-4">
                                    "La perfección no se alcanza cuando no hay nada más que añadir, sino cuando <span className="bg-[#FF3B30] text-white px-1">no hay nada más que quitar</span>."
                                </p>
                                <p className="text-sm text-gray-500 font-mono mt-2">
                                    // AGENTE: {data.senderName}<br />
                                    // ESTADO: OPERATIVO
                                </p>
                            </div>

                            {/* Interactive Geometric Shape */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none mix-blend-multiply hidden md:block">
                                <Maximize size={160} strokeWidth={0.5} style={{ transform: `rotate(${currentPos.x * 90}deg)` }} />
                            </div>
                        </div>
                    </div>

                    {/* Footer: Expandable Actions */}
                    <div className="mt-4 md:mt-8 grid grid-cols-2 gap-0 border-t border-black">
                        <button
                            onClick={onAuditClick}
                            className="group relative h-14 md:h-20 border-r border-black flex items-center justify-center overflow-hidden hover:bg-[#FF3B30] transition-colors duration-300 w-full"
                        >
                            <span className="relative z-10 font-bold text-sm md:text-xl tracking-tight group-hover:text-white transition-colors flex items-center gap-1 md:gap-2">
                                CONTACTAR <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </span>
                            {/* Hover Reveal Effect */}
                            <div className="absolute inset-0 bg-[#FF3B30] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>

                        <a
                            href={data.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative h-14 md:h-20 flex items-center justify-center overflow-hidden transition-colors duration-300"
                        >
                            <span className="relative z-10 font-bold text-sm md:text-xl tracking-tight group-hover:text-white transition-colors flex items-center gap-1 md:gap-2">
                                PORTFOLIO <Grid className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            </span>
                            {/* Hover Reveal Effect - Black */}
                            <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating Info Elements (Outside Card) */}
            <div className="absolute bottom-10 left-10 hidden md:block text-[10px] font-mono text-gray-400 space-y-1">
                <div>COORD X: {currentPos.x.toFixed(3)}</div>
                <div>COORD Y: {currentPos.y.toFixed(3)}</div>
                <div>ZOOM: 100%</div>
            </div>

            <style>{`
                .perspective-2000 { perspective: 2000px; }
                .stroke-text {
                    -webkit-text-stroke: 2px #000;
                    color: transparent;
                }
                @keyframes slideDown {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(200%); }
                }
            `}</style>
        </div>
    );
};

// --- ARCHITECT CROSSHAIR CURSOR COMPONENT ---
const CrosshairCursor = () => {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference">
            {/* Vertical Line */}
            <div
                className="absolute top-0 bottom-0 w-px bg-red-500/80"
                style={{ left: pos.x }}
            />
            {/* Horizontal Line */}
            <div
                className="absolute left-0 right-0 h-px bg-red-500/80"
                style={{ top: pos.y }}
            />
            {/* Coordinates Badge */}
            <div
                className="absolute text-[9px] font-mono text-red-500 bg-white/10 px-1 backdrop-blur-sm"
                style={{ left: pos.x + 10, top: pos.y + 10 }}
            >
                {Math.round(pos.x)}, {Math.round(pos.y)}
            </div>

            {/* Center Dot */}
            <div
                className="absolute w-1.5 h-1.5 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{ left: pos.x, top: pos.y }}
            />
        </div>
    );
};

export default SwissView;
