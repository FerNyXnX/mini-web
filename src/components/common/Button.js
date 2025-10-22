import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Componente Button reutilizable
 * Soporta diferentes variantes y tamaños
 */

const buttonVariants = {
  primary: css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    border: none;
  `,
  secondary: css`
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.light};
    border: none;
  `,
  outline: css`
    background: transparent;
    color: ${props => props.theme.colors.accent};
    border: 2px solid ${props => props.theme.colors.accent};
  `,
  ghost: css`
    background: transparent;
    color: ${props => props.theme.colors.text};
    border: none;
  `,
};

const buttonSizes = {
  small: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `,
};

const Button = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 600;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  ${props => buttonVariants[props.variant || 'primary']}
  ${props => buttonSizes[props.size || 'medium']}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover::before {
    width: 300px;
    height: 300px;
  }
`;

Button.defaultProps = {
  as: motion.button,
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

export default Button;