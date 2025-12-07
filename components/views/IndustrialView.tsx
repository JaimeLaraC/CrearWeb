import React, { useState, useEffect } from 'react';
import { ViewProps } from '../../types';
import { TriangleAlert, Hammer, ExternalLink, Cog, Power, Activity, Gauge } from 'lucide-react';

const IndustrialView: React.FC<ViewProps> = ({ data, onAuditClick }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [systemLoaded, setSystemLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setSystemLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10; // Reduced tilt for heavy feel
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        setMousePos({ x, y });
    };

    return (
        <div
            className="w-full min-h-screen bg-[#111] text-[#fbbf24] font-mono p-4 pt-16 md:pt-4 flex items-center justify-center overflow-x-hidden relative perspective-[1000px]"
            onMouseMove={handleMouseMove}
        >
            {/* Moving Hazard Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none hazard-bg"></div>

            {/* Spotlight Effect (Mouse Follower) */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x * 10 + 50}% ${mousePos.y * 10 + 50}%, rgba(251, 191, 36, 0.15), transparent 40%)`
                }}
            ></div>

            {/* Main Control Panel */}
            <div
                className="w-full max-w-2xl bg-[#1a1a1a] border-4 border-[#333] relative p-1 shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-transform duration-100 ease-out"
                style={{
                    transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
                    boxShadow: `${-mousePos.x * 2}px ${-mousePos.y * 2}px 20px rgba(0,0,0,0.8)`
                }}
            >
                {/* Inner Bezel with Bolts */}
                <div className="border-2 border-[#fbbf24] p-6 md:p-8 bg-[#222] relative overflow-hidden">

                    {/* Corner Bolts */}
                    <Bolt className="top-2 left-2" />
                    <Bolt className="top-2 right-2" />
                    <Bolt className="bottom-2 left-2" />
                    <Bolt className="bottom-2 right-2" />

                    {/* Rotating Gears Decoration */}
                    <div className="absolute -top-10 -right-10 text-[#333] opacity-50 pointer-events-none">
                        <Cog size={120} className="animate-[spin_10s_linear_infinite]" />
                    </div>
                    <div className="absolute top-10 -right-4 text-[#333] opacity-50 pointer-events-none">
                        <Cog size={60} className="animate-[spin_5s_linear_infinite_reverse]" />
                    </div>

                    {/* Header: System Status */}
                    <div className="flex justify-between items-end border-b-2 border-[#fbbf24]/30 pb-4 mb-6 relative z-10">
                        <div>
                            <div className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${systemLoaded ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                                SISTEMA: {systemLoaded ? 'ONLINE' : 'INICIANDO...'}
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">
                                PROYECTO <span className="text-[#fbbf24]">RENOVACIÓN</span>
                            </h1>
                        </div>
                        <div className="hidden md:block text-right">
                            <div className="text-[10px] text-gray-500">ID: {new Date().getTime().toString().slice(-6)}</div>
                            <Gauge className="text-[#fbbf24] ml-auto mt-1" size={24} />
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                        {/* Left: Message */}
                        <div className="md:col-span-2">
                            <div className="bg-[#111] border border-[#333] p-4 text-gray-300 text-sm md:text-base leading-relaxed relative group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#fbbf24] group-hover:h-full transition-all duration-500"></div>
                                <p>
                                    <strong className="text-white block mb-2 font-bold tracking-widest text-xs">INFORME DE INGENIERÍA:</strong>
                                    Detectada baja optimización en la infraestructura digital actual.
                                    <span className="block mt-2 text-[#fbbf24]">
                                        Agente: {data.senderName}
                                    </span>
                                    <span className="block text-gray-500 text-xs mt-1">Especialidad: Arquitectura de Software</span>
                                </p>
                            </div>
                        </div>

                        {/* Right: Diagnostics */}
                        <div className="bg-[#111] border border-[#333] p-3 font-mono text-xs flex flex-col justify-center gap-2">
                            <div className="flex justify-between items-center text-red-500">
                                <span>UX SCORE</span>
                                <span className="animate-pulse">CRÍTICO</span>
                            </div>
                            <div className="w-full bg-[#333] h-1">
                                <div className="bg-red-500 h-full w-[30%]"></div>
                            </div>

                            <div className="flex justify-between items-center text-[#fbbf24] mt-2">
                                <span>VELOCIDAD</span>
                                <span>BAJA</span>
                            </div>
                            <div className="w-full bg-[#333] h-1">
                                <div className="bg-[#fbbf24] h-full w-[45%]"></div>
                            </div>

                            <div className="flex justify-between items-center text-gray-400 mt-2">
                                <span>POTENCIAL</span>
                                <span className="text-white">100%</span>
                            </div>
                            <div className="w-full bg-[#333] h-1">
                                <div className="bg-white h-full w-full animate-[pulse_2s_infinite]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Action Zone */}
                    <div className="flex flex-col gap-3 relative z-10">
                        {/* Primary Button */}
                        <button
                            onClick={onAuditClick}
                            className="relative w-full group bg-[#fbbf24] text-black font-black uppercase py-4 px-6 flex items-center justify-between no-underline overflow-hidden hover:brightness-110 transition-all active:scale-[0.99]"
                            style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}
                        >
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="bg-black text-[#fbbf24] p-1">
                                    <Power size={20} />
                                </div>
                                <span className="tracking-widest text-lg">INICIAR RECONSTRUCCIÓN</span>
                            </div>

                            {/* Striped overlay on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity hazard-bg"></div>

                            <Activity className="relative z-10 animate-bounce" />
                        </button>

                        {/* Secondary Button */}
                        <a
                            href={data.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full border-2 border-[#333] bg-[#1a1a1a] text-gray-400 font-bold uppercase py-3 hover:text-[#fbbf24] hover:border-[#fbbf24] transition-colors flex items-center justify-center gap-2 no-underline tracking-widest text-xs group"
                        >
                            <ExternalLink size={14} className="group-hover:rotate-45 transition-transform" />
                            Acceder a Planos (Portfolio)
                        </a>
                    </div>
                </div>

                {/* Bottom Label */}
                <div className="absolute -bottom-6 left-0 w-full text-center">
                    <span className="bg-[#fbbf24] text-black text-[10px] px-2 py-0.5 font-bold">PRECAUCIÓN: ALTO IMPACTO DIGITAL</span>
                </div>
            </div>

            <style>{`
                .hazard-bg {
                    background-image: repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 10px,
                        #fbbf24 10px,
                        #fbbf24 20px
                    );
                    animation: slide 20s linear infinite;
                }
                @keyframes slide {
                    from { background-position: 0 0; }
                    to { background-position: 500px 0; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

const Bolt = ({ className }: { className?: string }) => (
    <div className={`absolute w-3 h-3 bg-[#111] rounded-full border border-gray-600 flex items-center justify-center ${className}`}>
        <div className="w-1.5 h-0.5 bg-gray-500 rotate-45"></div>
    </div>
);

export default IndustrialView;