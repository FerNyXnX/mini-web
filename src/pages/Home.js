import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

/**
 * Página principal que agrupa todas las secciones
 */
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;