/**
 * Tema global de la aplicación
 * Define colores, breakpoints y otros valores de diseño
 */
const theme = {
  colors: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    dark: '#0a0e27',
    darkSecondary: '#151931',
    light: '#ffffff',
    text: '#e0e0e0',
    textDark: '#a0a0a0',
    accent: '#667eea',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    card: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1440px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '5px',
    md: '10px',
    lg: '20px',
    full: '50px',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

export default theme;