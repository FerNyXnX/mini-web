import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Button from '../common/Button';
import Card from '../common/Card';
import { PRICING_PLANS } from '../../utils/constants';

const PricingSection = styled.section`
  padding: 80px 0;
  position: relative;
  background: ${props => props.theme.colors.darkSecondary};
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const PricingPlan = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${props => props.theme.colors.light};
`;

const PricingDescription = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.textDark};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PricingPrice = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  span {
    font-size: 1rem;
    color: ${props => props.theme.colors.textDark};
  }
`;

const PricingFeatures = styled.ul`
  list-style: none;
  margin: 2rem 0;
`;

const PricingFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  
  svg {
    color: ${props => props.theme.colors.success};
    flex-shrink: 0;
  }
`;

const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Planes y Precios
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Elige el plan que mejor se adapte a las necesidades de tu negocio
        </SectionDescription>
        
        <PricingGrid>
          {PRICING_PLANS.map((plan, index) => (
            <Card
              key={plan.id}
              featured={plan.featured}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingPlan>{plan.name}</PricingPlan>
              <PricingDescription>{plan.description}</PricingDescription>
              <PricingPrice>
                {plan.currency}{plan.price}
                <span>/{plan.period}</span>
              </PricingPrice>
              <PricingFeatures>
                {plan.features.map((feature, idx) => (
                  <PricingFeature key={idx}>
                    <FiCheck />
                    {feature}
                  </PricingFeature>
                ))}
              </PricingFeatures>
              <Button 
                variant={plan.featured ? "primary" : "outline"} 
                fullWidth
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </PricingGrid>
      </Container>
    </PricingSection>
  );
};

export default Pricing;