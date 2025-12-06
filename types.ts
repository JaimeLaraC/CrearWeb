export enum Theme {
    Collage = 'collage',
    Editorial = 'editorial',
    Industrial = 'industrial',
    Retro95 = 'retro95',
    Sketch = 'sketch',
    WindowsXP = 'windowsxp',
}

export interface ClientData {
    businessName: string;
    senderName: string;
    senderEmail: string;
    portfolioUrl: string;
}

export interface ViewProps {
    data: ClientData;
}