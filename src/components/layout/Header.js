import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, setMenuOpen } from '../../redux/slices/uiSlice';
import { NAVIGATION_ITEMS } from '../../utils/constants';

/**
 * Componente Header
 * Navegación principal de la aplicación
 */

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(10, 14, 39, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: 1px solid ${props => props.scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  transition: all ${props => props.theme.transitions.normal};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  
  img {
    height: 52px;
    width: auto;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 70%;
    background: ${props => props.theme.colors.darkSecondary};
    flex-direction: column;
    padding: 5rem 2rem;
    transition: right ${props => props.theme.transitions.normal};
    box-shadow: ${props => props.isOpen ? '-10px 0 30px rgba(0, 0, 0, 0.5)' : 'none'};
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  position: relative;
  transition: color ${props => props.theme.transitions.fast};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.accent};
    transition: width ${props => props.theme.transitions.normal};
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuToggle = styled(motion.div)`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  z-index: 1001;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Overlay = styled(motion.div)`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const menuOpen = useSelector(state => state.ui.menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    dispatch(setMenuOpen(false));
  };

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Nav>
          <Logo onClick={() => handleNavClick('home')}>
            <img src="/pixyn.svg" alt="Pixyn Studio Logo" />
          </Logo>
          
          <NavMenu isOpen={menuOpen}>
            {NAVIGATION_ITEMS.map((item) => (
              <NavItem key={item.id}>
                <NavLink onClick={() => handleNavClick(item.id)}>
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>

          <MenuToggle
            onClick={() => dispatch(toggleMenu())}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </MenuToggle>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {menuOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(setMenuOpen(false))}
            isOpen={menuOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;