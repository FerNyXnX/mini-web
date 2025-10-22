import React from 'react';
import styled from 'styled-components';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../utils/constants';

/**
 * Componente Footer
 * Pie de página con información de la empresa
 */

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.darkSecondary};
  padding: 3rem 0 1rem;
  margin-top: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div``;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const FooterTitle = styled.h4`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.accent};
  font-size: 1.1rem;
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.textDark};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.textDark};
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

const FooterList = styled.ul`
  list-style: none;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.colors.textDark};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.light};
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 1rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.colors.textDark};
`;

const Footer = () => {
  const getSocialIcon = (type) => {
    const icons = {
      facebook: <FiFacebook />,
      twitter: <FiTwitter />,
      linkedin: <FiLinkedin />,
      github: <FiGithub />,
    };
    return icons[type] || null;
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>{COMPANY_INFO.name}</Logo>
          <FooterText>
            {COMPANY_INFO.tagline}
          </FooterText>
          <FooterText>
            Transformando ideas en soluciones digitales innovadoras desde {COMPANY_INFO.year}.
          </FooterText>
          <SocialLinks>
            {SOCIAL_LINKS.map((link) => (
              <SocialLink 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getSocialIcon(link.icon)}
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Servicios</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#services">Landing Pages</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#services">Web Apps</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#services">Apps Móviles</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#services">Consultoría</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Empresa</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="/about">Sobre Nosotros</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#testimonials">Portfolio</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Blog</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Carreras</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <FooterLink href={`mailto:${COMPANY_INFO.email}`}>
            <FiMail /> {COMPANY_INFO.email}
          </FooterLink>
          <FooterLink href={`tel:${COMPANY_INFO.phone}`}>
            <FiPhone /> {COMPANY_INFO.phone}
          </FooterLink>
          <FooterLink href="#">
            <FiMapPin /> {COMPANY_INFO.address}
          </FooterLink>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>© {COMPANY_INFO.year} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;