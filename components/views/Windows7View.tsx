import React from 'react';
import { ViewProps } from '../../types';
import { CircleHelp, User, Paperclip, Send, Globe } from 'lucide-react';

const Windows7View: React.FC<ViewProps> = ({ data, onAuditClick }) => {
    return (
        <div className="w-full h-full font-sans p-6 pt-24 flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
            <style>{`
                .win7-scroll::-webkit-scrollbar { width: 17px; height: 17px; background-color: #F0F0F0; }
                .win7-scroll::-webkit-scrollbar-thumb { background-color: #CDD3E6; border: 1px solid #fff; box-shadow: inset 1px 0 0 #A8A8A8, inset 0 1px 0 #A8A8A8; }
                .win7-scroll::-webkit-scrollbar-thumb:hover { background-color: #A6B4CD; }
                .win7-scroll::-webkit-scrollbar-button { display: block; height: 17px; background-color: #F0F0F0; }
            `}</style>

            <div className="w-full max-w-2xl rounded-[8px] flex flex-col relative shadow-[0_0_15px_rgba(0,0,0,0.5),0_0_40px_rgba(0,0,0,0.3)] overflow-hidden transition-all backdrop-blur-[15px] border border-black/20 ring-1 ring-white/30">
                {/* Aero Glass Effects */}
                <div className="absolute inset-0 z-0 bg-[#bdcce4]/30"></div>
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/50 to-transparent opacity-80 pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-50 pointer-events-none z-0"></div>

                {/* Title Bar */}
                <div className="relative z-20 h-[30px] flex justify-between items-start px-2 pt-1.5 select-none">
                    <div className="flex items-center gap-2 pl-1">
                        <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-700 rounded-sm shadow-sm border border-black/30 ring-1 ring-white/40"></div>
                        <span className="text-[12px] text-black tracking-wide font-normal drop-shadow-[0_0_8px_white]">Nuevo Mensaje</span>
                    </div>
                    <div className="flex items-start -mt-1.5 -mr-2">
                        <Win7Btn type="minimize" />
                        <Win7Btn type="maximize" />
                        <Win7Btn type="close" />
                    </div>
                </div>

                {/* Toolbar */}
                <div className="relative z-10 px-0 pb-0 mt-1">
                    <div className="flex items-center gap-0 text-[12px] text-[#1e1e1e] border-t border-white/20 pt-1 pb-2 px-3 bg-gradient-to-b from-white/30 to-transparent">
                        <ToolbarBtn>Pegar</ToolbarBtn>
                        <ToolbarBtn>Cortar</ToolbarBtn>
                        <ToolbarBtn>Copiar</ToolbarBtn>
                        <div className="w-[1px] h-4 bg-black/10 mx-2 border-r border-white/20"></div>
                        <ToolbarBtn bold>Opciones</ToolbarBtn>
                        <div className="ml-auto text-[#0066cc] hover:underline cursor-pointer flex items-center gap-1">
                            <CircleHelp size={15} />
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 bg-white m-[5px] mt-0 rounded-[2px] flex flex-col h-full min-h-[420px] shadow-[0_0_0_1px_#8e9bb3] overflow-hidden">
                    {/* Headers */}
                    <div className="bg-[#f0f5f9] border-b border-[#aec2d4] px-4 py-2 flex flex-col gap-1 relative">
                        <div className="absolute right-4 top-4 w-12 h-12 border border-[#aebdd1] bg-white p-0.5 shadow-sm hidden md:block">
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-400">
                                <User size={24} />
                            </div>
                        </div>
                        <AddressRow label="Para..." value={data.businessName} />
                        <AddressRow label="Cc..." />
                        <AddressRow label="Asunto:" value="Propuesta de Sitio Web" />
                    </div>

                    {/* Body */}
                    <div className="flex-1 p-8 bg-white overflow-y-auto win7-scroll">
                        <h1 className="text-[24px] font-normal text-[#003399] mb-4 tracking-tight leading-none">Mejora Tu Presencia Digital</h1>
                        <div className="w-full h-px bg-gradient-to-r from-[#d9d9d9] via-[#d9d9d9] to-transparent mb-6"></div>
                        <p className="text-[#1e1e1e] text-[15px] leading-relaxed mb-8">
                            Hola {data.businessName}, he notado que vuestro negocio no tiene una web moderna. En {new Date().getFullYear()},
                            una presencia digital rápida y accesible es crucial. Soy {data.senderName}, ingeniero de software,
                            y puedo crearos una web que convierta visitantes en clientes.
                        </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-[#f5f6f7] border-t border-[#d9d9d9] p-3 flex justify-between items-center h-14">
                        <a
                            href={data.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[12px] text-[#0066cc] hover:underline px-2 py-1 hover:bg-[#e8eff7] rounded border border-transparent hover:border-[#b6d0e6]"
                        >
                            <Globe size={14} /> Ver Web Personal
                        </a>
                        <div className="flex gap-2">
                            <button className="px-4 py-1 text-[12px] text-black border border-[#b1b1b1] bg-gradient-to-b from-[#f4f4f4] to-[#e6e6e6] hover:from-[#eef5fa] hover:to-[#dcecf7] hover:border-[#3c7fb1] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                                Descartar
                            </button>
                            <button
                                onClick={onAuditClick}
                                className="group relative px-6 py-1 border border-[#707070] rounded-[2px] bg-gradient-to-b from-[#f2f2f2] via-[#e6e6e6] to-[#cfcfcf] hover:from-[#eaf6fd] hover:to-[#a7d9f5] hover:border-[#3c7fb1] shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center gap-2 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-px no-underline"
                            >
                                <span className="text-[13px] font-semibold text-[#1e1e1e] relative z-10">Auditoría Gratuita</span>
                                <Send size={13} className="text-[#1e1e1e] relative z-10" />
                                <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-[2px]"></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 h-6 w-full mt-auto backdrop-blur-md flex items-center px-2 text-[11px] text-[#1e1e1e] opacity-80">
                    Listo
                </div>
            </div>
        </div>
    );
};

const Win7Btn: React.FC<{ type: 'minimize' | 'maximize' | 'close' }> = ({ type }) => {
    if (type === 'close') {
        return (
            <button className="h-[26px] w-[48px] flex items-center justify-center bg-transparent hover:bg-[#e04343] hover:shadow-[inset_0_1px_0_rgba(255,150,150,0.5),inset_0_0_5px_rgba(150,0,0,0.5)] border border-transparent hover:border-[#b01e1e] rounded-b-[4px] transition-all group ml-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <div className="relative w-4 h-4 flex items-center justify-center mt-1">
                    <span className="absolute w-3 h-[2px] bg-[#444] shadow-[0_1px_0_white] rotate-45 group-hover:bg-white group-hover:shadow-none"></span>
                    <span className="absolute w-3 h-[2px] bg-[#444] shadow-[0_1px_0_white] -rotate-45 group-hover:bg-white group-hover:shadow-none"></span>
                </div>
            </button>
        );
    }
    return (
        <button className="h-[26px] w-[32px] flex items-center justify-center hover:bg-white/40 hover:shadow-[inset_0_0_2px_rgba(255,255,255,1)] border border-transparent hover:border-white/50 rounded-b-[4px] transition-all group shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
            {type === 'minimize' && <div className="w-2.5 h-[2px] bg-[#444] shadow-[0_1px_0_white] group-hover:bg-black rounded-full mt-1.5"></div>}
            {type === 'maximize' && <div className="w-2.5 h-2 border-[1.5px] border-[#444] shadow-[0_1px_0_white] group-hover:border-black rounded-[1px] mt-1"></div>}
        </button>
    );
};

const ToolbarBtn: React.FC<{ children: React.ReactNode, bold?: boolean }> = ({ children, bold }) => (
    <button className={`px-3 py-1 hover:bg-white/50 hover:border-white/60 border border-transparent rounded-[2px] transition-all ${bold ? 'font-bold' : ''}`}>
        {children}
    </button>
);

const AddressRow: React.FC<{ label: string, value?: string }> = ({ label, value }) => (
    <div className="flex items-center h-8">
        <button className="w-16 text-right pr-3 text-[#586c85] hover:bg-[#dfeaf4] border border-transparent hover:border-[#b6d0e6] text-[12px] h-6 flex items-center justify-end rounded-[2px] transition-colors">
            {label}
        </button>
        <div className={`flex-1 px-2 h-6 flex items-center text-[12px] ${value ? 'select-text border border-[#b8cce0] hover:border-[#6787a8] transition-colors shadow-inner bg-white' : 'hover:bg-white hover:border border-transparent hover:border-[#b8cce0]'}`}>
            {value}
        </div>
    </div>
);

export default Windows7View;