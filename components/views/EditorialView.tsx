import React, { useState } from 'react';
import { ViewProps } from '../../types';
import { Newspaper, ArrowUpRight, Scissors } from 'lucide-react';

const EditorialView: React.FC<ViewProps> = ({ data }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20; // Tilt range
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setMousePos({ x, y });
    };

    return (
        <div
            className="w-full min-h-screen bg-[#e3ddd3] text-black font-serif p-4 md:p-8 pt-16 md:pt-8 flex items-center justify-center overflow-x-hidden perspective-[1000px]"
            onMouseMove={handleMouseMove}
        >
            {/* Background Texture (Desk) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#a39d93 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            {/* The Newspaper Sheet */}
            <div
                className="bg-[#fffdfa] w-full max-w-lg p-6 md:p-10 shadow-[20px_20px_60px_#bebab5,-20px_-20px_60px_#ffffff] border border-gray-200 relative transition-transform duration-100 ease-out origin-center"
                style={{
                    transform: `rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg) translateZ(20px)`
                }}
            >
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise z-0 mix-blend-multiply"></div>

                {/* Content Container */}
                <div className="relative z-10">

                    {/* Header Section */}
                    <div className="border-b-4 border-black pb-4 mb-6 text-center">
                        <div className="uppercase font-sans font-black text-2xl sm:text-4xl md:text-5xl tracking-tighter mb-1 relative inline-block">
                            El Semanal Web
                            {/* Hidden easter egg highlighter */}
                            <div className="absolute top-1/2 left-0 w-full h-4 bg-yellow-300 -z-10 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity mix-blend-multiply transform -rotate-1 skew-x-12"></div>
                        </div>
                        <div className="flex justify-between border-t border-b border-black py-1 mt-2 text-[10px] font-sans uppercase tracking-widest">
                            <span>Vol. {new Date().getMonth() + 1}</span>
                            <span>{new Date().getFullYear()} Edition</span>
                            <span>Exclusivo para su negocio</span>
                        </div>
                    </div>

                    {/* Main Article */}
                    <div className="flex flex-col gap-4 relative">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[0.9] text-black mb-2">
                            ¿Tu Negocio Necesita <span className="relative inline-block cursor-none group">
                                un Cambio?
                                {/* Red Circle SVG Animation */}
                                <svg className="absolute -top-4 -left-2 w-[110%] h-[150%] pointer-events-none text-red-600 opacity-80 animate-[draw_1s_ease-out_forwards]" viewBox="0 0 100 60" preserveAspectRatio="none">
                                    <path d="M5,30 Q30,5 90,20 Q95,45 60,55 Q10,50 5,30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <div className="flex gap-4 items-start py-2">
                            {/* Vertical Line / Drop Cap Column */}
                            <div className="hidden md:block w-px bg-gray-300 h-40 shrink-0 relative overflow-visible">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-black/10"></div>
                            </div>

                            <div className="relative">
                                <p className="text-lg leading-7 text-gray-800 text-justify font-medium">
                                    <span className="float-left text-6xl font-black mr-3 mt-[-10px] font-sans">H</span>
                                    ola, en el mundo digital de hoy, la velocidad no es un lujo, es una necesidad para destacar.
                                    Soy <strong className="relative inline-block px-1">
                                        {data.senderName}
                                        <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200/50 -z-10 -rotate-1"></span>
                                    </strong>, ingeniero de software especializado en crear experiencias web que no solo se ven bien, sino que venden.
                                </p>

                                {/* Highlighter mark reacting to hover */}
                                <p className="mt-4 text-gray-600 italic text-sm border-l-2 border-red-500 pl-4">
                                    "Una web lenta es una oportunidad perdida."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Divider */}
                    <div className="flex items-center gap-4 my-8 opacity-50">
                        <div className="h-px bg-black flex-1"></div>
                        <Newspaper size={16} />
                        <div className="h-px bg-black flex-1"></div>
                    </div>

                    {/* Interactive Footer / Coupon Area */}
                    <div className="flex flex-col md:flex-row gap-6 items-end justify-between mt-4">

                        {/* The Coupon */}
                        <a
                            href={`mailto:${data.senderEmail}`}
                            className="group relative border-2 border-dashed border-black p-4 flex-1 w-full hover:bg-yellow-50 transition-colors cursor-pointer no-underline"
                        >
                            <div className="absolute -top-3 -left-3 bg-[#fffdfa] p-1 text-black rotate-[-45deg] group-hover:rotate-0 transition-transform">
                                <Scissors size={20} />
                            </div>
                            <p className="font-sans text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">CUPÓN DE OFERTA</p>
                            <p className="font-sans font-black text-xl uppercase leading-none group-hover:scale-105 transition-transform origin-left text-black">
                                Auditoría<br />Gratuita
                            </p>
                            <p className="text-[10px] mt-2 font-mono text-gray-500">Válido para su sitio web</p>
                        </a>

                        {/* Sticky Note for Portfolio */}
                        <div className="relative transform rotate-3 hover:rotate-6 transition-transform duration-300">
                            <div className="bg-yellow-200 shadow-md p-4 w-40 font-architect text-sm leading-tight text-gray-800 relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-400/50 opacity-50 blur-[1px]"></div> {/* Tape-ish shadow */}
                                <p className="font-bold mb-2">¡Mira mis trabajos anteriores!</p>
                                <a
                                    href={data.portfolioUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 font-bold text-blue-800 hover:underline decoration-wavy decoration-1"
                                >
                                    Ver Portfolio <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
                @keyframes draw {
                    from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
                    to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
                }
                .bg-noise {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }
            `}</style>
        </div>
    );
};

export default EditorialView;