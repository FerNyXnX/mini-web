import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Componente Card reutilizable
 * Contenedor estilizado para contenido
 */

const Card = styled(motion.div)`
  background: ${props => props.gradient ? props.theme.colors.card : 'rgba(255, 255, 255, 0.05)'};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.padding || props.theme.spacing.xl};
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  ${props => props.hoverable && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: ${props.theme.shadows.xl};
      border-color: ${props.theme.colors.accent};
    }
  `}
  
  ${props => props.featured && `
    background: ${props.theme.colors.primary};
    transform: scale(1.05);
    box-shadow: ${props.theme.shadows.xl};
    
    &::before {
      content: 'DESTACADO';
      position: absolute;
      top: 20px;
      right: -30px;
      background: ${props.theme.colors.secondary};
      color: ${props.theme.colors.light};
      padding: 5px 40px;
      font-size: 0.75rem;
      font-weight: bold;
      transform: rotate(45deg);
    }
  `}
`;

Card.defaultProps = {
  as: motion.div,
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default Card;

export const CardHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.light};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const CardDescription = styled.p`
  color: ${props => props.theme.colors.textDark};
  line-height: 1.6;
`;

export const CardFooter = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
  padding-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;