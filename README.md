<div align="center">

# 🎨 Showcase de Diseños Web

**Una colección interactiva de 6 estilos visuales únicos para presentar propuestas de diseño web**

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## ✨ Características

- 🖼️ **6 Temas Únicos**: Collage, Editorial, Industrial, Retro 95, Sketch y Windows XP
- 📱 **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- 🎭 **Efectos Interactivos**: Parallax, animaciones y efectos hover
- 🎯 **Fácil Personalización**: Configura nombre, email y URL del portfolio
- ⚡ **Rendimiento Optimizado**: Construido con Vite para carga instantánea

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/CrearWeb.git

# Navegar al directorio
cd CrearWeb

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🎨 Temas Disponibles

| Tema | Descripción |
|------|-------------|
| **Collage** | Estilo recorte de revista con efectos parallax y colores vibrantes |
| **Editorial** | Diseño tipo periódico con tipografía serif elegante |
| **Industrial** | Estética de panel de control con indicadores y animaciones |
| **Retro 95** | Nostalgia Windows 95 con ventanas clásicas y barra de progreso |
| **Sketch** | Apariencia de boceto a mano con wireframes interactivos |
| **Windows XP** | Recreación fiel de Outlook Express en Windows XP |

## ⚙️ Configuración

Personaliza los datos en `App.tsx`:

```typescript
const INITIAL_CLIENT_DATA: ClientData = {
    businessName: "Tu Negocio",
    senderName: "Tu Nombre",
    senderEmail: "tu@email.com",
    portfolioUrl: "https://tu-portfolio.com"
};
```

## 📁 Estructura del Proyecto

```
CrearWeb/
├── App.tsx              # Componente principal
├── components/
│   ├── Navbar.tsx       # Navegación entre temas
│   └── views/
│       ├── CollageView.tsx
│       ├── EditorialView.tsx
│       ├── IndustrialView.tsx
│       ├── Retro95View.tsx
│       ├── SketchView.tsx
│       └── WindowsXPView.tsx
├── types.ts             # Tipos TypeScript
└── index.html           # Punto de entrada
```

## 🛠️ Tecnologías

- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Utilidades CSS
- **Lucide React** - Iconos

## 📄 Licencia

MIT © Jaime Lara

