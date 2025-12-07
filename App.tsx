import React, { useState } from 'react';
import { Theme, ClientData } from '@/types';
import Navbar from '@/components/Navbar';
import CollageView from '@/components/views/CollageView';
import EditorialView from '@/components/views/EditorialView';
import IndustrialView from '@/components/views/IndustrialView';
import Retro95View from '@/components/views/Retro95View';
import SketchView from '@/components/views/SketchView';
import WindowsXPView from '@/components/views/WindowsXPView';
import SwissView from '@/components/views/SwissView';

// --- CONFIGURATION ---
// Change these values to personalize the pitch for your client
const INITIAL_CLIENT_DATA: ClientData = {
    businessName: "", // Left empty for generic mode
    senderName: "Jaime Lara",
    senderEmail: "contacto@email.com",
    portfolioUrl: "https://jaimelarac.github.io/WebProfesional/"
};

const App: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.Collage);
    const [clientData] = useState<ClientData>(INITIAL_CLIENT_DATA);

    const renderView = () => {
        switch (currentTheme) {
            case Theme.Collage: return <CollageView data={clientData} />;
            case Theme.Editorial: return <EditorialView data={clientData} />;
            case Theme.Industrial: return <IndustrialView data={clientData} />;
            case Theme.Retro95: return <Retro95View data={clientData} />;
            case Theme.Sketch: return <SketchView data={clientData} />;
            case Theme.WindowsXP: return <WindowsXPView data={clientData} />;
            case Theme.Swiss: return <SwissView data={clientData} />;
            default: return <CollageView data={clientData} />;
        }
    };

    // Determine if we should show retro effects
    const isRetro = [Theme.Retro95, Theme.WindowsXP, Theme.Industrial].includes(currentTheme);

    return (
        <div className="min-h-screen w-full relative bg-gray-900 overflow-x-hidden">
            {/* CRT Overlay for retro themes */}
            {isRetro && (
                <>
                    <div className="absolute inset-0 z-40 crt-overlay pointer-events-none opacity-30"></div>
                    <div className="absolute inset-0 z-40 crt-flicker pointer-events-none mix-blend-overlay"></div>
                </>
            )}

            {/* Navigation */}
            <div className="absolute top-3 md:top-6 left-0 right-0 z-50 flex justify-center px-2 md:px-4 pointer-events-none">
                <div className="pointer-events-auto max-w-[95vw] md:max-w-none">
                    <Navbar activeTheme={currentTheme} onThemeChange={setCurrentTheme} />
                </div>
            </div>

            {/* Viewport */}
            <div className="w-full h-full animate-[fadeIn_0.5s_ease-out]">
                {renderView()}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
};

export default App;