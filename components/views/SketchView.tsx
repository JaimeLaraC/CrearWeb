import React, { useState } from 'react';
import { ViewProps } from '../../types';
import { PenTool, ArrowUpRight, CheckCircle } from 'lucide-react';

const SketchView: React.FC<ViewProps> = ({ data, onAuditClick }) => {
    // Parallax state
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        setMousePos({ x, y });
    };

    return (
        <div
            className="w-full min-h-screen bg-[#fdfdfd] text-gray-800 font-architect overflow-x-hidden relative selection:bg-yellow-200 pt-14 md:pt-0"
            onMouseMove={handleMouseMove}
        >
            {/* Grid Background (Blueprint style) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-15"
                style={{
                    backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            ></div>

            {/* Coffee Stain Decoration */}
            <div className="absolute top-[-40px] right-[-40px] w-64 h-64 rounded-full border-[16px] border-[#6f4e37] opacity-5 blur-[2px] pointer-events-none mix-blend-multiply"></div>

            <div className="w-full min-h-screen flex items-start md:items-center justify-center p-4 pt-24 md:p-4">
                <div
                    className="relative w-full max-w-5xl bg-white shadow-[10px_10px_20px_rgba(0,0,0,0.1)] p-8 md:p-12 transition-transform duration-100 ease-out border border-gray-200"
                    style={{
                        transform: `rotate(-1deg) translate(${mousePos.x}px, ${mousePos.y}px)`,
                        borderRadius: '2px 4px 2px 200px / 200px 4px 2px 2px' // Paper curl effect
                    }}
                >
                    {/* Paper Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise z-0 mix-blend-multiply"></div>

                    {/* Header: Project Name */}
                    <div className="flex justify-between items-start mb-8 border-b-2 border-gray-800 pb-2 border-dashed" style={{ borderRadius: "100% 0 0 0 / 20px 0 0 0" }}>
                        <div>
                            <span className="text-blue-600 text-sm uppercase tracking-widest font-sans font-bold">Boceto Inicial v1.0</span>
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-1 text-black">
                                Proyecto: Rediseño Web
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-24 h-24 border-4 border-red-500 rounded-full flex items-center justify-center transform rotate-12 opacity-90 shadow-sm mask-ink">
                                <span className="text-red-500 font-bold text-lg uppercase text-center leading-none transform -rotate-12">Alta<br />Prioridad</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Column 1: The Pitch (Text) */}
                        <div className="flex flex-col justify-center space-y-6 relative z-10">
                            <div>
                                <h2 className="text-2xl font-bold relative inline-block mb-2">
                                    Diagnóstico Actual:
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-300 transform -skew-x-12 -z-10"></span>
                                </h2>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    "La web actual es solo un boceto de lo que podría ser."
                                </p>
                            </div>

                            <p className="text-lg text-gray-800">
                                Hola, soy <strong>{data.senderName}</strong>. He trazado un plan para convertir su presencia digital en una máquina de ventas.
                                Mi propuesta incluye:
                            </p>

                            <ul className="space-y-3 pl-2">
                                {['Diseño Responsive (Móvil)', 'Velocidad de Carga < 1s', 'SEO Estructural'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg group">
                                        <CheckCircle className="text-green-600 group-hover:scale-110 transition-transform" size={24} strokeWidth={2.5} />
                                        <span className="border-b border-gray-300 border-dashed pb-1 w-full">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 flex flex-wrap gap-4">
                                <button
                                    onClick={onAuditClick}
                                    className="px-6 py-3 bg-gray-900 text-white text-xl hover:bg-blue-600 transition-colors transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 no-underline group"
                                    style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                                >
                                    <PenTool size={20} className="group-hover:rotate-12 transition-transform" />
                                    Empezar Proyecto
                                </button>
                                <a
                                    href={data.portfolioUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border-2 border-gray-800 text-xl hover:bg-gray-50 transition-colors flex items-center gap-2 no-underline text-gray-800"
                                    style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                                >
                                    Ver Portfolio <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: The Wireframe Visual */}
                        <div className="relative pt-6 lg:pt-0">
                            {/* Hand-drawn Arrow pointing to visual */}
                            <div className="absolute -left-12 top-10 hidden lg:block text-gray-400 transform rotate-12">
                                <svg width="80" height="60" viewBox="0 0 60 60">
                                    <path d="M0,40 Q30,0 60,30" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
                                    <defs>
                                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                                        </marker>
                                    </defs>
                                </svg>
                                <span className="text-sm absolute -top-4 left-4 -rotate-12 text-blue-500 font-bold">Plan</span>
                            </div>

                            {/* The Wireframe Box */}
                            <div
                                className="border-2 border-gray-800 p-4 bg-white transform rotate-2 shadow-xl relative"
                                style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                            >
                                {/* Tape at top */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 transform -rotate-1 shadow-sm z-20"></div>

                                {/* Browser Bar */}
                                <div className="border-b-2 border-gray-800 pb-2 mb-4 flex gap-2 items-center">
                                    <div className="w-3 h-3 rounded-full border border-gray-800 bg-white"></div>
                                    <div className="w-3 h-3 rounded-full border border-gray-800 bg-white"></div>
                                    <div className="w-full border-b border-gray-800 border-dotted h-3 relative">
                                        <span className="absolute -top-3 left-2 text-xs bg-white px-1 text-gray-400">tu-sitio-web.com</span>
                                    </div>
                                </div>

                                {/* Wireframe Content */}
                                <div className="flex flex-col gap-4">
                                    {/* Hero */}
                                    <div className="border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center min-h-[140px] relative bg-gray-50 rounded">
                                        <div className="absolute -right-8 -top-4 bg-yellow-200 text-xs p-2 shadow transform rotate-6 border border-gray-800 text-black font-bold z-10" style={{ maxWidth: '120px' }}>
                                            ¡Aquí va tu propuesta de valor!
                                        </div>
                                        <div className="w-12 h-12 bg-gray-200 rounded-full mb-3 border border-gray-400 flex items-center justify-center text-gray-400 text-xs">Logo</div>
                                        <div className="w-3/4 h-3 bg-gray-300 mb-2 rounded"></div>
                                        <div className="w-1/2 h-3 bg-gray-300 rounded"></div>

                                        <div className="mt-4 px-4 py-1 border-2 border-black rounded-full text-xs font-bold bg-black text-white transform -rotate-1">
                                            Comprar Ahora
                                        </div>
                                    </div>

                                    {/* Sub Content */}
                                    <div className="grid grid-cols-3 gap-2">
                                        {[1, 2, 3].map(n => (
                                            <div key={n} className="h-16 border border-gray-300 p-1 flex flex-col items-center justify-center gap-1 rounded">
                                                <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                                                <div className="w-full h-1 bg-gray-200"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Hand-written correction */}
                                    <div className="absolute -bottom-6 -right-4 text-red-600 font-bold transform -rotate-6 text-sm">
                                        <span className="text-xl">↖</span> Aumenta conversión
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-8 text-gray-400 text-xs font-sans tracking-widest opacity-50">
                        REF: SKETCH-{new Date().getFullYear()}-B
                    </div>
                </div>
            </div>

            <style>{`
                .bg-noise {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }
            `}</style>
        </div>
    );
};

export default SketchView;