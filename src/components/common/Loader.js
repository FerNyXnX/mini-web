import React from 'react';
import styled, { keyframes } from 'styled-components';

/**
 * Componente Loader
 * Indicador de carga animado
 */

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.fullScreen ? '100vh' : '200px'};
`;

const Spinner = styled.div`
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
  border: 3px solid ${props => props.theme.colors.darkSecondary};
  border-top: 3px solid ${props => props.theme.colors.accent};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const DotLoader = styled.div`
  display: flex;
  gap: 0.5rem;
  
  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.colors.accent};
    animation: ${pulse} 1.4s ease-in-out infinite;
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Loader = ({ type = 'spinner', size, fullScreen }) => {
  if (type === 'dots') {
    return (
      <LoaderContainer fullScreen={fullScreen}>
        <DotLoader>
          <span></span>
          <span></span>
          <span></span>
        </DotLoader>
      </LoaderContainer>
    );
  }
  
  return (
    <LoaderContainer fullScreen={fullScreen}>
      <Spinner size={size} />
    </LoaderContainer>
  );
};

export default Loader;