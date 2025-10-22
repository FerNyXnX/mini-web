import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';
import Card from '../common/Card';
import { SERVICES } from '../../utils/constants';

const ServicesSection = styled.section`
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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.light};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.textDark};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

const ServiceFeature = styled.li`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.success};
  }
`;

const Services = () => {
  const getIcon = (iconName) => {
    const icons = {
      code: <FiCode />,
      layers: <FiLayers />,
      smartphone: <FiSmartphone />,
    };
    return icons[iconName] || <FiCode />;
  };

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ofrecemos soluciones completas de desarrollo de software adaptadas a las necesidades de tu negocio
        </SectionDescription>
        
        <ServiceGrid>
          {SERVICES.map((service, index) => (
            <Card
              key={service.id}
              hoverable
              gradient
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceIcon>{getIcon(service.icon)}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <ServiceFeature key={idx}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </Card>
          ))}
        </ServiceGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;