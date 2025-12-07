import React, { useState } from 'react';
import { ViewProps } from '../../types';
import { Scissors, ExternalLink, Zap, Sparkles } from 'lucide-react';

const CollageView: React.FC<ViewProps> = ({ data, onAuditClick }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        // Calculate normalized coordinates (-1 to 1) for parallax
        // We use a divisor to dampen the effect so it's not too dizzying
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMousePos({ x, y });
    };

    return (
        <div
            className="w-full min-h-screen bg-yellow-400 p-4 md:p-6 pt-16 md:pt-6 flex items-center justify-center overflow-hidden font-sans relative perspective-container"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Background Pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-75 ease-out"
                style={{
                    backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
                    backgroundSize: '30px 30px',
                    transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
                }}
            />

            <div className="w-full max-w-lg relative">
                {/* Background Shapes with Parallax (Back Layer) - Hidden on mobile */}
                <div
                    className="hidden md:block absolute -top-16 -left-16 w-48 h-48 bg-black transform -rotate-12 transition-transform duration-200 ease-out"
                    style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px) rotate(-12deg)` }}
                ></div>
                <div
                    className="hidden md:block absolute top-20 -right-16 w-40 h-72 bg-pink-500 transform rotate-6 transition-transform duration-200 ease-out shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
                    style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px) rotate(6deg)` }}
                ></div>

                {/* Decorative Stickers */}
                <div
                    className="absolute -top-20 right-0 z-0 text-blue-600 animate-[spin_8s_linear_infinite] pointer-events-none transition-transform duration-300 ease-out"
                    style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px) rotate(${mousePos.x * 20}deg)` }}
                >
                    <Zap size={80} fill="currentColor" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]" />
                </div>

                {/* Main Content Layer */}
                <div className="relative z-10 animate-float">

                    {/* Header Card */}
                    <div
                        className="bg-white p-4 mb-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black max-w-md mx-auto relative group transition-transform duration-100 ease-out hover:scale-105"
                        style={{
                            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) rotate(-2deg)`
                        }}
                    >
                        {/* Tape Visual Effect */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-[2px] border-l border-r border-white/50 transform -rotate-1 shadow-sm z-30 pointer-events-none"></div>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-none text-center cursor-default">
                            <span className="inline-block mx-1 text-black -rotate-3 hover:rotate-6 transition-transform hover:scale-110 hover:text-blue-600">Mejora</span>
                            <span className="inline-block mx-1 text-pink-600 rotate-2 hover:-rotate-6 transition-transform hover:scale-110">Tu</span>
                            <span className="inline-block mx-1 text-black rotate-2 hover:rotate-6 transition-transform hover:scale-110 hover:text-green-600">Presencia</span>
                            <span className="inline-block mx-1 text-pink-600 -rotate-3 hover:-rotate-6 transition-transform hover:scale-110">Digital</span>
                        </h1>

                        {/* Sparkle Decoration */}
                        <Sparkles className="absolute -bottom-6 -left-6 text-yellow-300 z-30 drop-shadow-[2px_2px_0px_#000] animate-pulse" size={42} fill="currentColor" />
                    </div>

                    {/* Content Body Card */}
                    <div
                        className="bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black mb-8 relative transition-transform duration-100 ease-out hover:rotate-1"
                        style={{
                            clipPath: "polygon(2% 0%, 98% 2%, 100% 98%, 0% 100%)",
                            transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px) rotate(1deg)`
                        }}
                    >
                        {/* Fake Pins/Screws */}
                        <div className="absolute -right-1 top-1/2 w-3 h-3 rounded-full bg-black"></div>
                        <div className="absolute -left-1 top-1/2 w-3 h-3 rounded-full bg-black"></div>

                        <p className="font-bold text-lg leading-6 font-mono bg-black text-white inline box-decoration-clone px-2 py-1 transform hover:skew-x-[-2deg] transition-transform block selection:bg-pink-500 selection:text-black">
                            Hola, he notado que vuestro negocio no tiene una web moderna. Soy {data.senderName},
                            ingeniero de software, y puedo crearos una web rápida y accesible que convierta visitantes en clientes.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <button
                            onClick={onAuditClick}
                            className="group relative bg-blue-600 text-white font-black text-lg px-6 py-3 rounded-full shadow-[4px_4px_0px_#000] border-2 border-black flex items-center gap-2 no-underline hover:bg-blue-500 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] transition-all hover:scale-105"
                        >
                            <Scissors className="transform rotate-90 group-hover:rotate-180 transition-transform duration-500" size={20} />
                            <span>Auditoría Gratuita</span>
                        </button>

                        {/* Portfolio Button (Sticker Style) */}
                        <a
                            href={data.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-green-500 text-black font-black text-lg px-6 py-3 transform rotate-3 hover:rotate-0 hover:scale-110 transition-all shadow-[4px_4px_0px_#000] border-2 border-black flex items-center gap-2 no-underline hover:bg-green-400"
                            style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0% 100%)" }}
                        >
                            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Mi Web Personal
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .perspective-container { perspective: 1000px; }
            `}</style>
        </div>
    );
};

export default CollageView;