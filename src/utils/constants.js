/**
 * Constantes utilizadas en toda la aplicación
 */

export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Inicio', path: '/' },
  { id: 'services', label: 'Servicios', path: '/#services' },
  { id: 'pricing', label: 'Precios', path: '/#pricing' },
  { id: 'testimonials', label: 'Testimonios', path: '/#testimonials' },
  { id: 'contact', label: 'Contacto', path: '/#contact' },
];

export const SERVICES = [
  {
    id: 1,
    icon: 'code',
    title: 'Landing Pages',
    description: 'Páginas de aterrizaje optimizadas para conversión con diseño moderno y responsive',
    features: [
      'Diseño responsive',
      'Optimización SEO',
      'Alta velocidad de carga',
      'Integración con analytics',
    ],
  },
  {
    id: 2,
    icon: 'layers',
    title: 'Web Apps',
    description: 'Aplicaciones web completas con funcionalidades avanzadas y experiencia de usuario excepcional',
    features: [
      'Arquitectura escalable',
      'API RESTful',
      'Base de datos optimizada',
      'Panel de administración',
    ],
  },
  {
    id: 3,
    icon: 'smartphone',
    title: 'Apps Móviles',
    description: 'Aplicaciones móviles nativas y multiplataforma para iOS y Android',
    features: [
      'Desarrollo nativo',
      'React Native',
      'Publicación en stores',
      'Actualizaciones OTA',
    ],
  },
];

export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: 299,
    currency: '$',
    period: 'mes',
    description: 'Perfecto para empezar',
    features: [
      '1 Landing Page',
      'Hosting incluido',
      'SSL Certificado',
      'Soporte básico',
      '5 GB Almacenamiento',
      'Analytics básico',
    ],
    featured: false,
    cta: 'Comenzar Ahora',
  },
  {
    id: 2,
    name: 'Professional',
    price: 599,
    currency: '$',
    period: 'mes',
    description: 'Para negocios en crecimiento',
    features: [
      '3 Landing Pages',
      '1 Web App',
      'Hosting Premium',
      'SSL Certificado',
      'Soporte 24/7',
      '50 GB Almacenamiento',
      'Analytics avanzado',
      'Backups diarios',
    ],
    featured: true,
    cta: 'Más Popular',
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 999,
    currency: '$',
    period: 'mes',
    description: 'Solución completa empresarial',
    features: [
      'Landing Pages ilimitadas',
      'Web Apps ilimitadas',
      'Apps móviles',
      'Hosting dedicado',
      'Soporte prioritario',
      'Almacenamiento ilimitado',
      'API personalizada',
      'Consultoría incluida',
      'SLA garantizado',
    ],
    featured: false,
    cta: 'Contactar Ventas',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: 'El equipo transformó completamente nuestra presencia digital. La landing page aumentó nuestras conversiones en un 150%.',
    author: 'María García',
    role: 'CEO',
    company: 'TechStart',
    avatar: 'MG',
    image: "/testimonials-maria-garcia.jpeg", // ruta de la imagen: '/testimonials/maria-garcia.jpg'
    rating: 5,
  },
  {
    id: 2,
    text: 'La web app que desarrollaron superó todas nuestras expectativas. Funciona perfectamente y nuestros clientes la adoran.',
    author: 'Carlos Rodríguez',
    role: 'CTO',
    company: 'InnovateLab',
    avatar: 'CR',
    image: "/testimonials-carlos-rodriguez.jpg", // ruta de la imagen: '/testimonials/carlos-rodriguez.jpg'
    rating: 5,
  },
  {
    id: 3,
    text: 'Profesionales, puntuales y con resultados excepcionales. La mejor inversión para nuestro negocio digital.',
    author: 'Ana Martínez',
    role: 'Directora',
    company: 'DigitalFlow',
    avatar: 'AM',
    image: "/testimonials-ana-martinez.jpg", // ruta de la imagen: '/testimonials/ana-martinez.jpg'
    rating: 5,
  },
];

export const SOCIAL_LINKS = [
  { id: 'instagram', icon: 'instagram', url: 'https://www.instagram.com/pixyn.studio' },
  { id: 'linkedin', icon: 'linkedin', url: 'https://www.linkedin.com/in/luis-fernando-torres-ruiz-44ab8b25a/' },
  { id: 'github', icon: 'github', url: 'https://github.com/FerNyXnX' },
];

export const COMPANY_INFO = {
  name: 'Pixyn Studio',
  tagline: 'Transformamos Ideas en Software Excepcional',
  email: 'pixynstudio@gmail.com',
  phone: '+52 123 456 7890',
  address: 'Ciudad de México, México',
  year: 2025,
};