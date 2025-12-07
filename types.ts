export enum Theme {
    Collage = 'collage',
    Editorial = 'editorial',
    Industrial = 'industrial',
    Retro95 = 'retro95',
    Sketch = 'sketch',
    WindowsXP = 'windowsxp',
    Swiss = 'swiss',
}

export interface AuditData {
    score: number;
    loadTime: string;
    accessibility: number;
    issues: string[];
    projectedConversionIncrease: string;
}

export interface ClientData {
    businessName: string;
    senderName: string;
    senderEmail: string;
    portfolioUrl: string;
    audit?: AuditData;
}

export interface ViewProps {
    data: ClientData;
    onAuditClick: () => void;
}