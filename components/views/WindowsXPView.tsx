import React, { useState } from 'react';
import { ViewProps } from '../../types';
import { Mail, Minus, Square, X, HardDrive, Printer, ChevronRight, CircleHelp, Globe, Trash2, Reply, Forward, Send, FileText, FolderOpen } from 'lucide-react';

const WindowsXPView: React.FC<ViewProps> = ({ data, onAuditClick }) => {
    return (
        <div className="w-full min-h-screen font-tahoma p-2 md:p-8 pt-20 md:pt-8 flex items-start md:items-center justify-center overflow-x-hidden bg-cover bg-center select-none" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/7/7d/Bliss.png')" }}>
            <style>{`
                .xp-scroll::-webkit-scrollbar { width: 16px; height: 16px; background-color: #ECE9D8; }
                .xp-scroll::-webkit-scrollbar-track { background-color: #ECE9D8; border-left: 1px solid #fff; box-shadow: inset 1px 1px 0 #aca899; }
                .xp-scroll::-webkit-scrollbar-thumb { background-color: #C2D5FC; border: 1px solid #fff; border-right-color: #6C85BD; border-bottom-color: #6C85BD; box-shadow: inset 1px 1px 0 #fff; border-radius: 0; }
                .xp-scroll::-webkit-scrollbar-thumb:hover { background-color: #Dce7fc; }
                .font-verdana { font-family: Verdana, sans-serif; }
            `}</style>

            <div className="w-full max-w-5xl bg-[#ECE9D8] rounded-t-[8px] flex flex-col relative shadow-[4px_4px_12px_rgba(0,0,0,0.5)] h-auto min-h-[85vh] md:h-[600px] md:min-h-0" style={{ border: "3px solid #0055EA", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>

                {/* Title Bar */}
                <div
                    className="h-[30px] flex justify-between items-center px-2 relative rounded-t-[5px] shrink-0"
                    style={{
                        background: "linear-gradient(180deg, #0058EE 0%, #3593FF 4%, #288EFF 6%, #127DFF 8%, #0369FF 10%, #0254EB 90%, #0055EA 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)"
                    }}
                >
                    <div className="flex items-center gap-2 text-white font-bold text-[13px] pl-1 drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)]">
                        <Mail size={16} />
                        <span className="pt-[2px]">Bandeja de entrada - Outlook Express</span>
                    </div>
                    <div className="flex items-center gap-[2px]">
                        <XPHeaderBtn type="min" />
                        <XPHeaderBtn type="max" />
                        <XPHeaderBtn type="close" />
                    </div>
                </div>

                {/* Menu Bar */}
                <div className="flex items-center gap-0 px-1 py-[1px] bg-[#ECE9D8] border-b border-[#D4D0C8] text-[11px] text-black shrink-0">
                    <div className="h-5 w-[2px] border-l border-white border-r border-[#ACA899] mx-1 mr-1"></div>
                    {['Archivo', 'Edición', 'Ver', 'Herramientas', 'Mensaje', 'Ayuda'].map(item => (
                        <div key={item} className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white cursor-default">
                            {item}
                        </div>
                    ))}
                    <div className="ml-auto opacity-80 scale-75 origin-right">
                        <WindowsLogo />
                    </div>
                </div>

                {/* Toolbar - Hidden on very small screens */}
                <div className="hidden sm:flex px-1 py-1 items-center gap-0 border-b border-[#aca899] shadow-[0_1px_0_white] shrink-0" style={{ background: "linear-gradient(to bottom, #F7F6F3 0%, #ECE9D8 100%)" }}>
                    <div className="h-10 w-[2px] border-l border-white border-r border-[#ACA899] mx-1"></div>
                    <XPToolbarBtn icon={<Mail size={22} className="text-green-600" fill="currentColor" fillOpacity={0.1} />} label="Crear correo" />
                    <div className="w-[1px] h-8 bg-[#aca899] mx-1 border-r border-white"></div>
                    <XPToolbarBtn icon={<Reply size={22} className="text-blue-600" />} label="Responder" />
                    <XPToolbarBtn icon={<Forward size={22} className="text-blue-600" />} label="Reenviar" />
                    <div className="w-[1px] h-8 bg-[#aca899] mx-1 border-r border-white"></div>
                    <XPToolbarBtn icon={<Printer size={22} className="text-gray-600" />} label="Imprimir" />
                    <XPToolbarBtn icon={<Trash2 size={22} className="text-red-500" />} label="Eliminar" />
                </div>

                {/* Body Content Split */}
                <div className="flex-1 bg-white overflow-hidden flex flex-col md:flex-row">

                    {/* Left Sidebar (Folder List) */}
                    <div className="hidden md:flex w-48 bg-white flex-col border-r border-[#D4D0C8]">
                        <div className="bg-[#215DC6] text-white text-[11px] font-bold px-3 py-1 flex items-center justify-between border-t border-b border-[#215DC6]">
                            <span>Carpetas</span>
                            <X size={10} className="opacity-50 cursor-pointer hover:opacity-100" />
                        </div>
                        <div className="flex-1 bg-white p-2 overflow-y-auto xp-scroll text-[11px] font-tahoma">
                            <FolderItem label="Outlook Express" root />
                            <div className="pl-4 flex flex-col gap-0.5 mt-0.5">
                                <FolderItem label="Carpetas locales" root />
                                <div className="pl-5 flex flex-col gap-0.5">
                                    <FolderItem label="Bandeja de entrada" active count={1} />
                                    <FolderItem label="Bandeja de salida" />
                                    <FolderItem label="Elementos enviados" />
                                    <FolderItem label="Elementos eliminados" />
                                    <FolderItem label="Borradores" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content (Message List + Preview) */}
                    <div className="flex-1 flex flex-col bg-white overflow-hidden">

                        {/* Message List (Top Pane) */}
                        <div className="h-24 md:h-32 bg-white border-b border-[#D4D0C8] flex flex-col shrink-0">
                            {/* Columns Header */}
                            <div className="flex bg-[#ECE9D8] border-b border-[#D4D0C8] text-[11px] text-[#444] shadow-[0_1px_0_white] select-none">
                                <div className="w-6 border-r border-[#D4D0C8] flex justify-center py-0.5 hover:bg-white active:bg-[#d4d0c8]"><Mail size={10} /></div>
                                <div className="w-6 border-r border-[#D4D0C8] flex justify-center py-0.5 hover:bg-white active:bg-[#d4d0c8]"><span className="text-red-500 font-bold">!</span></div>
                                <div className="w-48 px-2 border-r border-[#D4D0C8] py-0.5 hover:bg-white active:bg-[#d4d0c8]">De</div>
                                <div className="flex-1 px-2 border-r border-[#D4D0C8] py-0.5 hover:bg-white active:bg-[#d4d0c8]">Asunto</div>
                                <div className="w-24 px-2 border-r border-[#D4D0C8] py-0.5 hover:bg-white active:bg-[#d4d0c8] hidden md:block">Recibido</div>
                            </div>

                            {/* Message Item (Selected) */}
                            <div className="flex bg-[#316AC5] text-white text-[11px] items-center cursor-default h-5">
                                <div className="w-6 flex justify-center"><Mail size={12} fill="white" strokeWidth={1} /></div>
                                <div className="w-6 flex justify-center text-red-100 font-bold">!</div>
                                <div className="w-48 px-2 truncate">{data.senderName}</div>
                                <div className="flex-1 px-2 truncate">Propuesta: Modernización Web</div>
                                <div className="w-24 px-2 truncate text-right hidden md:block">{new Date().toLocaleDateString()}</div>
                            </div>
                            {/* Empty space filler */}
                            <div className="flex-1 bg-white"></div>
                        </div>

                        {/* Drag Handle */}
                        <div className="h-1 bg-[#ECE9D8] border-t border-b border-[#D4D0C8] cursor-row-resize"></div>

                        {/* Preview Pane Header */}
                        <div className="bg-[#ECE9D8] px-3 py-1 flex items-center justify-between border-b border-[#D4D0C8] shadow-[0_1px_0_white] shrink-0">
                            <div className="flex gap-2 text-[11px]">
                                <span className="text-[#444]">De:</span> <span className="font-bold">{data.senderName}</span>
                                <span className="text-[#444] ml-2">Para:</span> <span>Propietario del sitio</span>
                            </div>
                            <div className="text-[11px] text-[#666]">
                                Asunto: Propuesta: Modernización Web
                            </div>
                        </div>

                        {/* Preview Content (The Email) */}
                        <div className="flex-1 p-6 overflow-y-auto bg-white font-verdana text-[13px] text-black xp-scroll">

                            <div className="bg-[#ffffe1] border border-[#d4d0c8] p-2 mb-4 text-[11px] flex items-center gap-2">
                                <div className="bg-[#003399] text-white rounded-full w-3.5 h-3.5 flex items-center justify-center font-serif italic font-bold">i</div>
                                Mensaje de alta prioridad. El remitente ha solicitado confirmación de lectura.
                            </div>

                            <h1 className="text-xl font-bold text-[#003399] mb-4">
                                ¿Está su negocio listo para el futuro?
                            </h1>

                            <p className="mb-4">
                                Estimado cliente,
                            </p>
                            <p className="mb-4">
                                He estado analizando su presencia digital actual y he detectado varias oportunidades de mejora crítica.
                                En el mercado actual, una web rápida no es opcional, es una necesidad para destacar.
                            </p>

                            <ul className="list-disc pl-5 mb-6 space-y-1 text-[#333]">
                                <li>Optimización para móviles (Responsive)</li>
                                <li>Tiempos de carga instantáneos</li>
                                <li>SEO técnico avanzado</li>
                            </ul>

                            <p className="mb-6">
                                Soy <strong>{data.senderName}</strong>, y me especializo en construir soluciones web robustas que funcionan tan bien como se ven.
                            </p>

                            <div className="flex gap-3 mt-8 border-t border-[#eee] pt-4">
                                <button
                                    onClick={onAuditClick}
                                    className="px-4 py-1.5 bg-white border border-[#003399] text-[#003399] hover:bg-[#003399] hover:text-white transition-colors no-underline text-xs font-bold shadow-[1px_1px_0_rgba(0,0,0,0.1)] flex items-center gap-2 rounded-sm"
                                >
                                    <Reply size={14} /> Responder Oferta
                                </button>
                                <a
                                    href={data.portfolioUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-1.5 bg-[#003399] text-white border border-[#003399] hover:brightness-110 no-underline text-xs font-bold shadow-[1px_1px_0_rgba(0,0,0,0.2)] flex items-center gap-2 rounded-sm"
                                >
                                    <Globe size={14} /> Ver Portfolio
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// UI Components

const XPHeaderBtn: React.FC<{ type: 'min' | 'max' | 'close' }> = ({ type }) => {
    const isClose = type === 'close';
    const bg = isClose ? "bg-[#e04238] hover:bg-[#ff5d52] active:bg-[#c72e25]" : "bg-[#1d5bf2] hover:brightness-110 active:brightness-90";
    return (
        <button className={`w-[21px] h-[21px] ${bg} border border-white/60 rounded-[3px] flex items-center justify-center shadow-[inset_0_0_2px_rgba(255,255,255,0.5),inset_-1px_-1px_2px_rgba(0,0,0,0.2)] active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)] ml-[2px]`}>
            {type === 'min' && <Minus size={10} stroke="white" strokeWidth={4} className="mt-1.5 ml-0.5 opacity-90" />}
            {type === 'max' && <Square size={10} stroke="white" strokeWidth={3} className="mt-[1px] opacity-90" />}
            {type === 'close' && <X size={12} stroke="white" strokeWidth={3} className="opacity-95" />}
        </button>
    )
}

const XPToolbarBtn: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
    <div className="flex flex-col items-center justify-center px-2 py-1 hover:border-[#aca899] hover:shadow-[inset_0_0_1px_#fff] border border-transparent rounded-[2px] cursor-pointer group active:bg-[#d4d0c8] min-w-[50px]">
        <div className="w-6 h-6 flex items-center justify-center filter drop-shadow-[1px_1px_0_rgba(255,255,255,0.8)]">{icon}</div>
        <span className="text-[11px] text-black mt-0.5 leading-none">{label}</span>
    </div>
)

const FolderItem: React.FC<{ label: string, active?: boolean, count?: number, root?: boolean }> = ({ label, active, count, root }) => (
    <div className={`flex items-center gap-1.5 px-1 py-[1px] cursor-default ${active ? 'bg-[#316AC5] text-white border border-dotted border-white/20' : 'text-black hover:underline'}`}>
        {root ? <FolderOpen size={13} className={active ? "text-white" : "text-[#dcb67a]"} fill="currentColor" /> : <FileText size={12} className={active ? "text-white" : "text-[#999]"} />}
        <span className="truncate">{label}</span>
        {count && <span className="font-bold ml-auto text-[10px] opacity-90">({count})</span>}
    </div>
)

const WindowsLogo = () => (
    <div className="grid grid-cols-2 gap-[1px] transform -rotate-12 scale-90">
        <div className="w-3 h-3 bg-[#f25022] rounded-tl-[3px] shadow-sm"></div>
        <div className="w-3 h-3 bg-[#7fba00] rounded-tr-[3px] shadow-sm"></div>
        <div className="w-3 h-3 bg-[#00a4ef] rounded-bl-[3px] shadow-sm"></div>
        <div className="w-3 h-3 bg-[#ffb900] rounded-br-[3px] shadow-sm"></div>
    </div>
)

export default WindowsXPView;