# Pixyn - Professional SaaS Website

## 🚀 Descripción
Sitio web profesional para servicios de desarrollo de software SaaS, construido con React, Redux y styled-components.

## 📋 Prerequisitos
- Node.js 16+ 
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
\`\`\`bash
git clone https://github.com/FerNyXnX/mini-web.git
cd mini-web
\`\`\`

2. Instalar dependencias:
\`\`\`bash
npm install
\`\`\`

3. Iniciar en modo desarrollo:
\`\`\`bash
npm start
\`\`\`

## 🏗️ Build de Producción

\`\`\`bash
npm run build
\`\`\`

## 🧪 Testing

\`\`\`bash
# Ejecutar tests
npm test

# Coverage
npm run test:coverage
\`\`\`

## 🚀 Despliegue en Netlify

### Opción 1: CLI
\`\`\`bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=build
\`\`\`

### Opción 2: Git Integration
1. Push código a GitHub
2. Conectar repo en Netlify
3. Auto-deploy en cada push

## 📁 Estructura del Proyecto
\`\`\`
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas de la aplicación  
├── redux/         # Estado global
├── styles/        # Estilos y tema
├── utils/         # Utilidades
└── tests/         # Tests
\`\`\`

## 🛠️ Tecnologías
- React 18
- Redux Toolkit
- Styled Components
- Jest & React Testing Library
- Framer Motion

## 📄 Licencia
MIT