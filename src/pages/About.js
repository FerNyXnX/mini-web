import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiHeart } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 120px 0 80px;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.textDark};
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Nosotros
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Somos un equipo apasionado de desarrolladores y diseñadores comprometidos 
          con la creación de soluciones digitales excepcionales.
        </Description>
      </Container>
    </AboutSection>
  );
};

export default About;