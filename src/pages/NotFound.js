import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundSection = styled.section`
  padding: 120px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  text-align: center;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 8rem;
  font-weight: bold;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ErrorMessage = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  margin: 1rem 0 2rem;
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundSection>
      <Container>
        <ErrorCode
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </ErrorCode>
        <ErrorMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Página no encontrada
        </ErrorMessage>
        <Button 
          variant="primary" 
          size="large"
          onClick={() => navigate('/')}
        >
          Volver al Inicio
        </Button>
      </Container>
    </NotFoundSection>
  );
};

export default NotFound;