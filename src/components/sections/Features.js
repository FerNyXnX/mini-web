import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiZap, FiShield, FiHeadphones, FiTrendingUp, FiGlobe, FiAward } from 'react-icons/fi';
import Card from '../common/Card';

const FeaturesSection = styled.section`
  padding: 80px 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionDescription = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.textDark};
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.1);
  
  svg {
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.light};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textDark};
  line-height: 1.6;
  text-align: center;
`;

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FiZap />,
      title: 'Rápido y Eficiente',
      description: 'Entregamos proyectos en tiempo récord sin comprometer la calidad del código.',
    },
    {
      id: 2,
      icon: <FiShield />,
      title: 'Seguro y Confiable',
      description: 'Implementamos las mejores prácticas de seguridad en cada proyecto.',
    },
    {
      id: 3,
      icon: <FiHeadphones />,
      title: 'Soporte 24/7',
      description: 'Estamos siempre disponibles para ayudarte con cualquier necesidad.',
    },
    {
      id: 4,
      icon: <FiTrendingUp />,
      title: 'Escalable',
      description: 'Arquitecturas diseñadas para crecer junto con tu negocio.',
    },
    {
      id: 5,
      icon: <FiGlobe />,
      title: 'Global',
      description: 'Experiencia trabajando con clientes de todo el mundo.',
    },
    {
      id: 6,
      icon: <FiAward />,
      title: 'Calidad Premium',
      description: 'Código limpio, documentado y siguiendo las mejores prácticas.',
    },
  ];

  return (
    <FeaturesSection id="features">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¿Por Qué Elegirnos?
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Combinamos experiencia técnica con un enfoque centrado en el usuario
        </SectionDescription>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              hoverable
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </Card>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;