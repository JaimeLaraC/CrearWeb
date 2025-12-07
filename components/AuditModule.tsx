import React, { useState, useEffect } from 'react';
import { Theme, ClientData } from '../types';
import { X, CheckCircle2, AlertTriangle, MessageCircle, Mail, PenTool, Activity, Scissors, Stamp } from 'lucide-react';

interface AuditModuleProps {
    isOpen: boolean;
    onClose: () => void;
    theme: Theme;
    data: ClientData;
}

const AuditModule: React.FC<AuditModuleProps> = ({ isOpen, onClose, theme, data }) => {
    const [scanStep, setScanStep] = useState(0);
    const [scanProgress, setScanProgress] = useState(0);

    // Reset state when opening
    useEffect(() => {
        if (isOpen) {
            setScanStep(0);
            setScanProgress(0);
            // 2000ms total / 100 steps = 20ms per step
            const interval = setInterval(() => {
                setScanProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setScanStep(3); // Finished
                        return 100;
                    }
                    return prev + 1;
                });
            }, 20); // 2 seconds total duration
            return () => clearInterval(interval);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    // --- SHARED DATA GENERATORS ---
    const whatsappUrl = `https://wa.me/34722683336?text=${encodeURIComponent("Hola, quiero arreglar los errores de mi web.")}`;
    const mailtoUrl = `mailto:jailacont2003@gmail.com?subject=${encodeURIComponent("Auditoría Web")}&body=${encodeURIComponent("Hola, me interesa el informe.")}`;

    // --- THEME SPECIFIC RENDERERS ---

    // 1. COLLAGE THEME (Pop art, brutalist, colorful - MATCHING SCREENSHOTS)
    if (theme === Theme.Collage) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans">
                <div className="absolute inset-0 bg-yellow-400/90 backdrop-blur-sm" onClick={onClose} />
                <div className="relative w-full max-w-md bg-white border-4 border-black shadow-[16px_16px_0px_#000] p-8 transform -rotate-1 transition-all animate-[slideUp_0.3s_ease-out]">
                    <button onClick={onClose} className="absolute -top-5 -right-5 bg-[#FF00FF] text-white border-4 border-black w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform shadow-[4px_4px_0px_#000] z-50">
                        <X size={28} strokeWidth={4} />
                    </button>

                    {scanStep < 3 ? (
                        <div className="text-center">
                            <div className="inline-block bg-black text-white px-6 py-2 text-2xl font-black uppercase transform -rotate-2 mb-8 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                                Auditoría en Curso
                            </div>

                            <div className="border-4 border-black p-1 bg-gray-100 mb-6 h-10 relative shadow-[4px_4px_0px_#000]">
                                <div className="h-full bg-[#FF0099]" style={{ width: `${scanProgress}%` }} />
                            </div>

                            <div className="text-left font-black text-xl space-y-4 border-t-4 border-black pt-6">
                                <div className={`flex items-center gap-3 ${scanProgress > 20 ? 'text-[#00C300]' : 'text-gray-300'}`}>
                                    {scanProgress > 20 ? <CheckCircle2 size={28} strokeWidth={4} /> : <div className="w-7" />}
                                    <span>Estructura HTML</span>
                                </div>
                                <div className={`flex items-center gap-3 ${scanProgress > 60 ? 'text-[#00C300]' : 'text-gray-300'}`}>
                                    {scanProgress > 60 ? <CheckCircle2 size={28} strokeWidth={4} /> : <div className="w-7" />}
                                    <span>Velocidad de Carga</span>
                                </div>
                                <div className={`flex items-center gap-3 ${scanProgress > 80 ? 'text-red-600' : 'text-gray-300'}`}>
                                    {scanProgress > 80 ? <AlertTriangle size={28} strokeWidth={4} /> : <div className="w-7" />}
                                    <span>Fugas de Ventas</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <div className="bg-[#FF0000] text-white font-black text-xl py-4 px-2 border-4 border-black mb-8 shadow-[6px_6px_0_#000] transform rotate-1 uppercase">
                                <span className="mr-2">⚠</span> 3 Errores Críticos
                            </div>

                            <div className="flex flex-col gap-4">
                                <a href={whatsappUrl} target="_blank" className="bg-[#00E676] text-black font-black border-4 border-black py-4 px-6 shadow-[6px_6px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#000] transition-all flex items-center justify-center gap-3 text-xl no-underline uppercase">
                                    <MessageCircle size={28} strokeWidth={3} /> Whatsapp
                                </a>
                                <a href={mailtoUrl} className="bg-white text-black font-black border-4 border-black py-4 px-6 shadow-[6px_6px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#000] transition-all flex items-center justify-center gap-3 text-xl no-underline uppercase">
                                    <Mail size={28} strokeWidth={3} /> Email
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // 2. INDUSTRIAL THEME (Dark, technical, hazard)
    if (theme === Theme.Industrial) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-mono">
                {/* Backdrop with scanlines */}
                <div className="absolute inset-0 bg-[#050505]" onClick={onClose}>
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #111 25%, #111 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #111 25%, #111 75%, #000 75%, #000)',
                        backgroundPosition: '0 0, 10px 10px',
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>

                <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-[#fbbf24] shadow-[0_0_30px_rgba(251,191,36,0.15)] p-1 animate-[fadeIn_0.2s]">
                    {/* Decorative Corner Brackets */}
                    <div className="absolute -top-[2px] -left-[2px] w-6 h-6 border-t-4 border-l-4 border-[#fbbf24]"></div>
                    <div className="absolute -top-[2px] -right-[2px] w-6 h-6 border-t-4 border-r-4 border-[#fbbf24]"></div>
                    <div className="absolute -bottom-[2px] -left-[2px] w-6 h-6 border-b-4 border-l-4 border-[#fbbf24]"></div>
                    <div className="absolute -bottom-[2px] -right-[2px] w-6 h-6 border-b-4 border-r-4 border-[#fbbf24]"></div>

                    <div className="p-6 md:p-8 relative z-10">
                        <button onClick={onClose} className="absolute top-4 right-4 text-[#fbbf24] hover:text-white transition-colors">
                            <X size={24} />
                        </button>

                        <div className="flex items-center gap-2 text-[#fbbf24] text-xs font-bold tracking-widest mb-8 border-b border-[#fbbf24]/20 pb-4">
                            <Activity size={16} />
                            DIAGNOSTIC_TOOL_V.1.0
                        </div>

                        {scanStep < 3 ? (
                            <div className="animate-[fadeIn_0.2s]">
                                <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-widest uppercase font-mono" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
                                    Escaneo en Curso...
                                </h2>

                                {/* Progress Bar */}
                                <div className="w-full h-4 bg-[#1a1a1a] mb-2 border border-[#333]">
                                    <div className="h-full bg-[#fbbf24] transition-all duration-75 shadow-[0_0_15px_rgba(251,191,36,0.5)]" style={{ width: `${scanProgress}%` }}></div>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-[#fbbf24] mb-8 uppercase tracking-wider">
                                    <span>Procesando Datos</span>
                                    <span>{scanProgress}%</span>
                                </div>

                                {/* Log output */}
                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[#fbbf24] font-bold">[DOM]</span>
                                            <span className={scanProgress > 10 ? "text-white" : "text-gray-600"}>Analizando estructura...</span>
                                        </div>
                                        {scanProgress > 20 && <span className="text-[#00ff41] font-bold tracking-widest text-xs">OK</span>}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className={scanProgress > 40 ? "text-[#fbbf24] font-bold" : "text-gray-700"}>[NET]</span>
                                            <span className={scanProgress > 40 ? "text-white" : "text-gray-600"}>Midiendo latencia...</span>
                                        </div>
                                        {scanProgress > 60 && <span className="text-[#00ff41] font-bold tracking-widest text-xs">OK</span>}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className={scanProgress > 70 ? "text-[#fbbf24] font-bold" : "text-gray-700"}>[UX]</span>
                                            <span className={scanProgress > 70 ? "text-white" : "text-gray-600"}>Verificando usabilidad...</span>
                                        </div>
                                        {scanProgress > 85 && <span className="text-[#00ff41] font-bold tracking-widest text-xs animate-pulse">FAIL</span>}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="animate-[fadeIn_0.2s]">
                                <div className="border border-red-500/50 bg-red-950/20 p-8 mb-8 text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.05)_10px,rgba(239,68,68,0.05)_20px)] pointer-events-none"></div>
                                    <AlertTriangle className="mx-auto mb-4 text-red-500 animate-pulse" size={48} />
                                    <h3 className="text-red-500 font-black text-3xl tracking-[0.15em] mb-2 uppercase" style={{ textShadow: '0 0 20px rgba(239,68,68,0.4)' }}>
                                        Fallo Crítico
                                    </h3>
                                    <p className="text-[10px] md:text-xs text-red-400 uppercase tracking-widest font-bold">
                                        Integridad del sistema comprometida
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <a href={whatsappUrl} target="_blank" className="block w-full bg-[#fbbf24] text-black font-black text-center py-4 hover:bg-white transition-all uppercase tracking-[0.15em] text-sm no-underline shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                                        &gt; Contactar por WhatsApp
                                    </a>
                                    <a href={mailtoUrl} className="block w-full border border-[#fbbf24] text-[#fbbf24] font-bold text-center py-4 hover:bg-[#fbbf24]/10 transition-colors uppercase tracking-[0.15em] text-sm no-underline">
                                        &gt; Enviar Reporte por Email
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="fixed bottom-4 text-[#fbbf24]/40 text-[10px] uppercase tracking-[0.2em] font-bold select-none">
                    Precaución: Alto Impacto Digital
                </div>
            </div>
        );
    }

    // 3. RETRO 95 THEME (Windows 95 style)
    if (theme === Theme.Retro95) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-tahoma select-none">
                <div className="absolute inset-0 bg-[#008080]" onClick={onClose} />

                <div className="relative w-full max-w-sm bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_grey,inset_2px_2px_#fff] p-1">
                    {/* Header */}
                    <div className="bg-[#000080] px-2 py-0.5 flex justify-between items-center mb-3">
                        <span className="font-bold text-white text-[12px] flex items-center gap-2">
                            <span className="font-mono font-normal">_&gt;</span> Scan_Disk.exe
                        </span>
                        <button onClick={onClose} className="bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center shadow-[inset_1px_1px_#fff,inset_-1px_-1px_#000] active:shadow-[inset_1px_1px_#000,inset_-1px_-1px_#fff] p-0 text-[10px] font-bold leading-none active:translate-y-[1px]">
                            X
                        </button>
                    </div>

                    <div className="px-3 pb-2">
                        {scanStep < 3 ? (
                            <>
                                <p className="mb-4 text-[12px] text-black">Analizando clusters del sitio web...</p>

                                <div className="flex justify-between text-[11px] mb-1 text-black font-bold">
                                    <span>Progreso</span>
                                    <span>{scanProgress}%</span>
                                </div>

                                {/* Progress bar container (sunken) */}
                                <div className="h-6 bg-white shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] p-[2px] mb-6 relative">
                                    {/* Solid chunk bar (Win95 style) */}
                                    <div className="h-full bg-[#000080] transition-all duration-75" style={{ width: `${scanProgress}%` }}></div>
                                </div>

                                {/* Log Box (Sunken) */}
                                <div className="h-32 bg-white shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] p-3 overflow-y-auto font-mono text-[11px] text-black">
                                    <div className="mb-2">C:\&gt; chkdsk /f web_structure</div>
                                    <div className="flex gap-2 mb-1">
                                        <span>Análisis de archivos...</span>
                                        {scanProgress > 10 && <span className="text-[#008000] font-bold">OK</span>}
                                    </div>
                                    {scanProgress > 30 && <div className="flex gap-2 mb-1"><span>Verificando índices...</span> <span className="text-[#008000] font-bold">OK</span></div>}
                                    {scanProgress > 60 && <div className="flex gap-2 mb-1"><span>Recuperando sectores...</span> <span className="text-[#008000] font-bold">OK</span></div>}
                                    {scanProgress > 90 && <div className="mt-2 text-red-600">!! ERROR: Integridad baja detectada.</div>}
                                </div>
                            </>
                        ) : (
                            <div className="pb-2">
                                <div className="flex items-start gap-4 mb-6 mt-2">
                                    {/* Warning Icon (Yellow Triangle) */}
                                    <div className="shrink-0 relative">
                                        <AlertTriangle size={36} className="text-yellow-400 fill-yellow-400" stroke="black" strokeWidth={1.5} />
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] text-black font-serif font-bold text-lg">!</span>
                                    </div>
                                    <div className="text-left text-[12px] text-black leading-relaxed">
                                        Scan_Disk ha encontrado errores en la unidad "Conversión".
                                        <br />
                                        ¿Desea repararlos ahora?
                                    </div>
                                </div>
                                <div className="flex justify-center gap-4 px-4">
                                    <a href={whatsappUrl} target="_blank" className="min-w-[75px] px-2 py-1 bg-[#c0c0c0] text-black text-[11px] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_grey,inset_2px_2px_#fff] active:shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] active:translate-y-[1px] outline-none border border-transparent focus:border-black focus:border-dotted text-center no-underline">
                                        WhatsApp
                                    </a>
                                    <a href={mailtoUrl} className="min-w-[75px] px-2 py-1 bg-[#c0c0c0] text-black text-[11px] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_grey,inset_2px_2px_#fff] active:shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] active:translate-y-[1px] outline-none border border-transparent focus:border-black focus:border-dotted text-center no-underline">
                                        Email
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // 4. SWISS THEME (Minimalist, Grid, Helvetica)
    if (theme === Theme.Swiss) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans bg-[#EAEAEA]/90 backdrop-blur-sm">
                <div className="relative w-full max-w-[500px] bg-[#F4F4F4] shadow-2xl animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                    <button onClick={onClose} className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center bg-black text-white hover:bg-[#FF3B30] transition-colors z-50">
                        <X size={24} />
                    </button>

                    <div className="p-10 md:p-14">
                        {scanStep < 3 ? (
                            <>
                                <div className="mb-12 leading-[0.8]">
                                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black mb-0">
                                        ANÁLISIS
                                    </h2>
                                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#FF3B30]">
                                        001
                                    </h2>
                                </div>

                                <div className="flex items-end justify-between mb-4">
                                    <span className="text-[11px] font-bold tracking-[0.15em] text-black uppercase pb-1">ESTADO DEL PROCESO</span>
                                    <span className="text-6xl font-black text-black tracking-tighter leading-none">{scanProgress}%</span>
                                </div>

                                <div className="w-full h-4 bg-gray-200 mb-10">
                                    <div className="h-full bg-[#FF3B30] ease-linear transition-all duration-75" style={{ width: `${scanProgress}%` }}></div>
                                </div>

                                <div className="border-t-2 border-black pt-6 flex flex-col gap-3">
                                    <div className="flex justify-between items-baseline group">
                                        <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${scanProgress > 10 ? 'text-black' : 'text-gray-300'}`}>ESTRUCTURA</span>
                                        <span className={`text-[10px] font-bold tracking-widest uppercase ${scanProgress > 20 ? 'text-black' : 'opacity-0'}`}>VERIFICADO</span>
                                    </div>
                                    <div className="flex justify-between items-baseline group">
                                        <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${scanProgress > 50 ? 'text-black' : 'text-gray-300'}`}>VELOCIDAD</span>
                                        <span className={`text-[10px] font-bold tracking-widest uppercase ${scanProgress > 60 ? 'text-black' : 'opacity-0'}`}>VERIFICADO</span>
                                    </div>
                                    <div className="flex justify-between items-baseline group">
                                        <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${scanProgress > 80 ? 'text-[#FF3B30]' : 'text-gray-300'}`}>CONVERSIÓN</span>
                                        <span className={`text-[10px] font-bold tracking-widest uppercase text-[#FF3B30] ${scanProgress > 85 ? 'animate-pulse' : 'opacity-0'}`}>ERROR</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="mb-8 leading-[0.8]">
                                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black mb-0">
                                        INFORME
                                    </h2>
                                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#FF3B30]">
                                        FINALIZADO
                                    </h2>
                                </div>

                                <p className="text-lg md:text-xl font-bold leading-tight mb-12 text-black max-w-sm">
                                    Deficiencias estructurales críticas detectadas. Se requiere intervención inmediata.
                                </p>

                                <div className="border-t-2 border-black flex flex-col">
                                    <a href={whatsappUrl} target="_blank" className="group py-6 border-b border-gray-300 hover:bg-[#FF3B30] transition-colors no-underline flex items-center justify-between cursor-pointer relative overflow-hidden">
                                        <span className="relative z-10 font-bold text-sm tracking-widest text-black group-hover:text-white transition-colors pl-2">01. CONTACTAR (WHATSAPP)</span>
                                    </a>
                                    <a href={mailtoUrl} className="group py-6 border-b border-black hover:bg-black transition-colors no-underline flex items-center justify-between cursor-pointer relative overflow-hidden">
                                        <span className="relative z-10 font-bold text-sm tracking-widest text-gray-500 group-hover:text-white transition-colors pl-2">02. SOLICITAR INFORME (EMAIL)</span>
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // 5. WINDOWS XP THEME
    if (theme === Theme.WindowsXP) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-tahoma text-[11px] leading-normal antialiased">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" onClick={onClose} />

                <div className="relative w-full max-w-[450px] bg-white border-[3px] border-[#245DDA] rounded-t-[8px] rounded-b-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="h-[32px] flex justify-between items-center px-3 bg-gradient-to-r from-[#245DDA] via-[#3582F7] to-[#245DDA] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] select-none shrink-0">
                        <span className="text-white font-bold text-[13px] drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]">Asistente de Optimización</span>
                        <div
                            className="w-[22px] h-[22px] bg-[#DC5638] border border-white/60 rounded-[3px] flex items-center justify-center cursor-pointer hover:bg-[#E87358] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] active:bg-[#B3351C]"
                            onClick={onClose}
                        >
                            <X size={16} stroke="white" strokeWidth={3} className="drop-shadow-sm" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white p-6 relative min-h-[320px]">
                        {scanStep < 3 ? (
                            <div className="flex flex-col h-full">
                                <h3 className="font-bold text-black text-[12px] mb-8">Espere mientras el asistente analiza su sitio...</h3>

                                <div className="flex justify-center mb-10">
                                    {/* Custom XP Spinner */}
                                    <div className="relative w-16 h-16 animate-[spin_1.5s_steps(8)_infinite]">
                                        {[...Array(8)].map((_, i) => (
                                            <div key={i} className="absolute top-0 left-1/2 w-2 h-4 -ml-1 bg-[#4A61CE] rounded-full origin-[50%_32px]" style={{ transform: `rotate(${i * 45}deg)`, opacity: 1 - (i * 0.1) }}></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Segmented Progress Bar */}
                                <div className="border border-[#8E8E8E] rounded-[2px] p-[1px] bg-white h-5 w-full mb-2 shadow-[inset_1px_1px_1px_#dbdbdb]">
                                    <div className="h-full flex gap-[1px] overflow-hidden" style={{ width: `${Math.max(5, scanProgress)}%`, transition: 'width 0.1s linear' }}>
                                        {/* Segments - create enough to fill 100% */}
                                        {[...Array(40)].map((_, i) => (
                                            <div key={i} className="w-[10px] h-full bg-gradient-to-b from-[#baff75] via-[#44d400] to-[#259b02] shrink-0 border-r border-white/20"></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-[11px] text-[#444] mt-1">
                                    Calculando puntuación de rendimiento...
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col h-full">
                                <h3 className="font-bold text-black text-[12px] mb-6">Análisis Completado</h3>

                                <div className="flex items-start gap-4 mb-6">
                                    <div className="shrink-0">
                                        <AlertTriangle size={32} className="text-[#FFB700]" fill="#FFF200" stroke="#C88500" />
                                    </div>
                                    <div className="text-[11px] text-black leading-relaxed">
                                        El asistente ha detectado que su sitio web podría ser un <strong>300% más rápido</strong>. Estos problemas están afectando a sus ventas diarias.
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Action Bar */}
                    {scanStep >= 3 && (
                        <div className="bg-[#F0F0F0] border-t border-[#D9D9D9] p-3 flex justify-end gap-2 shrink-0">
                            <a href={mailtoUrl} className="px-4 py-1 min-w-[75px] border border-[#003C74] rounded-[3px] bg-gradient-to-b from-white to-[#ECE9D8] text-black text-[11px] hover:to-[#ffe48d] no-underline flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.1)] active:shadow-inner cursor-pointer">
                                Enviar Email
                            </a>
                            <a href={whatsappUrl} target="_blank" className="px-4 py-1 min-w-[75px] border border-[#003C74] rounded-[3px] bg-gradient-to-b from-white to-[#ECE9D8] text-black text-[11px] font-bold hover:to-[#ffe48d] no-underline flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.1)] active:shadow-inner ring-1 ring-inset ring-white/50 cursor-pointer">
                                WhatsApp &gt;
                            </a>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // 6. SKETCH THEME (Hand-drawn)
    if (theme === Theme.Sketch) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-architect text-gray-800">
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" onClick={onClose} />

                <div className="relative w-full max-w-md bg-white p-8 md:p-12 shadow-[10px_10px_0px_rgba(0,0,0,0.1)] transform rotate-1 transition-all"
                    style={{
                        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                        border: '3px solid #222',
                        boxShadow: '5px 5px 15px rgba(0,0,0,0.1)'
                    }}>

                    {/* Tape */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 -rotate-1 shadow-sm z-10"></div>

                    {/* Close Button */}
                    <button onClick={onClose} className="absolute -top-3 -right-3 text-gray-500 hover:text-red-500 hover:scale-110 transition-transform bg-white rounded-full">
                        <X size={32} strokeWidth={1.5} />
                    </button>

                    {scanStep < 3 ? (
                        <div className="text-center pt-4">
                            <h2 className="text-3xl font-bold mb-8 relative inline-block text-[#222]">
                                Revisando Apuntes...
                                {/* Blue underline marker stroke */}
                                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
                                </svg>
                            </h2>

                            {/* Progress Bar Container */}
                            <div className="w-full h-8 border-[3px] border-[#222] rounded-full p-1 mb-2 relative overflow-hidden bg-white" style={{ borderRadius: '20px 255px 20px 255px / 255px 20px 255px 20px' }}>
                                <div className="h-full bg-blue-400 rounded-full transition-all duration-200" style={{ width: `${scanProgress}%`, borderRadius: '10px' }}></div>
                            </div>
                            <div className="text-sm text-gray-500 mb-10 font-bold text-right">{scanProgress}% Completado</div>

                            {/* Checklist */}
                            <div className="text-left space-y-6 ml-4 text-xl">
                                <div className="flex items-center gap-4">
                                    {/* Checkbox 1 */}
                                    <div className="relative w-6 h-6 border-[3px] border-[#222] rounded-sm flex items-center justify-center transition-colors">
                                        {scanProgress > 20 && (
                                            <svg className="w-8 h-8 text-[#222] absolute -top-2 -left-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                    <span className={scanProgress > 20 ? "text-[#222]" : "text-gray-400"}>Revisión de diseño</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* Checkbox 2 */}
                                    <div className="relative w-6 h-6 border-[3px] border-[#222] rounded-sm flex items-center justify-center transition-colors">
                                        {scanProgress > 60 && (
                                            <svg className="w-8 h-8 text-[#222] absolute -top-2 -left-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                    <span className={scanProgress > 60 ? "text-[#222]" : "text-gray-400"}>Test de usabilidad</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center pt-2">
                            {/* Red Alert Circle */}
                            <div className="w-24 h-24 border-[4px] border-[#ff3b30] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce text-[#ff3b30] relative"
                                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
                                <span className="text-7xl font-bold font-sans">!</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-[#222]">¡Oportunidad Encontrada!</h3>
                            <p className="mb-8 leading-relaxed text-lg text-gray-600 px-2">
                                Tu web es un buen boceto, pero le falta color para vender más.
                            </p>

                            <div className="flex flex-col gap-4">
                                <a href={whatsappUrl} target="_blank" className="py-3 px-6 border-[3px] border-blue-600 text-blue-700 bg-white hover:bg-blue-50 transition-colors font-bold no-underline flex items-center justify-center gap-2 text-lg"
                                    style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', transform: 'rotate(-1deg)' }}>
                                    <PenTool size={20} className="stroke-[2.5px]" />
                                    <span>Escribir por WhatsApp</span>
                                </a>
                                <a href={mailtoUrl} className="py-3 px-6 border-[3px] border-gray-400 text-gray-500 bg-white hover:bg-gray-50 transition-colors no-underline text-lg font-bold"
                                    style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px', transform: 'rotate(1deg)' }}>
                                    Enviar un correo
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // 7. EDITORIAL THEME (Newspaper style)
    if (theme === Theme.Editorial) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-serif text-black">
                <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose} />

                <div className="relative w-full max-w-lg bg-[#fdfbf7] shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-0 animate-[slideUp_0.4s_ease-out] border-2 border-black overflow-hidden group">
                    {/* Texture Overlays */}
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-noise mix-blend-multiply z-0"></div>
                    <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-colors z-50 rounded-full border border-black cursor-pointer bg-white">
                        <X size={16} strokeWidth={2.5} />
                    </button>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col h-full">

                        {/* Masthead */}
                        <div className="border-b-4 border-black border-double pt-8 pb-3 px-6 bg-[#fdfbf7]">
                            <div className="flex justify-between items-end border-b border-black pb-1 mb-1">
                                <span className="text-[10px] font-sans font-black tracking-[0.2em] uppercase">Edición Especial</span>
                                <span className="text-[10px] font-sans font-bold uppercase">{new Date().toLocaleDateString()}</span>
                            </div>
                            <h1 className="text-4xl font-black font-serif text-center leading-none tracking-tight scale-y-110 mb-2">
                                EL INFORME
                            </h1>
                            <div className="border-t border-black pt-1 flex justify-center gap-4 text-[9px] font-sans uppercase font-bold tracking-widest">
                                <span>Vol. 2025</span>
                                <span>•</span>
                                <span>Análisis Web</span>
                                <span>•</span>
                                <span>Confidencial</span>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            {scanStep < 3 ? (
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                                        <h2 className="text-xl font-bold font-serif italic border-b-2 border-red-600 inline-block pr-4">
                                            Investigación en curso...
                                        </h2>
                                    </div>

                                    <div className="font-mono text-xs mb-2 text-right">{scanProgress}% COMPLETADO</div>
                                    <div className="h-6 w-full border-2 border-black p-[2px] mb-6 relative bg-white">
                                        <div className="h-full bg-black relative" style={{ width: `${scanProgress}%` }}>
                                            {/* Texture on bar */}
                                            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }}></div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 font-serif text-base pl-2 border-l-4 border-gray-300">
                                        <div className="flex items-start gap-3 transition-opacity duration-300" style={{ opacity: scanProgress > 10 ? 1 : 0.4 }}>
                                            <span className="font-bold font-sans text-xl leading-none">{scanProgress > 20 ? '\u2612' : '\u2610'}</span>
                                            <span className={`text-lg leading-tight ${scanProgress > 20 ? 'line-through decoration-red-600 decoration-2 decoration-wavy' : ''}`}>Verificando legibilidad tipográfica</span>
                                        </div>
                                        <div className="flex items-start gap-3 transition-opacity duration-300" style={{ opacity: scanProgress > 40 ? 1 : 0.4 }}>
                                            <span className="font-bold font-sans text-xl leading-none">{scanProgress > 60 ? '\u2612' : '\u2610'}</span>
                                            <span className={`text-lg leading-tight ${scanProgress > 60 ? 'line-through decoration-red-600 decoration-2 decoration-wavy' : ''}`}>Midiendo velocidad de carga</span>
                                        </div>
                                        <div className="flex items-start gap-3 transition-opacity duration-300" style={{ opacity: scanProgress > 70 ? 1 : 0.4 }}>
                                            <span className="font-bold font-sans text-xl leading-none">{scanProgress > 80 ? '\u2612' : '\u2610'}</span>
                                            <span className={`text-lg leading-tight ${scanProgress > 80 ? 'text-red-600 font-bold bg-yellow-200 px-1' : ''}`}>
                                                {scanProgress > 80 ? '¡ERRORES CRÍTICOS DETECTADOS!' : 'Buscando fugas de conversión'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative">
                                    {/* Stamp Animation */}
                                    <div className="absolute top-0 right-0 transform rotate-12 z-20 animate-[ping_0.5s_cubic-bezier(0,0,0.2,1)_1] origin-center opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
                                        <div className="border-4 border-red-600 text-red-600 px-4 py-2 font-black uppercase text-xl tracking-widest opacity-80 mix-blend-multiply mask-ink flex items-center gap-2 transform scale-110">
                                            <Stamp size={24} /> CASO URGENTE
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <span className="bg-red-600 text-white px-2 py-1 text-[10px] font-sans font-black uppercase tracking-widest mb-2 inline-block">
                                            FLASH INFORMATIVO
                                        </span>
                                        <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-[0.9] font-serif tracking-tighter mix-blend-multiply">
                                            POTENCIAL<br />DESPERDICIADO
                                        </h2>
                                        <div className="flex gap-4 items-start">
                                            <span className="text-5xl font-black float-left leading-[0.8] font-sans">"</span>
                                            <p className="text-lg leading-6 font-serif text-justify">
                                                Nuestras fuentes confirman que su sitio web está perdiendo clientes. La estructura actual no cumple con los estándares modernos de conversión.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 font-sans relative z-30">
                                        <a href={whatsappUrl} target="_blank" className="w-full bg-black text-white py-4 px-6 hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] transition-all text-center uppercase tracking-widest font-black text-sm flex items-center justify-center gap-2 group no-underline border-2 border-black cursor-pointer">
                                            <MessageCircle size={18} /> Contactar por WhatsApp
                                        </a>

                                        <a href={mailtoUrl} className="w-full bg-white text-black border-2 border-black py-4 px-6 hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] transition-all text-center uppercase tracking-widest font-bold text-sm flex items-center justify-center gap-2 no-underline cursor-pointer group">
                                            <Scissors size={18} className="group-hover:-rotate-12 transition-transform" /> Enviar Reporte por Email
                                        </a>
                                    </div>

                                    <div className="mt-6 border-t border-black pt-2 flex justify-between items-center opacity-60">
                                        <div className="h-6 w-24 bg-black/20" style={{ maskImage: 'linear-gradient(90deg, transparent 2px, #000 2px, #000 4px)', maskSize: '4px 100%' }}></div>
                                        <span className="text-[9px] font-sans font-bold uppercase tracking-widest">Precio: Gratuito</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default Fallback
    return null;
};

export default AuditModule;
