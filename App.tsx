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
import AuditModule from '@/components/AuditModule';

// --- CONFIGURATION ---
// Change these values to personalize the pitch for your client
const INITIAL_CLIENT_DATA: ClientData = {
    businessName: "", // Left empty for generic mode
    senderName: "Jaime Lara",
    senderEmail: "contacto@email.com",
    portfolioUrl: "https://jaimelarac.github.io/WebProfesional/",
    audit: {
        score: 42,
        loadTime: "3.8s",
        accessibility: 65,
        issues: [
            "Mobile Layout Broken",
            "Low Contrast Text",
            "Slow Server Response",
            "Non-Semantic HTML"
        ],
        projectedConversionIncrease: "35%"
    }
};

const App: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.Collage);
    const [clientData] = useState<ClientData>(INITIAL_CLIENT_DATA);
    const [isAuditOpen, setIsAuditOpen] = useState(false);

    const handleAuditClick = () => {
        setIsAuditOpen(true);
    };

    const renderView = () => {
        const props = { data: clientData, onAuditClick: handleAuditClick };
        switch (currentTheme) {
            case Theme.Collage: return <CollageView {...props} />;
            case Theme.Editorial: return <EditorialView {...props} />;
            case Theme.Industrial: return <IndustrialView {...props} />;
            case Theme.Retro95: return <Retro95View {...props} />;
            case Theme.Sketch: return <SketchView {...props} />;
            case Theme.WindowsXP: return <WindowsXPView {...props} />;
            case Theme.Swiss: return <SwissView {...props} />;
            default: return <CollageView {...props} />;
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

            {/* Audit Module */}
            <AuditModule
                isOpen={isAuditOpen}
                onClose={() => setIsAuditOpen(false)}
                theme={currentTheme}
                data={clientData}
            />

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