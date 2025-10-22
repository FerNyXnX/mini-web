import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Componente Layout
 * Wrapper principal para todas las páginas
 */

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;