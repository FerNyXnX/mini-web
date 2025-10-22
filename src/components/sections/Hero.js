import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import Button from '../common/Button';

/**
 * Componente Hero
 * Sección principal de bienvenida
 */

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    animation: ${float} 20s ease-in-out infinite;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)``;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: ${gradient} 3s ease infinite;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  animation: ${float} 6s ease-in-out infinite;
`;

const FloatingCard = styled(motion.div)`
  background: ${props => props.theme.colors.card};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: ${props => props.center ? 'center' : 'left'};
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textDark};
  font-size: 0.9rem;
`;

const Hero = () => {
  const stats = [
    { number: '100+', label: 'Proyectos Completados' },
    { number: '50+', label: 'Clientes Satisfechos' },
    { number: '5★', label: 'Calificación Promedio' },
  ];

  return (
    <HeroSection id="home">
      <Container>
        <HeroContent>
          <HeroText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>
              Transformamos Ideas en Software Excepcional
            </Title>
            <Subtitle>
              Creamos landing pages, web apps y aplicaciones móviles que impulsan 
              el crecimiento de tu negocio con tecnología de vanguardia.
            </Subtitle>
            
            <ButtonGroup>
              <Button 
                variant="primary" 
                size="large"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Empezar Proyecto <FiArrowRight />
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                <FiPlay /> Ver Demo
              </Button>
            </ButtonGroup>

            <Stats>
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  center={false}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </Stats>
          </HeroText>

          <HeroImage
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FloatingCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)' rx='20'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='Arial'%3EInnovación Digital%3C/text%3E%3C/svg%3E"
                alt="Innovación Digital"
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              />
            </FloatingCard>
          </HeroImage>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;